"use client";

import { useState } from "react";

export default function AtomLesson() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <a href="/lessons" className="text-blue-600 hover:underline">
          ← Сабақтарға қайту
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="text-7xl">⚛️</div>

            <p className="mt-4 font-semibold text-blue-600">
              ХИМИЯ • 1-САБАҚ
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Атом құрылысы
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Атомның негізгі бөлшектері және олардың қасиеттері.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              ⚛️ Атом дегеніміз не?
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Атом — химиялық элементтің қасиеттерін сақтайтын өте кішкентай
              бөлшек. Атомның ортасында ядро орналасады, ал оның айналасында
              электрондар болады.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              🔵 Атомның негізгі бөлшектері
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-red-50 p-6">
                <div className="text-4xl">➕</div>
                <h3 className="mt-3 text-xl font-bold">Протон</h3>
                <p className="mt-2 text-gray-600">
                  Оң зарядталған бөлшек. Ядроның құрамында болады.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <div className="text-4xl">⚪</div>
                <h3 className="mt-3 text-xl font-bold">Нейтрон</h3>
                <p className="mt-2 text-gray-600">
                  Электр заряды жоқ бөлшек. Ядроның құрамында болады.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6">
                <div className="text-4xl">➖</div>
                <h3 className="mt-3 text-xl font-bold">Электрон</h3>
                <p className="mt-2 text-gray-600">
                  Теріс зарядталған бөлшек. Ядроның айналасында орналасады.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              🧠 Есте сақта!
            </h2>

            <div className="mt-4 space-y-2 text-lg text-gray-700">
              <p>➕ Протон → оң заряд</p>
              <p>⚪ Нейтрон → зарядсыз</p>
              <p>➖ Электрон → теріс заряд</p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              📝 Өзіңді тексер
            </h2>

            <p className="mt-4 text-lg text-gray-700">
              Атомның теріс зарядталған бөлшегі қайсы?
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              <button
                onClick={() => setShowAnswer(false)}
                className="rounded-xl border-2 border-gray-200 p-4 font-semibold hover:bg-gray-50"
              >
                Протон
              </button>

              <button
                onClick={() => setShowAnswer(false)}
                className="rounded-xl border-2 border-gray-200 p-4 font-semibold hover:bg-gray-50"
              >
                Нейтрон
              </button>

              <button
                onClick={() => setShowAnswer(true)}
                className="rounded-xl border-2 border-blue-300 p-4 font-semibold hover:bg-blue-50"
              >
                Электрон
              </button>
            </div>

            {showAnswer && (
              <div className="mt-5 rounded-xl bg-green-100 p-5 font-semibold text-green-800">
                ✅ Дұрыс! Электрон теріс зарядталған.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}