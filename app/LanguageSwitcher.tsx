"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-red-900/40 bg-black/60 p-1 shadow-[0_0_20px_rgba(120,0,0,0.15)] backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("KZ")}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
          language === "KZ"
            ? "bg-red-900 text-white shadow-[0_0_15px_rgba(127,29,29,0.6)]"
            : "text-gray-400 hover:text-white"
        }`}
      >
        KZ
      </button>

      <button
        type="button"
        onClick={() => setLanguage("RU")}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
          language === "RU"
            ? "bg-red-900 text-white shadow-[0_0_15px_rgba(127,29,29,0.6)]"
            : "text-gray-400 hover:text-white"
        }`}
      >
        RU
      </button>
    </div>
  );
}