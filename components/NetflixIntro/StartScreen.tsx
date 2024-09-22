"use client";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function StartScreen({ onEnter }: { onEnter: () => void }) {
  const { displayedText, isComplete } = useTypewriter("Are you ready?", 150);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-4xl md:text-6xl font-bold mb-8 h-20">
        <span className="text-red-600">{displayedText}</span>
        <span className="animate-blink">|</span>
      </div>
      {isComplete && (
        <button
          onClick={onEnter}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Enter
        </button>
      )}
    </div>
  );
}
