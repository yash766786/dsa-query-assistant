import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Cpu } from "lucide-react";

export default function BotMessage({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 10); // adjust speed (ms per character)
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex justify-start animate-fadeIn">
      {/* Bot avatar */}
      <div className="w-8 h-8 py-2 rounded-full flex items-center justify-center bg-gray-700 text-white">
        <Cpu className="w-5 h-5" />
      </div>

      {/* Message bubble */}
      <div className=" text-gray-100 px-4 py-2 rounded-2xl max-w-[95%] shadow-md border-t-2 border-t-gray-700 border-black leading-relaxed">
        {/* Markdown content */}
        <div className="prose prose-invert max-w-none prose-p:my-2 prose-li:my-1 prose-strong:strongcolor prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:text-blue-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            // components={{
            //   strong: ({ children }) => (
            //     <strong className="strongcolor">{children}</strong>
            //   ),
            //   code: ({ children }) => (
            //     <code className="bg-gray-800 px-1 rounded strongcolor">
            //       {children}
            //     </code>
            //   ),
            // }}
          >
            {displayedText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
