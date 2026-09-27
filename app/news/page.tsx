const news = [
  {
    date: "26.09.2026",
    category: "BIOCHEM",
    title: "BIOCHEM платформасы дамып келеді",
    description:
      "Химия мен биологияны бір жерде жүйелі түрде үйренуге арналған жаңа мүмкіндіктер біртіндеп қосылып жатыр.",
    accent: "purple",
  },
  {
    date: "25.09.2026",
    category: "ЖАҢА МҮМКІНДІК",
    title: "Химия курстары жаңартылуда",
    description:
      "7–11 сыныптарға арналған сынып, оқулық, бөлім және тақырып бойынша оқу жүйесі құрылып жатыр.",
    accent: "green",
  },
  {
    date: "24.09.2026",
    category: "ЗЕРТХАНА",
    title: "Виртуалды зертхана бағыты",
    description:
      "Химиялық және биологиялық процестерді интерактивті модельдер арқылы зерттеуге арналған бөлім дайындалуда.",
    accent: "purple",
  },
  {
    date: "23.09.2026",
    category: "ДАЙЫНДЫҚ",
    title: "ҰБТ және олимпиада бөлімі",
    description:
      "Пробный ҰБТ мен олимпиадалық тапсырмаларға арналған жеке дайындық бағыттары қарастырылуда.",
    accent: "green",
  },
];

export default function News() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.15);
          }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="pulse-glow absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="pulse-glow absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-green-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold tracking-tight transition hover:opacity-70"
          >
            BIO<span className="text-purple-400">CHEM</span>
          </a>

          <a
            href="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← Басты бет
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-green-400/20 bg-green-400/5 px-5 py-2 text-sm font-medium tracking-[0.2em] text-green-300">
            BIOCHEM • ЖАҢАЛЫҚТАР
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            BIOCHEM-дегі
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-green-400 bg-clip-text text-transparent">
              жаңалықтар
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Платформадағы жаңа бөлімдер, мүмкіндіктер және оқу жүйесіне
            енгізіліп жатқан өзгерістер туралы ақпарат.
          </p>
        </div>

        {/* Scientific visual */}
        <div className="relative mx-auto mt-16 flex h-36 max-w-3xl items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border border-purple-400/25 bg-purple-500/10" />
          <div className="absolute h-36 w-36 rounded-full border border-green-400/15" />
          <div className="absolute h-52 w-52 rounded-full border border-purple-400/10" />

          <div className="float relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-bold shadow-[0_0_70px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            N
          </div>

          <div className="absolute h-3 w-3 translate-x-32 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.8)]" />
          <div className="absolute h-2 w-2 -translate-x-32 translate-y-8 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
        </div>
      </section>

      {/* News */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.06] sm:p-10"
            >
              <div
                className={`absolute -right-24 -top-24 h-52 w-52 rounded-full blur-[90px] ${
                  item.accent === "purple"
                    ? "bg-purple-600/20"
                    : "bg-green-500/15"
                } transition duration-500 group-hover:scale-125`}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${
                      item.accent === "purple"
                        ? "text-purple-300"
                        : "text-green-300"
                    }`}
                  >
                    {item.category}
                  </span>

                  <span className="text-xs text-white/30">{item.date}</span>
                </div>

                <div className="mt-8 flex items-start justify-between gap-6">
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    {item.title}
                  </h2>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition group-hover:border-white/20 group-hover:text-white">
                    →
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-5 text-sm font-medium text-white/40 transition group-hover:text-white">
                  Толығырақ →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom block */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.025] to-green-500/[0.08] p-10 text-center backdrop-blur-xl sm:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-green-500/10 blur-[100px]" />

          <div className="relative">
            <div className="text-sm font-medium tracking-[0.2em] text-white/35">
              BIOCHEM
            </div>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Жаңа мүмкіндіктер
              <span className="block text-white/40">
                осында жарияланады
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">
              BIOCHEM платформасына жаңа курс, тапсырма, зертхана немесе басқа
              мүмкіндік қосылған кезде осы бөлімнен көре аласың.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>BIOCHEM</div>
          <div>Химия мен биологияны түсініп үйрен</div>
        </div>
      </footer>
    </main>
  );
}