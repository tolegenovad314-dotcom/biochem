"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function HelperPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Сәлем! 👋 Мен BIOCHEM КӨМЕКШІСІМІН. Химия немесе биология бойынша сұрағыңды жаза бер!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const text = message.trim();

    if (!text || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/helper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Қате болды");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Кешір, қазір жауап беру кезінде қате пайда болды. Біраздан кейін қайта көр.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <main className="min-h-screen bg-[#070b16] text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6">
        <header className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-medium text-white/60 transition hover:text-white"
          >
            ← Басты бет
          </a>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            🧬 BIOCHEM
          </div>
        </header>

        <section className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="border-b border-white/10 px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl shadow-lg">
                🧠
              </div>

              <div>
                <h1 className="text-xl font-bold sm:text-2xl">
                  BIOCHEM КӨМЕКШІСІ
                </h1>
                <p className="text-sm text-white/50">
                  Химия және биология бойынша AI көмекші
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-7">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[75%] ${
                    item.role === "user"
                      ? "bg-blue-600 text-white"
                      : "border border-white/10 bg-white/[0.06] text-white/90"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/60">
                  BIOCHEM КӨМЕКШІСІ ойланып жатыр... 🧠
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-4 sm:p-5">
            <div className="flex gap-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Химия немесе биология бойынша сұрақ қой..."
                rows={2}
                className="min-h-[56px] flex-1 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
              />

              <button
                onClick={sendMessage}
                disabled={loading || !message.trim()}
                className="self-end rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Жіберу
              </button>
            </div>

            <p className="mt-2 text-xs text-white/30">
              Enter — жіберу • Shift + Enter — жаңа жол
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}