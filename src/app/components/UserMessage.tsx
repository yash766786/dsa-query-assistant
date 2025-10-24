import { User } from "lucide-react";

export default function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end items-end gap-2">
      {/* Message bubble */}
      <div className="usercolor text-white px-4 py-2 rounded-2xl max-w-[85%] shadow-md border-t-2 border-t-neutral-700">
        {text}
      </div>

      {/* User avatar */}
      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        <User className="w-5 h-5" />
      </div>
    </div>
  );
}
