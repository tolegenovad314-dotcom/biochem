"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("Оқушы");
  const [className, setClassName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("biochem_user_name");
    const savedClass = localStorage.getItem("biochem_user_class");

    if (savedName) {
      setName(savedName);
    }

    if (savedClass) {
      setClassName(savedClass);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#07070b] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <header className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            🧬 BIOCHEM
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/5"
            >
              Басты бет
            </Link>

            <Link
              href="/login"
              className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Шығу
            </Link>
          </div>
        </header>

        {/* WELCOME */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            ЖЕКЕ КАБИНЕТ
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Сәлем, {name}! 👋
          </h1>

          {className && (
            <p className="mt-3 text-lg text-purple-300">
              {className}
            </p>
          )}

          <p className="mt-3 text-white/50">
            Оқуыңды жалғастыр және жаңа нәтижелерге жет.
          </p>
        </section>

        {/* PROGRESS */}
        <section className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                ОҚУ БАРЫСЫ
              </p>

              <p className="mt-2 text-5xl font-black">
                78%
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-green-300">
                +12%
              </p>

              <p className="mt-1 text-xs text-white/40">
                осы апта
              </p>
            </div>
          </div>

          <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
              style={{ width: "78%" }}
            />
          </div>
        </section>

        {/* STATISTICS */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
            <p className="text-sm text-white/40">
              Қаралған сабақтар
            </p>

            <p className="mt-3 text-4xl font-black">
              24
            </p>

            <p className="mt-2 text-xs text-green-300">
              Сабақ
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
            <p className="text-sm text-white/40">
              Орындалған тапсырмалар
            </p>

            <p className="mt-3 text-4xl font-black">
              47
            </p>

            <p className="mt-2 text-xs text-blue-300">
              Тапсырма
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
            <p className="text-sm text-white/40">
              Өткен тесттер
            </p>

            <p className="mt-3 text-4xl font-black">
              18
            </p>

            <p className="mt-2 text-xs text-purple-300">
              Тест
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
            <p className="text-sm text-white/40">
              Зертханалық жұмыстар
            </p>

            <p className="mt-3 text-4xl font-black">
              8
            </p>

            <p className="mt-2 text-xs text-cyan-300">
              Зертхана
            </p>
          </div>

        </section>

        {/* RATING */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              РЕЙТИНГ
            </p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-5xl font-black">
                  #12
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Жалпы рейтинг
                </p>
              </div>

              <div className="text-4xl">
                🏆
              </div>
            </div>
          </div>

          {/* POINTS */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              ЖАЛПЫ ҰПАЙ
            </p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-5xl font-black">
                  2 840
                </p>

                <p className="mt-2 text-sm text-white/40">
                  BIOCHEM ұпайы
                </p>
              </div>

              <div className="text-4xl">
                ⭐
              </div>
            </div>
          </div>

        </section>

        {/* ACHIEVEMENTS */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              ЖЕТІСТІКТЕР
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Әр қадамың маңызды 🏆
            </h2>

            <p className="mt-2 text-white/40">
              Оқу барысында жаңа жетістіктер жина.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">

            {/* ACHIEVEMENT 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-3xl">
                🏆
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Бірінші тест
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Алғашқы тестті аяқтадың
              </p>
            </div>

            {/* ACHIEVEMENT 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-400/10 text-3xl">
                🏆
              </div>

              <h3 className="mt-5 text-lg font-bold">
                10 сабақ
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                10 сабақты орындадың
              </p>
            </div>

            {/* ACHIEVEMENT 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl">
                🧪
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Зертхана
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Алғашқы зертхананы аяқтадың
              </p>
            </div>

          </div>
        </section>

        {/* STUDY PATH */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            ОҚУ ЖОЛЫ
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Өз дамуыңды бақыла.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-white/50">
            Сабақтарыңды, тапсырмаларыңды, тесттеріңді және
            зертханалық жұмыстарыңды бір жерден бақыла.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">

            {/* CHEMISTRY */}
            <div className="rounded-3xl border border-blue-400/10 bg-blue-400/[0.05] p-6">

              <div className="text-4xl">
                🧪
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-blue-300">
                ХИМИЯ
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Химия курсына кіру
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Теория → Тапсырма → Тест → Қате талдау
              </p>

              <Link
                href="/chemistry"
                className="mt-6 inline-flex rounded-2xl bg-blue-400 px-6 py-3 font-bold text-black transition hover:bg-blue-300"
              >
                Жалғастыру →
              </Link>

            </div>

            {/* BIOLOGY */}
            <div className="rounded-3xl border border-green-400/10 bg-green-400/[0.05] p-6">

              <div className="text-4xl">
                🧬
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-green-300">
                БИОЛОГИЯ
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Биология курсына кіру
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Теория → Тапсырма → Тест → Қате талдау
              </p>

              <Link
                href="/biology"
                className="mt-6 inline-flex rounded-2xl bg-green-400 px-6 py-3 font-bold text-black transition hover:bg-green-300"
              >
                Жалғастыру →
              </Link>

            </div>

          </div>
        </section>

        {/* LAB + AI */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">

          {/* LAB */}
          <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.04] p-7">

            <div className="text-4xl">
              🔬
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              ВИРТУАЛДЫ ЗЕРТХАНА
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Ғылымды өзің зертте.
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              3D атомдар мен молекулаларды зертте,
              химиялық байланыстарды қара, жасуша мен
              ДНҚ модельдерін интерактивті түрде таны.
            </p>

            <Link
              href="/lab"
              className="mt-6 inline-flex rounded-2xl border border-cyan-300/20 px-6 py-3 font-bold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Зертханаға өту →
            </Link>

          </div>

          {/* AI */}
          <div className="rounded-3xl border border-purple-400/10 bg-purple-400/[0.04] p-7">

            <div className="text-4xl">
              🤖
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              AI КӨМЕКШІ
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Түсінбегеніңді қайта түсін.
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              Қиын тақырыпты қарапайым тілмен түсіндір,
              қателерді талда және қосымша тапсырмалармен
              жаттық.
            </p>

            <Link
              href="/assistant"
              className="mt-6 inline-flex rounded-2xl border border-purple-300/20 px-6 py-3 font-bold text-purple-200 transition hover:bg-purple-300/10"
            >
              Көмекшіге өту →
            </Link>

          </div>

        </section>

        {/* CONTINUE BUTTON */}
        <section className="mt-6 rounded-3xl border border-purple-400/20 bg-gradient-to-r from-purple-400/[0.08] to-blue-400/[0.08] p-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            КУРСТЫ ЖАЛҒАСТЫРУ
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Оқуды өз жолыңмен баста. 🚀
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-white/50">
            Курсқа кіріп, сабақтарды оқы, тапсырмаларды орында,
            тест тапсыр және өз нәтижелеріңді бақыла.
          </p>

          <Link
            href="/lessons"
            className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 font-bold text-black transition hover:bg-white/90"
          >
            Оқуды жалғастыру →
          </Link>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/10 pt-8 text-center">

          <p className="text-sm font-bold text-white/70">
            🧬 BIOCHEM
          </p>

          <p className="mt-2 text-xs text-white/30">
            Химия мен биологияны түсініп үйрен.
          </p>

        </footer>

      </div>
    </main>
  );
}