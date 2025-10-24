import { NextResponse } from "next/server";
import { ApiResponse } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";
import { asyncHandler } from "@/utils/asyncHandler";
import { embeddings, ai } from "@/lib/gemini";
import { pineconeIndex } from "@/lib/pinecone";

// Maintain conversation history (only last Q&A pair)
let history: {
    role: string;
    parts: {
        text: string;
    }[];
}[] = [];

export const POST = asyncHandler(async (req: Request) => {
    console.log("--------------------------------------------------------------------------------")
    const { question }: { question: string } = await req.json();
    console.log("question:",question)
  
    if (!question?.trim()) throw new ApiError(400, "Question is required");

    // Maintain only last Q&A before adding new query
    if (history.length > 2) {
        history = history.slice(-2);
    }

    // Rewrite user query into a standalone question
    history.push({
      role: "user",
      parts: [{ text: question }],
    });
  
    const rewriteRes = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: history,
      config: {
        systemInstruction: `
        You are a query rewriting expert. Based on the provided chat history, rephrase the "Follow Up user Question" into a complete, standalone question that can be understood without the chat history.
        Only output the rewritten question and nothing else.
        `,
      },
    });
    
    const rewritten = rewriteRes.text?.trim() || "";
    console.log("Rewritten Query:", rewritten);

    // Remove the temporary rewrite message to keep history clean
    history.pop();
    

    // Embed & Search in Pinecone
    const queryVector = await embeddings.embedQuery(rewritten);
    const searchResults = await pineconeIndex.query({
      topK: 5,
      vector: queryVector,
      includeMetadata: true,
    });
  
    const context = searchResults.matches
      .map((m) => m.metadata?.text)
      .join("\n\n---\n\n");
  
    // Add current user question (rewritten by model1:query expert)
    history.push({ 
      role: "user", 
      parts: [{ text: rewritten }] 
    });
  
    // Generate answer based on context
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: history,
      config: {
        systemInstruction: `
        You have to behave like a Data Structure and Algorithm Expert.
        You will be given a context of relevant information and a user question.
        Your task is to answer the user's question based ONLY on the provided context.
        If the answer is not in the context, you must say "I could not find the answer in the provided document."
        Keep your answers clear, concise, and educational.
        Context: ${context}
        `,
      },
    });
  
    const answer = response.text?.trim() || "";

    // Save this Q&A as latest context
    history.push({ 
        role: "model", 
        parts: [{ text: answer }] 
    });
  
    // Return response
    return NextResponse
        .json(new ApiResponse(200, { rewritten, answer }, "Query responsed"));
});