import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Қоспаларды бөлу әдістері",
    text: "Сүзу, тұндыру, буландыру және айдау әдістерін үйрен.",
    href: "/lessons/chemistry/7-abdrahmanova/qospalardy-bolu-adisteri",
  },
  {
    number: "02",
    title: "Қоспалар",
    text: "Қоспалардың түрлері мен қасиеттерін қарастыр.",
    href: "/lessons/chemistry/7-abdrahmanova/qospalar",
  },
  {
    number: "03",
    title: "Таза заттар",
    text: "Таза заттардың негізгі ерекшеліктерін меңгер.",
    href: "/lessons/chemistry/7-abdrahmanova/taza-zattar",
  },
];

const features = [
  {
    icon: "🔬",
    title: "Виртуалды зертхана",
    text: "Химия мен биологияны тәжірибе арқылы зертте.",
    href: "/lab",
  },
  {
    icon: "📝",
    title: "Тесттер",
    text: "Өз біліміңді тексеріп, нәтижені бірден көр.",
    href: "/tests",
  },
  {
    icon: "🎓",
    title: "Пробный ҰБТ",
    text: "ҰБТ форматына дайындалуға арналған бөлім.",
  },
  {
    icon: "🏆",
    title: "Олимпиада",
    text: "Күрделі логикалық және пәндік тапсырмалар.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3fbff]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 text-xl shadow-md shadow-sky-200">
              ⚛
            </div>

            <div>
              <div className="text-[21px] font-extrabold tracking-tight text-slate-800">
                BIO<span className="text-sky-500">CHEM</span>
              </div>

              <div className="hidden text-[9px] font-semibold tracking-[0.22em] text-slate-400 sm:block">
                CHEMISTRY × BIOLOGY
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/lessons"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
            >
              Сабақтар
            </Link>

            <Link
              href="/chemistry"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
            >
              Химия
            </Link>

            <Link
              href="/biology"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              Биология
            </Link>

            <Link
              href="/tests"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
            >
              Тесттер
            </Link>

            <Link
              href="/lab"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              Зертхана
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-sky-600"
          >
            Кіру
          </Link>
        </div>
      </header>

      {/* AUTHOR */}
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-100 via-white to-emerald-100">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[170px_1fr]">

            <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white text-6xl shadow-lg shadow-sky-100">
              👩🏻‍🏫
            </div>

            <div className="max-w-4xl">
              <div className="text-xs font-bold tracking-[0.25em] text-sky-600">
                АВТОРДАН
              </div>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-slate-800 sm:text-5xl">
                Сәлем, оқушы!
              </h1>

              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                BIOCHEM платформасына қош келдің!
                Бұл сайтты химия мен биологияны түсінуді жеңілдету,
                қызықты ету және өз біліміңді еркін дамытуға мүмкіндік
                беру үшін жасадым.
              </p>

              <p className="mt-5 font-bold text-slate-700">
                Ізгі ниетпен, Төлегенова Динара апайларың 💙
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#bae6fd 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">

          <div>
            <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold tracking-wider text-sky-600">
              7–11 СЫНЫП • ХИМИЯ + БИОЛОГИЯ
            </div>

            <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-800 sm:text-6xl lg:text-7xl">
              Ғылымды
              <br />
              <span className="text-sky-500">түсініп</span> үйрен.
            </h2>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-slate-500 sm:text-lg">
              Теорияны оқы. Практика жаса. Тест тапсыр.
              Қателеріңді талда. Біліміңді біртіндеп дамыт.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/lessons"
                className="rounded-2xl bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600"
              >
                Оқуды бастау →
              </Link>

              <Link
                href="/chemistry"
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-600 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
              >
                Химия бөлімі
              </Link>
            </div>
          </div>

          {/* ABSTRACT SCIENCE VISUAL */}
          <div className="relative mx-auto h-[340px] w-full max-w-[420px]">

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200" />

            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200" />

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-5xl shadow-xl shadow-sky-200">
              ⚛️
            </div>

            <div className="absolute right-2 top-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-sky-100 bg-white text-4xl shadow-lg">
              🧬
            </div>

            <div className="absolute bottom-5 left-2 flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-100 bg-white text-4xl shadow-lg">
              🔬
            </div>

            <div className="absolute bottom-12 right-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-100 bg-white text-3xl shadow-lg">
              🧪
            </div>

          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] text-slate-400">
              ПӘНДЕР
            </div>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-800">
              Екі ғылым — бір платформа
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <Link
              href="/chemistry"
              className="group relative overflow-hidden rounded-[2rem] bg-sky-100 p-9 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-200/70 blur-2xl" />

              <div className="relative">
                <div className="text-5xl">🧪</div>

                <h3 className="mt-10 text-4xl font-bold text-slate-800">
                  Химия
                </h3>

                <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-slate-600">
                  Атомдар, молекулалар, заттар, химиялық реакциялар
                  және есептер әлемін зертте.
                </p>

                <div className="mt-7 text-sm font-bold text-sky-600">
                  Бөлімге өту →
                </div>
              </div>
            </Link>

            <Link
              href="/biology"
              className="group relative overflow-hidden rounded-[2rem] bg-emerald-100 p-9 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-200/70 blur-2xl" />

              <div className="relative">
                <div className="text-5xl">🧬</div>

                <h3 className="mt-10 text-4xl font-bold text-slate-800">
                  Биология
                </h3>

                <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-slate-600">
                  Жасуша, ДНҚ, генетика, адам ағзасы және тіршілік
                  процестерін зертте.
                </p>

                <div className="mt-7 text-sm font-bold text-emerald-600">
                  Бөлімге өту →
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="border-y border-sky-100 bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-sky-500">
                САБАҚТАР
              </div>

              <h2 className="mt-3 text-4xl font-bold text-slate-800">
                Сабақты таңда
              </h2>
            </div>

            <Link
              href="/lessons"
              className="text-sm font-bold text-sky-600"
            >
              Барлық сабақтар →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.title}
                href={lesson.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-500">
                    7-СЫНЫП • ХИМИЯ
                  </span>

                  <span className="text-sm font-bold text-slate-300">
                    {lesson.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-800 transition group-hover:text-sky-600">
                  {lesson.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-slate-500">
                  {lesson.text}
                </p>

                <div className="mt-7 text-sm font-bold text-slate-700">
                  Сабақты ашу →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              МҮМКІНДІКТЕР
            </div>

            <h2 className="mt-3 text-4xl font-bold text-slate-800">
              Оқу мүмкіндіктері
            </h2>

            <p className="mt-4 text-sm font-medium leading-7 text-slate-500">
              Сабақтан бөлек, білімді тексеруге және тәжірибе жасауға
              арналған бөлімдер.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{feature.icon}</span>

                  {!feature.href && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">
                      ЖАҚЫНДА
                    </span>
                  )}
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                  {feature.text}
                </p>

                {feature.href && (
                  <Link
                    href={feature.href}
                    className="mt-6 inline-block text-sm font-bold text-sky-600"
                  >
                    Өту →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="border-y border-emerald-100 bg-gradient-to-br from-sky-50 to-emerald-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] text-sky-600">
              ОҚУ ЖОЛЫ
            </div>

            <h2 className="mt-3 text-4xl font-bold text-slate-800">
              Түсін → орында → тексер → дамы
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">

            {[
              ["01", "📖", "Теория", "Тақырыпты түсін."],
              ["02", "🔬", "Практика", "Біліміңді қолдан."],
              ["03", "📝", "Тест", "Өзіңді тексер."],
              ["04", "📊", "Нәтиже", "Қателеріңмен жұмыс жаса."],
            ].map(([number, icon, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white bg-white/80 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-xs font-bold text-slate-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 font-bold text-slate-800">
                  {title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <div className="text-xs font-bold tracking-[0.25em] text-slate-400">
              FAQ
            </div>

            <h2 className="mt-3 text-4xl font-bold text-slate-800">
              Жиі қойылатын сұрақтар
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">

            <details className="py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-800">
                BIOCHEM кімдерге арналған?
                <span className="text-xl text-slate-300">+</span>
              </summary>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-500">
                Платформа 7–11 сынып оқушыларына химия мен биологияны
                жүйелі түрде үйренуге арналған.
              </p>
            </details>

            <details className="py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-800">
                Сабақ қалай өтеді?
                <span className="text-xl text-slate-300">+</span>
              </summary>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-500">
                Әр тақырып теория, практика, тест және нәтиже
                кезеңдері арқылы меңгеріледі.
              </p>
            </details>

            <details className="py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-800">
                Қай сыныптарға арналған?
                <span className="text-xl text-slate-300">+</span>
              </summary>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-500">
                BIOCHEM 7–11 сынып оқушыларына арналған.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-sky-400 to-emerald-400 px-7 py-14 text-center text-white shadow-xl shadow-sky-100 sm:px-10">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Ғылымды бірге зерттейік.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-7 text-white/90">
            Бірінші сабағыңды бастап, BIOCHEM арқылы
            білім жолыңды жалғастыр.
          </p>

          <Link
            href="/lessons"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-600 shadow-lg transition hover:-translate-y-0.5"
          >
            Сабақтарға өту →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sky-100 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">

          <div className="font-bold text-slate-700">
            BIO<span className="text-sky-500">CHEM</span>
          </div>

          <div className="font-medium text-slate-400">
            Chemistry × Biology
          </div>

          <div className="font-medium text-slate-400">
            © 2026 BIOCHEM
          </div>

        </div>
      </footer>

    </main>
  );
}