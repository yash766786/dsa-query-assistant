# 🤖 DSA Query Assistant (Next.js + Gemini + Pinecone)

## 📘 Overview
DSA Query Assistant is an intelligent web app that helps users get instant answers to Data Structure and Algorithm-related questions.  
It uses **Gemini AI** for query rewriting and answering, and **Pinecone** for context-based retrieval to ensure accuracy.

---

## 🧠 Features
- Rewrites user follow-up questions into standalone, complete queries.  
- Searches relevant context from embedded documents in Pinecone.  
- Generates precise DSA-based answers using Gemini.  
- Maintains minimal chat history for contextual understanding.  
- Built with clean modular architecture and error handling.

---

## 🧰 Tech Stack

**Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Backend:** Next.js API Routes  
**AI/ML:** Google Gemini (via `ai.models.generateContent`)  
**Vector Database:** Pinecone  
**Embeddings:** Google Generative AI Embeddings  
**Utils:** Custom asyncHandler, ApiResponse, ApiError  
**Hosting:** (You can add Vercel if you’re hosting there)

---

## ⚙️ Project Structure
app/
└── api/
└── query/
└── route.ts # Handles AI + Pinecone logic
lib/
├── utils/
│ ├── asyncHandler.ts
│ ├── ApiResponse.ts
│ └── ApiError.ts
├── ai/
│ └── index.ts
└── pinecone/
└── client.ts


---

## 🧑‍💻 About Me
Hey there! I’m **Yash**, a passionate developer focused on  
**MERN Stack**, **Data Structures & Algorithms**, and **AI integrations**.  

- 💼 Building full-stack apps with clean architecture  
- 🧩 Exploring AI, system design, and performance optimization  
- 🚀 Always learning and sharing knowledge

---

## 📬 Contact Me
- **GitHub:** [github.com/yash766786](https://github.com/yash766786)  
- **LinkedIn:** (you can add your link)  
- **Email:** (optional)  

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).

---

## 💡 Future Enhancements
- Add UI for uploading custom notes for personalized Q&A.  
- Integrate chat history persistence in DB.  
- Add user authentication for saved sessions.
