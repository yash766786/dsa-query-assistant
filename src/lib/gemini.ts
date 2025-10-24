import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GEMINI_API_KEY!,
  model: "text-embedding-004",
});
