const helpTopics = [
  {
    number: "01",
    title: "Тақырыпты түсіндіру",
    description:
      "Түсінбеген химия немесе биология тақырыбын қарапайым тілмен қайта түсіндіруге көмектеседі.",
    accent: "purple",
  },
  {
    number: "02",
    title: "Тапсырманы талдау",
    description:
      "Есептің немесе тапсырманың шартын түсініп, оны орындау жолын кезең-кезеңімен қарастыруға көмектеседі.",
    accent: "green",
  },
  {
    number: "03",
    title: "Қатені түсіну",
    description:
      "Қате жауап берген кезде қай жерде қателескеніңді түсінуге және дұрыс тәсілді табуға көмектеседі.",
    accent: "purple",
  },
  {
    number: "04",
    title: "Жаттығу жасау",
    description:
      "Белгілі бір тақырып бойынша қосымша жаттығулар мен дайындық тапсырмаларын құруға көмектеседі.",
    accent: "green",
  },
];

const subjects = [
  {
    title: "Химия",
    description:
      "Формулалар, реакциялар, есептер, атом құрылысы және химиялық байланыстар.",
    accent: "purple",
  },
  {
    title: "Биология",
    description:
      "Жасуша, генетика, адам ағзасы, ДНҚ және биологиялық процестер.",
    accent: "green",
  },
];

export default function Helper() {
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
          <div className="mb-6 inline-flex rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-2 text-sm font-medium tracking-[0.2em] text-purple-300">
            BIOCHEM • КӨМЕКШІ
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Сұрағың бар ма?
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-green-400 bg-clip-text text-transparent">
              Көмекші қасыңда
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Химия мен биологияны оқу барысында түсінбеген тақырыптарыңды
            талдап, тапсырмаларды орындауға және біліміңді бекітуге көмектесетін
            BIOCHEM көмекшісі.
          </p>
        </div>

        {/* AI visual */}
        <div className="relative mx-auto mt-16 flex h-44 max-w-3xl items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border border-purple-400/25 bg-purple-500/10" />
          <div className="absolute h-36 w-36 rounded-full border border-green-400/15" />
          <div className="absolute h-52 w-52 rounded-full border border-purple-400/10" />

          <div className="float relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-bold shadow-[0_0_70px_rgba(139,92,246,0.3)] backdrop-blur-xl">
            AI
          </div>

          <div className="absolute h-3 w-3 translate-x-32 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.8)]" />

          <div className="absolute h-2 w-2 -translate-x-32 translate-y-8 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />

          <div className="absolute h-2.5 w-2.5 translate-x-12 -translate-y-20 rounded-full bg-green-300 shadow-[0_0_20px_rgba(74,222,128,0.7)]" />
        </div>
      </section>

      {/* Chat preview */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_0_100px_rgba(139,92,246,0.08)] backdrop-blur-xl">
          {/* Chat header */}
          <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-semibold text-purple-300">
              AI
            </div>

            <div>
              <div className="font-semibold">BIOCHEM көмекшісі</div>
              <div className="mt-1 text-xs text-green-400">
                Оқу үшін дайын
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-5 p-6 sm:p-8">
            <div className="max-w-xl rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="text-sm leading-7 text-white/65">
                Сәлем! Химия немесе биология бойынша сұрағыңды жаза аласың.
                Түсінбеген тақырыбыңды да сұрай бер.
              </p>
            </div>

            <div className="ml-auto max-w-xl rounded-2xl rounded-tr-md border border-purple-400/10 bg-purple-500/[0.08] px-5 py-4">
              <p className="text-sm leading-7 text-white/65">
                Химиялық байланысты түсіндіріп берші.
              </p>
            </div>

            <div className="max-w-xl rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="text-sm leading-7 text-white/65">
                Әрине. Алдымен химиялық байланыстың не екенін түсініп алайық,
                кейін оның негізгі түрлерін қарастырамыз.
              </p>
            </div>
          </div>

          {/* Input preview */}
          <div className="border-t border-white/10 p-5 sm:p-6">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
              <span className="flex-1 text-sm text-white/25">
                Сұрағыңды жазың...
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What can helper do */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-medium tracking-[0.2em] text-green-300">
            КӨМЕКШІ НЕ ІСТЕЙ АЛАДЫ?
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Оқу барысында
            <span className="text-white/40"> қасыңнан табылады</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {helpTopics.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.06]"
            >
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] ${
                  item.accent === "purple"
                    ? "bg-purple-600/15"
                    : "bg-green-500/10"
                } transition duration-500 group-hover:scale-125`}
              />

              <div className="relative">
                <div className="text-sm font-semibold tracking-[0.2em] text-white/25">
                  {item.number}
                </div>

                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-medium tracking-[0.2em] text-purple-300">
            ЕКІ БАҒЫТ
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Химия және
            <span className="text-white/40"> биология</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-9 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
            >
              <div
                className={`absolute -right-24 -top-24 h-56 w-56 rounded-full blur-[100px] ${
                  subject.accent === "purple"
                    ? "bg-purple-600/15"
                    : "bg-green-500/10"
                }`}
              />

              <div className="relative">
                <div
                  className={`mb-6 h-1 w-16 rounded-full ${
                    subject.accent === "purple"
                      ? "bg-purple-400/60"
                      : "bg-green-400/60"
                  }`}
                />

                <h3 className="text-3xl font-bold">{subject.title}</h3>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  {subject.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important note */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.025] to-green-500/[0.08] p-10 text-center backdrop-blur-xl sm:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-green-500/10 blur-[100px]" />

          <div className="relative">
            <div className="text-sm font-medium tracking-[0.2em] text-white/35">
              BIOCHEM AI
            </div>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Көмекші —
              <span className="block bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                дайын жауап емес
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45">
              Оның мақсаты — оқушының өз бетімен ойлануына, тақырыпты түсінуіне
              және білімін бекітуіне көмектесу.
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