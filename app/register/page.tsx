"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (name && className && email && password) {
      localStorage.setItem("biochem_user_name", name);
      localStorage.setItem("biochem_user_class", className);
      localStorage.setItem("biochem_user_email", email);

      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-[#07070b] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="mb-8 text-center">
          <div className="text-3xl font-black tracking-tight text-white">
            🧬 BIOCHEM
          </div>

          <p className="mt-3 text-white/50">
            Жаңа аккаунт жасау
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl"
        >
          <h1 className="text-2xl font-bold text-white">
            BIOCHEM-ге қош келдің!
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Жеке оқу кеңістігіңді жасау үшін тіркел.
          </p>

          <div className="mt-8 space-y-5">

            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Аты-жөнің
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Мысалы: Динара Төлегенова"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
              />
            </div>

            {/* CLASS */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Қай сыныпта оқисың?
              </label>

              <select
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-purple-400/50"
              >
                <option value="" className="bg-[#111118]">
                  Сыныбыңды таңда
                </option>

                <option value="7-сынып" className="bg-[#111118]">
                  7-сынып
                </option>

                <option value="8-сынып" className="bg-[#111118]">
                  8-сынып
                </option>

                <option value="9-сынып" className="bg-[#111118]">
                  9-сынып
                </option>

                <option value="10-сынып" className="bg-[#111118]">
                  10-сынып
                </option>

                <option value="11-сынып" className="bg-[#111118]">
                  11-сынып
                </option>
              </select>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Құпиясөз
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөз ойлап тап"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
              />
            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-7 w-full rounded-2xl bg-white px-5 py-4 font-bold text-black transition hover:bg-white/90"
          >
            Тіркелу →
          </button>

          {/* LOGIN */}
          <p className="mt-6 text-center text-sm text-white/40">
            Аккаунтың бар ма?{" "}
            <a
              href="/login"
              className="text-purple-300 hover:text-purple-200"
            >
              Кіру
            </a>
          </p>

        </form>
      </div>
    </main>
  );
}