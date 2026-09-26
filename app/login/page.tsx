"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    alert("Кіру жүйесі әзірге демо режимде 😊");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 px-6 py-12">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-blue-600 hover:underline">
          ← Басты бетке
        </a>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="text-6xl">🧬</div>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              BIOCHEM
            </h1>

            <p className="mt-2 text-gray-600">
              Жеке кабинетке кіру
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="mt-2 w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                Құпиясөз
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
            >
              Кіру →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Аккаунт жүйесі кейін толық қосылады.
          </p>
        </div>
      </div>
    </main>
  );
}