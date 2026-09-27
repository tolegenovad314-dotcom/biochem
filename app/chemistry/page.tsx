const classes = [
  {
    grade: "7",
    title: "7-СЫНЫП",
    description: "Химияның негізгі ұғымдары мен алғашқы заңдылықтары",
    href: "/lessons/chemistry/7",
    accent: "purple",
  },
  {
    grade: "8",
    title: "8-СЫНЫП",
    description: "Заттар, химиялық реакциялар және негізгі түсініктер",
    href: "/lessons/chemistry/8",
    accent: "green",
  },
  {
    grade: "9",
    title: "9-СЫНЫП",
    description: "Химиялық элементтер, қосылыстар және реакциялар",
    href: "/lessons/chemistry/9",
    accent: "purple",
  },
  {
    grade: "10",
    title: "10-СЫНЫП",
    description: "Органикалық және жалпы химияның негізгі тақырыптары",
    href: "/lessons/chemistry/10",
    accent: "green",
  },
  {
    grade: "11",
    title: "11-СЫНЫП",
    description: "Күрделі химиялық ұғымдар және ҰБТ-ға дайындық",
    href: "/lessons/chemistry/11",
    accent: "purple",
  },
];

export default function Chemistry() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="pulse-glow absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
        <div className="pulse-glow absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-green-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
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

      {/* Main */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-2 text-sm font-medium tracking-[0.2em] text-purple-300">
            BIOCHEM • ХИМИЯ
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Сыныбыңды
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-green-400 bg-clip-text text-transparent">
              таңда
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
            Өзің оқитын сыныпты таңда. Келесі қадамда сол сыныпқа арналған
            оқулықты таңдап, химияны жүйелі түрде үйрене аласың.
          </p>
        </div>

        {/* Scientific visual */}
        <div className="relative mx-auto mt-16 flex h-32 max-w-3xl items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full border border-purple-400/30 bg-purple-500/10 blur-[1px]" />
          <div className="absolute h-32 w-32 rounded-full border border-green-400/10" />
          <div className="absolute h-44 w-44 rounded-full border border-purple-400/10" />

          <div className="float relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-bold shadow-[0_0_60px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            H
          </div>

          <div className="absolute h-3 w-3 translate-x-24 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
          <div className="absolute h-2 w-2 -translate-x-28 translate-y-6 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
        </div>

        {/* Classes */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <a
              key={item.grade}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.07]"
            >
              {/* Card glow */}
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] ${
                  item.accent === "purple"
                    ? "bg-purple-600/20"
                    : "bg-green-500/15"
                } transition duration-500 group-hover:scale-150`}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`text-7xl font-bold tracking-tighter ${
                      item.accent === "purple"
                        ? "text-purple-300"
                        : "text-green-300"
                    }`}
                  >
                    {item.grade}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition group-hover:border-white/20 group-hover:text-white">
                    →
                  </div>
                </div>

                <div className="mt-5">
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  <p className="mt-3 min-h-14 text-sm leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-white/10" />

                <div className="mt-5 text-sm font-medium text-white/50 transition group-hover:text-white">
                  Оқулықтарды таңдау →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom information */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-white/45">
            Сыныбыңды таңдағаннан кейін сен сол сыныпқа арналған қолжетімді
            оқулықтарды көресің. Оқулықты таңдаған соң оның бөлімдері мен
            тақырыптарына өте аласың.
          </p>
        </div>
      </section>
    </main>
  );
}