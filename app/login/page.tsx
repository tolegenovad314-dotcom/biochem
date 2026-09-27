"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (login && password) {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-[#07070b] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black tracking-tight text-white">
            🧬 BIOCHEM
          </div>

          <p className="mt-3 text-white/50">
            Жеке кабинетке кіру
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl"
        >
          <h1 className="text-2xl font-bold text-white">
            Қайта қош келдің!
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Оқуыңды жалғастыру үшін аккаунтыңа кір.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Логин немесе email
              </label>

              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Мысалы: dinara@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">
                Құпиясөз
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөзіңді енгіз"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-2xl bg-white px-5 py-4 font-bold text-black transition hover:bg-white/90"
          >
            Кіру →
          </button>

          <p className="mt-6 text-center text-sm text-white/40">
            Аккаунтың жоқ па?{" "}
            <a
              href="/register"
              className="text-purple-300 hover:text-purple-200"
            >
              Тіркелу
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}