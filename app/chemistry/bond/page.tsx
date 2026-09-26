"use client";

import { useState } from "react";

export default function Bond() {
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const checkAnswer = (option: string) => {
    setAnswer(option);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <a
          href="/chemistry"
          className="text-blue-600 hover:underline"
        >
          ← Химияға қайту
        </a>

        {/* HEADER */}
        <section className="mt-8 rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
          <div className="text-6xl">🔗</div>

          <p className="mt-5 font-semibold text-green-600">
            ХИМИЯ • САБАҚ
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Химиялық байланыс
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Атомдардың электрондар арқылы қалай байланысатынын
            интерактивті түрде үйренейік.
          </p>
        </section>

        {/* ИОНДЫҚ БАЙЛАНЫС */}
        <section className="mt-8 rounded-3xl bg-white p-7 shadow-xl md:p-10">

          <div className="text-center">
            <div className="text-5xl">⚡</div>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Иондық байланыс
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Натрий бір электронын береді, ал хлор сол электронды
              қабылдайды.
            </p>
          </div>

          {/* АТОМДАР */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* НАТРИЙ */}
            <div className="rounded-3xl bg-gray-950 p-8 text-center">

              <h3 className="text-2xl font-bold text-blue-300">
                Натрий — Na
              </h3>

              <p className="mt-2 text-gray-400">
                Электрондық қабаттары: 2 • 8 • 1
              </p>

              <div className="relative mx-auto mt-8 h-72 w-72">

                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30" />

                <div className="absolute left-8 top-8 h-56 w-56 rounded-full border-2 border-blue-400/40" />

                <div className="absolute left-16 top-16 h-40 w-40 rounded-full border-2 border-blue-400/50" />

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  Na
                </div>

                <div className="absolute left-[132px] top-[66px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[132px] top-[199px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[47px] top-[128px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute right-[47px] top-[128px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div
                  className={`absolute right-[8px] top-[130px] flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-gray-900 transition-all duration-1000 ${
                    started ? "translate-x-28" : ""
                  }`}
                >
                  e⁻
                </div>

              </div>

              <p className="mt-5 text-lg font-bold text-blue-300">
                11 электрон
              </p>

              <p className="mt-2 text-gray-400">
                Соңғы қабатта 1 электрон
              </p>

            </div>

            {/* ХЛОР */}
            <div className="rounded-3xl bg-gray-950 p-8 text-center">

              <h3 className="text-2xl font-bold text-green-300">
                Хлор — Cl
              </h3>

              <p className="mt-2 text-gray-400">
                Электрондық қабаттары: 2 • 8 • 7
              </p>

              <div className="relative mx-auto mt-8 h-72 w-72">

                <div className="absolute inset-0 rounded-full border-2 border-green-400/30" />

                <div className="absolute left-8 top-8 h-56 w-56 rounded-full border-2 border-green-400/40" />

                <div className="absolute left-16 top-16 h-40 w-40 rounded-full border-2 border-green-400/50" />

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white shadow-lg">
                  Cl
                </div>

                <div className="absolute left-[132px] top-[66px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[132px] top-[199px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[47px] top-[128px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute right-[47px] top-[128px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[72px] top-[72px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute right-[72px] top-[72px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute left-[72px] bottom-[72px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

                <div className="absolute right-[72px] bottom-[72px] flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                  e⁻
                </div>

              </div>

              <p className="mt-5 text-lg font-bold text-green-300">
                17 электрон
              </p>

              <p className="mt-2 text-gray-400">
                Соңғы қабатта 7 электрон
              </p>

            </div>
          </div>

          {/* ЭЛЕКТРОН БЕРУ */}
          <div className="mt-10 text-center">

            <button
              onClick={() => setStarted(!started)}
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
            >
              {started
                ? "↩️ Қайта көрсету"
                : "⚡ Электронды беру"}
            </button>

          </div>

          {started && (
            <div className="mt-8 rounded-3xl bg-green-50 p-7 text-center">

              <div className="text-5xl">🎉</div>

              <h3 className="mt-3 text-2xl font-bold text-green-700">
                Иондық байланыс түзілді!
              </h3>

              <p className="mt-3 text-lg text-gray-700">
                Na → Na⁺ + e⁻
              </p>

              <p className="mt-2 text-lg text-gray-700">
                Cl + e⁻ → Cl⁻
              </p>

              <div className="mt-5 text-3xl font-extrabold text-gray-900">
                Na⁺ + Cl⁻ → NaCl
              </div>

              <p className="mt-4 text-gray-600">
                Қарама-қарсы зарядталған иондар бір-бірін тартады.
              </p>

            </div>
          )}

        </section>

        {/* КОВАЛЕНТТІК БАЙЛАНЫС */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

          <div className="text-5xl">🤝</div>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Коваленттік байланыс
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            Коваленттік байланыста атомдар электрон жұбын
            ортақ пайдаланады.
          </p>

          <div className="mt-7 rounded-3xl bg-blue-50 p-8 text-center">

            <div className="text-5xl font-bold text-blue-700">
              H • • H
            </div>

            <p className="mt-4 text-lg font-semibold text-blue-700">
              Ортақ электрон жұбы
            </p>

          </div>

        </section>

        {/* ТЕСТ */}
        <section className="mt-8 rounded-3xl bg-gray-900 p-8 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            🧠 Өзіңді тексер
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Коваленттік байланыста атомдар не істейді?
          </p>

          <div className="mt-6 grid gap-3">

            <button
              onClick={() => checkAnswer("A")}
              className={`rounded-xl px-5 py-4 text-left font-semibold transition ${
                answer === "A"
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              A) Электрондарды ортақ пайдаланады
            </button>

            <button
              onClick={() => checkAnswer("B")}
              className={`rounded-xl px-5 py-4 text-left font-semibold transition ${
                answer === "B"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              B) Барлық электрондарын жоғалтады
            </button>

            <button
              onClick={() => checkAnswer("C")}
              className={`rounded-xl px-5 py-4 text-left font-semibold transition ${
                answer === "C"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              C) Ядроларын біріктіреді
            </button>

          </div>

          {answer === "A" && (
            <div className="mt-6 rounded-2xl bg-green-500/20 p-5">
              <p className="text-xl font-bold text-green-300">
                ✅ Дұрыс жауап!
              </p>

              <p className="mt-2 text-gray-300">
                Коваленттік байланыста атомдар электрон жұбын
                ортақ пайдаланады.
              </p>
            </div>
          )}

          {(answer === "B" || answer === "C") && (
            <div className="mt-6 rounded-2xl bg-red-500/20 p-5">
              <p className="text-xl font-bold text-red-300">
                ❌ Қате жауап
              </p>

              <p className="mt-2 text-gray-300">
                Дұрыс жауап — A. Атомдар электрондарды ортақ
                пайдаланады.
              </p>
            </div>
          )}

          {answer !== null && (
            <button
              onClick={() => setAnswer(null)}
              className="mt-5 rounded-xl bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-100"
            >
              🔄 Қайта жауап беру
            </button>
          )}

        </section>

      </div>
    </main>
  );
}