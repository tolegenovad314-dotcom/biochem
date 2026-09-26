"use client";

import { useState } from "react";

export default function Lab() {
  const [result, setResult] = useState("");

  function mix() {
    setResult(
      "🧪 Тәжірибе нәтижесі: заттар араластырылды! Жаңа химиялық процесс жүрді."
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-blue-600 hover:underline">
          ← Басты бетке
        </a>

        <div className="mt-10 text-center">
          <div className="text-7xl">🔬</div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Виртуалды зертхана
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Тәжірибе жасап, химиялық процестерді зертте!
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900">
            🧪 Тәжірибе №1
          </h2>

          <p className="mt-3 text-gray-600">
            Екі затты таңдап, оларды араластырып көр.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
              <div className="text-6xl">💧</div>

              <h3 className="mt-4 text-xl font-bold">
                Су
              </h3>

              <p className="mt-2 text-gray-600">
                H₂O
              </p>
            </div>

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center">
              <div className="text-6xl">🧂</div>

              <h3 className="mt-4 text-xl font-bold">
                Тұз
              </h3>

              <p className="mt-2 text-gray-600">
                NaCl
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={mix}
              className="rounded-2xl bg-purple-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-purple-700"
            >
              🧪 Араластыру
            </button>
          </div>

          {result && (
            <div className="mt-8 rounded-2xl bg-green-100 p-6 text-center text-lg font-semibold text-green-800">
              {result}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}