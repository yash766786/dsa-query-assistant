"use client";

import React from "react";
import { Github, Linkedin, Globe, Database, Cpu, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Query Assistant",
    description: "Rewrites user questions and generates precise DSA answers using Gemini AI.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Contextual Retrieval",
    description: "Searches relevant context from embedded documents stored in Pinecone vector DB.",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Minimal Chat History",
    description: "Maintains just enough chat history for context without storing unnecessary data.",
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
  },
  {
    title: "Clean & Modular Architecture",
    description: "Built with Next.js API Routes, TypeScript, and Tailwind for maintainable code.",
    icon: <Code className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
  },
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-linear-to-r from-green-700 via-blue-700 to-purple-700 text-white py-24 px-6 text-center relative overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          🤖 DSA Query Assistant
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-xl mx-auto"
        >
          Intelligent assistant for Data Structures & Algorithms queries, powered by AI & vector search.
        </motion.p>
      </header>

      {/* About Project */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center"
        >
          About the Project
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 leading-relaxed"
        >
          <p>
            <strong>DSA Query Assistant</strong> is an intelligent web app built using <strong>Next.js</strong>,
            <strong> TypeScript</strong>, and <strong>Tailwind CSS</strong>.  
            It helps users get instant answers to Data Structures & Algorithms questions.
          </p>
          <p>
            The app leverages <strong>Gemini AI</strong> for query rewriting and answering, and <strong>Pinecone</strong> for
            context-aware retrieval. This ensures accurate, context-driven responses.
          </p>
          <p>
            It includes a **Markdown-enabled typewriter effect**, syntax-highlighted code blocks, and a smooth,
            interactive chat interface.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Features
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className={`${feature.color} p-3 rounded-xl flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How I Built This */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center"
        >
          How I Built This
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 leading-relaxed"
        >
          <p>
            The project uses <strong>Next.js App Router</strong> for frontend and API routes.  
            User queries are sent to the backend API which integrates <strong>Gemini AI</strong> for rewriting
            and generating answers.
          </p>
          <p>
            Contextual information is retrieved using <strong>Pinecone vector database</strong> and
            embeddings from <strong>Google Generative AI Embeddings</strong>.  
            This allows RAG (retrieval-augmented generation) for accurate answers.
          </p>
          <p>
            The frontend features a **Markdown-enabled chat** with typewriter effect, code highlighting, and
            dynamic avatars for user and bot.
          </p>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed mb-4 text-center"
        >
          Hi! I&apos;m <strong>Yash Kr Choudhary</strong>, a passionate developer focused on MERN Stack, Data Structures & Algorithms,  
          and AI integrations. I build interactive web apps with clean architecture and modern tech.
        </motion.p>

        <div className="flex md:flex-row flex-col justify-center gap-6 mt-6">
          <a
            href="https://github.com/yash766786"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yash-kr-choudhary-4823752a7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            href="https://yash-portfolio-azure.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-500 transition"
          >
            <Globe className="w-5 h-5" /> Portfolio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t mt-12">
        &copy; {new Date().getFullYear()} Yash. All rights reserved.
      </footer>
    </div>
  );
}
