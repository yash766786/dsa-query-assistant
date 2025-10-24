"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UserMessage from "./components/UserMessage";
import BotMessage from "./components/BotMessage";
import { BookOpen, Cpu } from "lucide-react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([
    {
      from: "bot",
      text: "👋 Hi! I'm your DSA Expert. Ask me anything about DSA!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);

    try {
      const userText = question.trim();
      setMessages((prev) => [...prev, { from: "user", text: userText }]);
      setQuestion("");

      const { data } = await axios.post("/api/chat", { question: userText });
      console.log(data);

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: data.data.answer },
        ]);
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (err: unknown) {
      let errorMessage = "Failed to fetch response.";

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof (err as { response?: { data?: { message?: string } } }).response
          ?.data?.message === "string"
      ) {
        errorMessage = (err as { response: { data: { message: string } } })
          .response.data.message;
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col backgroundcolor text-white">
      {/* Header */}
      <header className="py-4 text-center headercolor fixed top-0 w-full flex justify-between items-center px-10">
        {/* Left: Project Name */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Cpu className="h-6 w-6 text-blue-400" />
          DSA Query Assistant
        </h1>

        {/* Right: Documentation Button */}
        <a
          href="/documentation"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer"
        >
          <BookOpen className="h-6 w-6 text-white hover:text-gray-400 transition" />

          {/* Tooltip */}
          <span
            className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 transition 
                     backgroundcolor text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none"
          >
            Documentation
          </span>
        </a>
      </header>

      {/* Chat Section */}
      <section className="flex-1 overflow-y-auto p-6 space-y-4 mt-12 mb-12 ">
        {messages.map((msg, i) =>
          msg.from === "user" ? (
            <UserMessage key={i} text={msg.text} />
          ) : (
            <BotMessage key={i} text={msg.text} />
          )
        )}

        {loading && <BotMessage text="Thinking..." />}
        <div ref={chatEndRef} />
      </section>

      {/* Input Box */}
      <form
        onSubmit={handleSearch}
        className="p-4 flex gap-2 border-t border-gray-800 headercolor fixed bottom-0 w-full"
      >
        <input
          type="text"
          placeholder="Ask something about DSA..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg backgroundcolor text-white outline-none focus:ring-1 focus:ring-blue-900"
        />
        <button
          type="submit"
          disabled={loading}
          className="backgroundcolor hover:bg-blue-700 disabled:opacity-50 px-6 py-3 rounded-lg font-semibold transition"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </main>
  );
}
