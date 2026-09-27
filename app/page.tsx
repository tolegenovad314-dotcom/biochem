const subjects = [
  {
    number: "01",
    title: "ХИМИЯ",
    subtitle: "Заттардан реакцияларға дейін",
    description:
      "Атомдар, химиялық байланыстар, реакциялар, формулалар және есептерді түсініп зертте.",
    href: "/chemistry",
  },
  {
    number: "02",
    title: "БИОЛОГИЯ",
    subtitle: "Жасушадан адам ағзасына дейін",
    description:
      "Жасуша, генетика, ДНҚ, адам ағзасы және тірі табиғат әлемін зертте.",
    href: "/biology",
  },
];

const particles = Array.from({ length: 22 }, (_, i) => i);

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: .15;
          }
          50% {
            transform: translate3d(0, -25px, 0);
            opacity: .7;
          }
        }

        @keyframes slowSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes reverseSpin {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: scale(.96);
            opacity: .65;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes moleculeFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        .glass-card {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.08),
            rgba(255,255,255,.025)
          );
          border: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(18px);
        }

        .purple-glow {
          box-shadow:
            0 0 40px rgba(139,92,246,.16),
            inset 0 0 30px rgba(139,92,246,.04);
        }

        .green-glow {
          box-shadow:
            0 0 40px rgba(34,197,94,.13),
            inset 0 0 30px rgba(34,197,94,.04);
        }
      `}</style>

      {/* BACKGROUND PARTICLES */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {particles.map((i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              animation: "floatParticle 7s ease-in-out infinite",
              animationDelay: `${-(i % 7)}s`,
            }}
          />
        ))}
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-black tracking-[0.2em] text-white"
          >
            BIOCHEM
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-white/65 md:flex">
            <a className="transition hover:text-white" href="/">
              Басты бет
            </a>

            <a className="transition hover:text-white" href="/news">
              Жаңалықтар
            </a>

            <a className="transition hover:text-white" href="/course">
              Курс туралы
            </a>

            <a className="transition hover:text-white" href="/assistant">
              Көмекші
            </a>

            <a className="transition hover:text-white" href="/login">
              Кіру
            </a>

            <a
              href="/register"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              Тіркелу
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 lg:pt-32">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-green-700/15 blur-[130px]" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-6 text-sm font-bold tracking-[0.3em] text-purple-300">
              7–11 СЫНЫП • ХИМИЯ • БИОЛОГИЯ
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
              Ғылымды
              <br />
              жаңа тәсілмен
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-white to-green-300 bg-clip-text text-transparent">
                үйрен.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              Химия мен биологияны жай жаттамай, түсін, зертте, тәжірибе жаса
              және өз біліміңді тексер.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#subjects"
                className="rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105"
              >
                Оқуды бастау
              </a>

              <a
                href="#author"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                Автор туралы
              </a>
            </div>
          </div>

          {/* ATOM VISUAL */}
          <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

            <div
              className="absolute left-1/2 top-1/2 h-[360px] w-[150px] rounded-[50%] border border-purple-300/20"
              style={{
                animation: "slowSpin 12s linear infinite",
              }}
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(168,85,247,.9)]" />
            </div>

            <div
              className="absolute left-1/2 top-1/2 h-[360px] w-[150px] rounded-[50%] border border-green-300/20"
              style={{
                animation: "reverseSpin 15s linear infinite",
                transform: "translate(-50%, -50%) rotate(60deg)",
              }}
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-green-300 shadow-[0_0_20px_rgba(34,197,94,.9)]" />
            </div>

            <div
              className="absolute left-1/2 top-1/2 h-[360px] w-[150px] rounded-[50%] border border-white/10"
              style={{
                animation: "slowSpin 18s linear infinite",
                transform: "translate(-50%, -50%) rotate(-60deg)",
              }}
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,.8)]" />
            </div>

            <div
              className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-purple-500/40 to-green-500/30 shadow-[0_0_80px_rgba(139,92,246,.35)]"
              style={{
                animation: "glowPulse 4s ease-in-out infinite",
              }}
            >
              <div className="h-12 w-12 rounded-full bg-white/90 shadow-[0_0_35px_rgba(255,255,255,.7)]" />
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="relative border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-[#050505] to-green-950/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
            АВТОР ТУРАЛЫ
          </p>

          <p className="mt-4 max-w-2xl text-white/45">
            BIOCHEM идеясының артындағы білім, тәжірибе және мақсат.
          </p>

          <div className="mt-16 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-4xl font-black leading-tight sm:text-5xl">
                Сәлем,
                <br />
                <span className="text-purple-300">
                  BIOCHEM оқушысы!
                </span>
              </p>

              <p className="mt-6 text-lg leading-8 text-white/60">
                BIOCHEM платформасына қош келдің!
              </p>

              <div className="mt-10 h-px w-full bg-white/10" />

              <p className="mt-8 text-2xl font-bold">
                Динара Төлегенова
              </p>

              <p className="mt-2 text-white/45">
                Химия пәнінің магистрі • педагог • BIOCHEM авторы
              </p>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Мен — Динара Төлегенова, химия пәнінің магистрі, педагог және
                BIOCHEM платформасының авторымын.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="glass-card purple-glow rounded-3xl p-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-purple-300">
                    БАКАЛАВРИАТ
                  </p>

                  <p className="mt-5 text-lg font-bold">
                    Абай атындағы Қазақ ұлттық педагогикалық университеті
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    «Химия-Биология» пәндері мұғалімі
                  </p>
                </div>

                <div className="glass-card green-glow rounded-3xl p-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-green-300">
                    МАГИСТРАТУРА
                  </p>

                  <p className="mt-5 text-lg font-bold">
                    Қорқыт Ата атындағы Қызылорда университеті
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    «Химия» мамандығы
                  </p>
                </div>
              </div>

              <p className="mt-10 text-lg leading-8 text-white/65">
                Мен BIOCHEM-ді химия мен биологияны жай ғана жаттататын емес,
                оқушыға түсінуге, зерттеуге және өз ойын қалыптастыруға
                мүмкіндік беретін орта ретінде жасағым келді.
              </p>

              <p className="mt-6 text-lg font-semibold leading-8 text-white/85">
                Себебі ғылымды жаттауға болады. Бірақ түсінген білім ғана сені
                алға жетелейді.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Түсін", "Зертте", "Орында", "Дамы"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-l border-purple-400/40 pl-6">
                <p className="text-white/45">Ізгі ниетпен,</p>
                <p className="mt-2 text-xl font-bold">
                  Динара Төлегенова
                </p>
                <p className="mt-1 text-sm text-white/40">
                  Химия пәнінің магистрі • педагог • BIOCHEM авторы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.3em] text-green-300">
            БІРІНШІ ҚАДАМ
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
            Ғылым әлеміне
            <br />
            кір.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Қызықтырған пәнді таңда да, зерттеуді баста.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {subjects.map((subject) => (
            <a
              key={subject.title}
              href={subject.href}
              className="group glass-card relative overflow-hidden rounded-[2rem] p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 sm:p-10"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white/30">
                    {subject.number}
                  </span>

                  <span className="text-2xl text-white/30 transition group-hover:translate-x-2 group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-14 text-sm font-bold tracking-[0.2em] text-purple-300">
                  {subject.subtitle}
                </p>

                <h3 className="mt-4 text-5xl font-black">
                  {subject.title}
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
                  {subject.description}
                </p>

                <div className="mt-10 h-px w-full bg-white/10" />

                <p className="mt-5 text-sm font-bold text-white/65">
                  Пәнге өту →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BIOCHEM FEATURES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
            BIOCHEM МҮМКІНДІКТЕРІ
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black sm:text-6xl">
            Бір платформада
            <br />
            бәрі бар.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Химия мен биологияны үйренуге қажетті негізгі құралдардың барлығы
            бір оқу кеңістігінде.
          </p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Сабақтар",
                text: "Тақырыптарды қарапайым әрі түсінікті түсіндірмелер арқылы үйрен.",
                icon: "📚",
                href: "/lessons",
              },
              {
                number: "02",
                title: "Тапсырмалар",
                text: "Әр сабақтан кейін тапсырмалар орындап, біліміңді бекіт.",
                icon: "📝",
                href: "/lessons",
              },
              {
                number: "03",
                title: "Тәжірибелер",
                text: "Ғылыми құбылыстарды тәжірибе арқылы зерттеп үйрен.",
                icon: "🧪",
                href: "/lab",
              },
              {
                number: "04",
                title: "Виртуалды зертхана",
                text: "Атомдар, молекулалар, жасуша және ДНҚ модельдерін интерактивті зертте.",
                icon: "🔬",
                href: "/lab",
              },
              {
                number: "05",
                title: "AI көмекші",
                text: "Түсінбеген тақырыптарыңды қарапайым тілмен қайта түсіндір.",
                icon: "🤖",
                href: "/assistant",
              },
              {
                number: "06",
                title: "Оқу прогресі",
                text: "Сабақ, тапсырма, тест және жетістіктеріңді бір жерден бақыла.",
                icon: "📈",
                href: "/dashboard",
              },
            ].map((feature) => (
              <a
                key={feature.number}
                href={feature.href}
                className="group glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white/20">
                    {feature.number}
                  </span>

                  <span className="text-3xl transition duration-300 group-hover:scale-110">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {feature.text}
                </p>

                <p className="mt-7 text-sm font-bold text-white/60 transition group-hover:text-white">
                  Толығырақ →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TEST ZONE */}
      <section className="relative border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
            СЫНАҚ АЛАҢЫ
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black sm:text-6xl">
            Біліміңді
            <br />
            сына.
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="glass-card purple-glow rounded-[2rem] p-9 sm:p-12">
              <p className="text-xs font-bold tracking-[0.25em] text-white/35">
                01 / ТЕСТ
              </p>

              <p className="mt-12 text-sm font-bold tracking-[0.2em] text-purple-300">
                ПРОБНЫЙ ҰБТ
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Таймермен дайындал.
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/50">
                Таймермен тест тапсыр, нәтижеңді көр және қателеріңді талда.
              </p>

              <a
                href="/tests"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
              >
                Бастау →
              </a>
            </div>

            <div className="glass-card green-glow rounded-[2rem] p-9 sm:p-12">
              <p className="text-xs font-bold tracking-[0.25em] text-white/35">
                02 / LOGIC
              </p>

              <p className="mt-12 text-sm font-bold tracking-[0.2em] text-green-300">
                ОЛИМПИАДА
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Ғылыми ойлауды дамыт.
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/50">
                Күрделі есептер, логикалық тапсырмалар және ғылыми ойлау.
              </p>

              <button
                type="button"
                className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-white/60"
              >
                Жақында
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RATING */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
              РЕЙТИНГ
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-6xl">
              Өз нәтижеңді
              <br />
              көр.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
              Оқу, тапсырма және тест арқылы жинаған ұпайларыңды бақыла.
            </p>
          </div>

          <div className="glass-card purple-glow overflow-hidden rounded-[2rem]">
            <div className="border-b border-white/10 px-7 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-white/35">
                    ЖАЛПЫ РЕЙТИНГ
                  </p>

                  <p className="mt-2 text-3xl font-black">BIOCHEM</p>
                </div>

                <p className="text-4xl font-black text-purple-300">
                  #12
                </p>
              </div>
            </div>

            {[
              ["01", "Айдана", "3 240"],
              ["02", "Нұрсұлтан", "3 080"],
              ["03", "Аружан", "2 960"],
              ["04", "Данияр", "2 890"],
            ].map(([number, name, score]) => (
              <div
                key={number}
                className="flex items-center justify-between border-b border-white/5 px-7 py-5 last:border-0"
              >
                <div className="flex items-center gap-5">
                  <span className="text-sm text-white/25">{number}</span>

                  <span className="font-semibold">{name}</span>
                </div>

                <span className="font-bold text-white/60">
                  {score} ұпай
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-green-300">
            ЖЕТІСТІКТЕР
          </p>

          <h2 className="mt-5 text-5xl font-black sm:text-6xl">
            Әр қадамың
            <br />
            маңызды.
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Бірінші қадам", "Алғашқы сабақты аяқтадың"],
              ["02", "Зерттеуші", "10 сабақ орындадың"],
              ["03", "Тест шебері", "10 тест тапсырдың"],
              ["04", "Зертхана", "Алғашқы зертхананы аяқтадың"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/20"
              >
                <p className="text-sm font-bold text-white/20">
                  {number}
                </p>

                <div className="mt-12 h-12 w-12 rounded-2xl border border-green-300/20 bg-green-400/10" />

                <h3 className="mt-6 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
              ОҚУ ЖОЛЫ
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-6xl">
              Өз дамуыңды
              <br />
              бақыла.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
              Сабақтарыңды, тапсырмаларыңды, тесттеріңді және жетістіктеріңді
              бір жерден бақыла.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-white/35">
                  ЖАЛПЫ ПРОГРЕСС
                </p>

                <p className="mt-4 text-7xl font-black">
                  78%
                </p>
              </div>

              <p className="pb-2 font-bold text-green-300">
                +12% осы апта
              </p>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-500 to-green-400" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-4xl font-black">12</p>
                <p className="mt-2 text-sm text-white/35">
                  сабақ
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-4xl font-black">47</p>
                <p className="mt-2 text-sm text-white/35">
                  тапсырма
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-4xl font-black">08</p>
                <p className="mt-2 text-sm text-white/35">
                  тест
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE ENTRY */}
      <section className="border-y border-white/10 bg-gradient-to-br from-purple-950/20 via-[#050505] to-green-950/20">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-green-300">
                КУРСҚА ӨТУ
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-black sm:text-6xl">
                Оқуды өз
                <br />
                жолыңмен баста.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
                Курсқа кіргеннен кейін жеке оқу кеңістігің ашылады. Сол жерде
                сабақтар, тапсырмалар, тесттер, рейтинг және оқу барысың
                көрінеді.
              </p>
            </div>

            <a
              href="/lessons"
              className="inline-flex shrink-0 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Курсқа өту →
            </a>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <a
              href="/lessons/chemistry"
              className="group glass-card rounded-[2rem] p-8 transition hover:-translate-y-1 hover:border-purple-400/30"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-purple-300">
                ХИМИЯ
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Химия курсына кіру
              </h3>

              <p className="mt-3 text-white/40">
                Теория → Тапсырма → Тест → Қате талдау
              </p>

              <p className="mt-8 font-bold text-white/70 group-hover:text-white">
                Жалғастыру →
              </p>
            </a>

            <a
              href="/biology"
              className="group glass-card rounded-[2rem] p-8 transition hover:-translate-y-1 hover:border-green-400/30"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-green-300">
                БИОЛОГИЯ
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Биология курсына кіру
              </h3>

              <p className="mt-3 text-white/40">
                Теория → Тапсырма → Тест → Қате талдау
              </p>

              <p className="mt-8 font-bold text-white/70 group-hover:text-white">
                Жалғастыру →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* VIRTUAL LAB */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
              ВИРТУАЛДЫ ЗЕРТХАНА
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-6xl">
              Ғылымды
              <br />
              өзің зертте.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
              3D атомдар мен молекулаларды зертте, химиялық байланыстарды
              қара, жасуша мен ДНҚ модельдерін интерактивті түрде таны.
            </p>

            <a
              href="/lab"
              className="mt-9 inline-flex rounded-full border border-white/10 bg-white/5 px-7 py-4 font-bold transition hover:border-green-400/30 hover:bg-green-500/10"
            >
              Зертханаға өту
            </a>
          </div>

          {/* MOLECULE VISUAL */}
          <div
            className="relative mx-auto h-[360px] w-full max-w-[480px]"
            aria-hidden="true"
            style={{
              animation: "moleculeFloat 5s ease-in-out infinite",
            }}
          >
            <div className="absolute left-[28%] top-[30%] h-5 w-[44%] rotate-[25deg] rounded-full bg-purple-300/30 blur-[1px]" />

            <div className="absolute left-[32%] top-[57%] h-5 w-[40%] -rotate-[22deg] rounded-full bg-green-300/25 blur-[1px]" />

            <div className="absolute left-[47%] top-[36%] h-[38%] w-5 rotate-[75deg] rounded-full bg-white/15" />

            <div className="absolute left-[24%] top-[24%] h-28 w-28 rounded-full border border-purple-300/20 bg-purple-400/20 shadow-[0_0_50px_rgba(168,85,247,.3)]" />

            <div className="absolute right-[19%] top-[18%] h-20 w-20 rounded-full border border-green-300/20 bg-green-400/20 shadow-[0_0_45px_rgba(34,197,94,.25)]" />

            <div className="absolute bottom-[20%] right-[25%] h-24 w-24 rounded-full border border-purple-300/20 bg-purple-400/15 shadow-[0_0_50px_rgba(168,85,247,.25)]" />

            <div className="absolute bottom-[26%] left-[27%] h-16 w-16 rounded-full border border-white/15 bg-white/10" />

            <div
              className="absolute left-[48%] top-[42%] h-16 w-16 rounded-full bg-white/80 shadow-[0_0_40px_rgba(255,255,255,.6)]"
              style={{
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-green-300">
            AI КӨМЕКШІ
          </p>

          <h2 className="mt-5 text-5xl font-black sm:text-6xl">
            Түсінбегеніңді
            <br />
            қайта түсін.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Қиын тақырыпты қарапайым тілмен түсіндіру, қателерді талдау және
            қосымша тапсырмалармен жаттығу үшін AI көмекші.
          </p>

          <div className="mt-14 max-w-3xl space-y-4">
            <div className="ml-auto max-w-xl rounded-3xl rounded-br-md border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-white/30">
                СЕН
              </p>

              <p className="mt-3 text-lg font-semibold">
                «Химиялық байланысты түсіндіріп берші»
              </p>
            </div>

            <div className="max-w-xl rounded-3xl rounded-bl-md border border-purple-400/15 bg-purple-500/[0.08] p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-purple-300">
                BIOCHEM КӨМЕКШІСІ
              </p>

              <p className="mt-3 text-lg leading-8 text-white/70">
                Тақырыпты қарапайым мысалдармен, кезең-кезеңімен түсіндіруге
                дайынмын.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="relative border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-[#050505] to-green-950/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-bold tracking-[0.3em] text-green-300">
            ОҚУШЫЛАР ПІКІРІ
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black sm:text-6xl">
            BIOCHEM туралы
            <br />
            оқушылар не дейді?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Бұл бөлімге кейін BIOCHEM платформасын қолданған нақты оқушылардың
            пікірлерін қосуға болады.
          </p>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {[
              {
                name: "Оқушы пікірі",
                className: "10-сынып",
                text: "Химия тақырыптарын түсініп оқуға және өз білімімді тексеруге ыңғайлы платформа болғанын қалаймын.",
              },
              {
                name: "Оқушы пікірі",
                className: "9-сынып",
                text: "Сабақ, тапсырма және тесттің бір жерде болғаны оқуымды жүйелеуге көмектеседі.",
              },
              {
                name: "Оқушы пікірі",
                className: "11-сынып",
                text: "Күрделі тақырыптарды қайта қарап, қателерімді талдап дайындалу мүмкіндігі маңызды.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="glass-card rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{review.name}</p>

                    <p className="mt-1 text-sm text-white/35">
                      {review.className}
                    </p>
                  </div>

                  <div className="text-lg text-yellow-300">
                    ★★★★★
                  </div>
                </div>

                <div className="mt-7 h-px bg-white/10" />

                <p className="mt-7 text-lg leading-8 text-white/60">
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURVEY */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-purple-300">
              САУАЛНАМА
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-6xl">
              BIOCHEM-ді
              <br />
              бірге дамытайық.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
              Сенің ұсыныстарың платформаға қандай өзгерістер керек екенін
              түсінуге көмектеседі.
            </p>
          </div>

          <form className="glass-card rounded-[2rem] p-7 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Аты-жөні"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-purple-400/40"
              />

              <input
                type="text"
                placeholder="Қай сыныпта оқисың?"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-purple-400/40"
              />

              <input
                type="text"
                placeholder="Қай қалада тұрасың?"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-purple-400/40"
              />

              <input
                type="text"
                placeholder="Қай тақырыптар қиын?"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-purple-400/40"
              />
            </div>

            <textarea
              placeholder="Платформадан не күтесің?"
              rows={5}
              className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-purple-400/40"
            />

            <button
              type="submit"
              className="mt-5 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105"
            >
              Жауапты жіберу
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-black tracking-[0.2em]">
              BIOCHEM
            </p>

            <p className="mt-3 text-sm text-white/35">
              Химия мен биологияны түсініп үйрен.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
            <a href="/" className="hover:text-white">
              Басты бет
            </a>

            <a href="/news" className="hover:text-white">
              Жаңалықтар
            </a>

            <a href="/course" className="hover:text-white">
              Курс туралы
            </a>

            <a href="/chemistry" className="hover:text-white">
              Химия
            </a>

            <a href="/biology" className="hover:text-white">
              Биология
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}