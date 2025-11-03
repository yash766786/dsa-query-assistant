# 🧠 DSA Query Assistant

An intelligent **RAG-based AI chatbot** that answers **Data Structures and Algorithms (DSA)** questions using context retrieved from a vectorized knowledge base.  
Built with **Next.js**, **Gemini AI**, and **Pinecone Vector Database**, this assistant rewrites and processes queries to deliver accurate, context-aware responses from preloaded DSA materials.

🚀 **Live Demo:** [https://dsa-query-assistant.vercel.app/](https://dsa-query-assistant.vercel.app/)

---

## 🏗️ Project Overview

The **DSA Query Assistant** allows users to ask algorithmic or data structure-related questions.  
The system uses **Retrieval-Augmented Generation (RAG)** to fetch relevant document chunks from a **Pinecone vector database**, then uses **Gemini AI** to generate an accurate, concise explanation — just like a personalized DSA instructor.

---

## 🧩 Key Features

- 🔍 **Query Rewriting:** Converts follow-up or incomplete user questions into standalone queries using Gemini AI.  
- 📚 **RAG Pipeline:** Embeds, retrieves, and ranks the most relevant DSA context from Pinecone.  
- 🧠 **Context-Aware Answers:** Ensures all responses are derived only from available context.  
- ⚡ **Token Optimization:** Maintains only the latest query-response pair for efficient token usage.  
- 💬 **Modern Chat UI:** Clean and responsive conversational interface with syntax highlighting and markdown rendering.  
- 🔒 **Error-Handled API Layer:** Custom `ApiResponse`, `ApiError`, and `asyncHandler` utilities for robust backend logic.  

---

## 🧠 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js 14, React, TailwindCSS, TypeScript |
| **Backend** | Next.js API Routes, Gemini AI SDK |
| **Vector Store** | Pinecone Vector Database |
| **Embedding Model** | Gemini Embeddings API |
| **UI Enhancements** | React Markdown, Remark GFM, Rehype Highlight |
| **Utilities** | Axios, React Hot Toast, Custom API Handlers |

---

## ⚙️ How It Works

1. **User Input:** The user asks a DSA-related question.
2. **Query Rewriting:** Gemini AI rephrases it into a complete, standalone query.
3. **Vector Search:** The rewritten query is embedded and searched in Pinecone.
4. **Context Retrieval:** Top relevant chunks are fetched as context.
5. **Answer Generation:** Gemini AI produces a structured, educational answer using the context.
6. **Response Display:** The result is rendered beautifully in markdown with highlighted code.

---

## 🧑‍💻 Project Structure

```

src/   
│   
├── app/   
│   ├── api/   
│   │   └── chat/route.ts       # Core API route for query + response      
│   ├── components/   
│   │   ├── BotMessage.tsx      # Markdown-rendered bot responses    
│   │   ├── UserMessage.tsx     # User chat bubbles    
│   │   └── ChatBox.tsx         # Chat input and message list    
│   ├── utils/   
│   │   ├── apiResponse.ts    
│   │   ├── apiError.ts   
│   │   └── asyncHandler.ts   
│   └── page.tsx                # Main chat interface
│   
└── README.md  

````

---

## 🧪 Local Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yash766786/dsa-query-assistant.git
cd dsa-query-assistant
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=dsa-index
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Open in your browser

👉 [http://localhost:3000](http://localhost:3000)

---

## 📖 Example Query

```
Q: Explain how a queue works internally.
```

🧩 **Response:**

> A queue is a linear data structure that follows the FIFO (First In, First Out) principle.
> Elements are added at the rear (enqueue) and removed from the front (dequeue).
> Queues can be implemented using arrays or linked lists with O(1) insertion and deletion.

---

## 👨‍💻 About the Developer

**👋 Hi, I’m Yash!**
I’m a passionate **Full Stack Developer** and **AI enthusiast** who loves building intelligent systems that combine LLMs with real-world data sources.

* 💼 **Focused on:** MERN, Next.js, WebSockets, AI/ML integration
* 🧩 **Interests:** Competitive Programming, DSA, and scalable app architectures
* 🌐 **Portfolio:** [https://yash766786.github.io](https://yash766786.github.io)
* 📧 **Contact:** [yash766786@gmail.com](mailto:yash766786@gmail.com)

---

## 🌟 Future Enhancements

* 🗂️ Add user-specific document uploads for personalized RAG.
* 📊 Add analytics dashboard for query trends.
* 🧠 Add caching layer for faster repeated queries.
* 🗣️ Integrate voice-based query input.

---

## 🏁 Conclusion

The **DSA Query Assistant** serves as a modern example of **Retrieval-Augmented Generation (RAG)** applied to education — combining **AI reasoning** and **contextual retrieval** for fast, reliable, and educational DSA explanations.

---

