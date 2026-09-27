const stages = [
  {
    number: "01",
    title: "Теория",
    description:
      "Тақырыпты қарапайым тілмен түсіндіріп, негізгі ұғымдар, формулалар мен ережелерді меңгеру.",
  },
  {
    number: "02",
    title: "Практика",
    description:
      "Алған біліміңді есептер, тапсырмалар және биологиялық талдаулар арқылы бекіту.",
  },
  {
    number: "03",
    title: "Тест",
    description:
      "Тақырып бойынша біліміңді тексеріп, нәтижені бірден көру.",
  },
  {
    number: "04",
    title: "Қате талдау",
    description:
      "Қай сұрақтарда қателескеніңді көріп, қателеріңнің себебін түсіну.",
  },
  {
    number: "05",
    title: "ҰБТ",
    description:
      "Пробный ҰБТ арқылы уақытқа жұмыс істеуді және нақты форматқа дайындалуды үйрену.",
  },
  {
    number: "06",
    title: "Олимпиада",
    description:
      "Күрделі логикалық және терең ойлауды қажет ететін тапсырмалармен жұмыс жасау.",
  },
];

const features = [
  {
    title: "Химия",
    text: "Атом құрылысы, химиялық байланыс, реакциялар, есептер және басқа да тақырыптар.",
  },
  {
    title: "Биология",
    text: "Жасуша, генетика, адам ағзасы, молекулалық биология және тірі ағзалар әлемі.",
  },
  {
    title: "Виртуалды зертхана",
    text: "Химиялық және биологиялық модельдермен интерактивті түрде жұмыс істеу.",
  },
  {
    title: "AI көмекші",
    text: "Түсінбеген тақырыпты қайта түсіндіру, тапсырманы талдау және оқу барысында көмек алу.",
  },
];

export default function Course() {
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
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-2 text-sm font-medium tracking-[0.2em] text-purple-300">
            BIOCHEM • КУРС ТУРАЛЫ
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Ғылымды
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-green-400 bg-clip-text text-transparent">
              түсініп үйрен
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
            BIOCHEM — химия мен биологияны жай жаттап емес, түсініп,
            тәжірибе жасап, тапсырма орындап және өз қателеріңді талдау арқылы
            үйренуге арналған білім беру платформасы.
          </p>
        </div>

        {/* Scientific visual */}
        <div className="relative mx-auto mt-20 flex h-44 max-w-3xl items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border border-purple-400/25 bg-purple-500/10 blur-[1px]" />
          <div className="absolute h-36 w-36 rounded-full border border-green-400/15" />
          <div className="absolute h-52 w-52 rounded-full border border-purple-400/10" />

          <div className="float relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-bold shadow-[0_0_70px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            B
          </div>

          <div className="absolute h-3 w-3 translate-x-32 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.8)]" />
          <div className="absolute h-2 w-2 -translate-x-32 translate-y-8 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
          <div className="absolute h-2.5 w-2.5 translate-x-12 -translate-y-20 rounded-full bg-green-300 shadow-[0_0_20px_rgba(74,222,128,0.7)]" />
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-12">
            <div className="text-sm font-medium tracking-[0.2em] text-green-300">
              БҰЛ КУРС НЕ ҮШІН?
            </div>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Білімді жаттамай,
              <span className="block text-white/50">
                түсініп қолдануға үйрен
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/55">
              BIOCHEM оқушыға дайын жауапты ғана көрсетпейді. Мұнда әр
              тақырыпты түсіну, тапсырма орындау, тәжірибе жасау, нәтижені
              тексеру және қателерді талдау бір оқу жүйесіне біріктірілген.
            </p>

            <div className="mt-8 border-l border-purple-400/40 pl-5">
              <p className="text-lg font-medium leading-8 text-white/80">
                Түсін → Орында → Тексер → Қатеңді талда → Қайта байқап көр →
                Дам
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] to-green-500/[0.06] p-8 backdrop-blur-xl sm:p-12">
            <div className="text-sm font-medium tracking-[0.2em] text-purple-300">
              НЕ ҮЙРЕНЕСІҢ?
            </div>

            <div className="mt-7 space-y-6">
              <div>
                <div className="text-2xl font-bold">7–11</div>
                <div className="mt-1 text-sm text-white/45">
                  сыныптарға арналған
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="text-2xl font-bold">Химия + Биология</div>
                <div className="mt-1 text-sm text-white/45">
                  екі негізгі бағыт
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="text-2xl font-bold">ҰБТ + Олимпиада</div>
                <div className="mt-1 text-sm text-white/45">
                  бөлек дайындық бағыттары
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning system */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-medium tracking-[0.2em] text-purple-300">
            ОҚУ ЖҮЙЕСІ
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Оқу жолың
            <span className="text-white/40"> бір жүйеге құрылған</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.06]"
            >
              <div
                className={`absolute -right-20 -top-20 h-44 w-44 rounded-full blur-[80px] ${
                  index % 2 === 0 ? "bg-purple-600/15" : "bg-green-500/10"
                } transition duration-500 group-hover:scale-150`}
              />

              <div className="relative">
                <div className="text-sm font-semibold tracking-[0.2em] text-white/30">
                  {stage.number}
                </div>

                <h3 className="mt-5 text-2xl font-bold">{stage.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-medium tracking-[0.2em] text-green-300">
            ПЛАТФОРМА МҮМКІНДІКТЕРІ
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Бір жерде
            <span className="text-white/40"> барлық негізгі құрал</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-green-400/25 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-6 h-1 w-16 rounded-full ${
                  index % 2 === 0 ? "bg-purple-400/60" : "bg-green-400/60"
                }`}
              />

              <h3 className="text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-green-500/[0.08] px-8 py-14 text-center backdrop-blur-xl sm:px-14 sm:py-20">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-green-500/10 blur-[100px]" />

          <div className="relative">
            <div className="text-sm font-medium tracking-[0.2em] text-white/40">
              BIOCHEM
            </div>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Ғылымды бірге
              <span className="block bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                жаңа тәсілмен үйренейік
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/45">
              Химия мен биологияны түсініп, тәжірибе жасап, өз біліміңді
              біртіндеп дамыт.
            </p>

            <a
              href="/"
              className="mt-9 inline-flex rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Курсты бастау →
            </a>
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