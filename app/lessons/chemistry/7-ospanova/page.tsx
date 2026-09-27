import Link from "next/link";

const sections = [
  {
    title: "Оқулық туралы",
    text: "7-сыныпқа арналған қазақ тіліндегі химия оқулығы.",
    icon: "📘",
  },
  {
    title: "Тақырыптар",
    text: "Оқулықтағы бөлімдер мен тақырыптарды ретімен оқу.",
    icon: "📚",
  },
  {
    title: "Практика",
    text: "Есептер мен тапсырмалар арқылы біліміңді бекіту.",
    icon: "🧮",
  },
  {
    title: "Тест",
    text: "Әр тақырып бойынша өз біліміңді тексеру.",
    icon: "📝",
  },
];

export default function Ospanova7Page() {
  return (
    <main className="min-h-screen bg-[#F4FBFD] text-[#243746]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-extrabold">
            🧬 BIOCHEM
          </Link>

          <Link
            href="/chemistry"
            className="text-sm font-semibold text-slate-600 hover:text-[#3B9FD8]"
          >
            ← Химия
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Link
          href="/chemistry"
          className="text-sm font-semibold text-[#3B9FD8] hover:underline"
        >
          ← Сыныптарға оралу
        </Link>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex h-52 w-full shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#DDF3FB] to-[#DDF4EE] md:w-44">
              <span className="text-7xl">📘</span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.15em] text-[#3B9FD8]">
                ХИМИЯ • 7-СЫНЫП
              </p>

              <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
                Химия 7
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                М.Қ. Оспанова, Қ.С. Аухадиева, Т.Г. Белоусова
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-bold text-[#243746]">Баспа:</span>{" "}
                  «Мектеп»
                </p>

                <p>
                  <span className="font-bold text-[#243746]">Жылы:</span>{" "}
                  2025
                </p>

                <p>
                  <span className="font-bold text-[#243746]">
                    Басылымы:
                  </span>{" "}
                  өңделіп, толықтырылған 2-басылым
                </p>

                <p>
                  <span className="font-bold text-[#243746]">Көлемі:</span>{" "}
                  144 бет
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-4xl">{section.icon}</div>

              <h2 className="mt-5 text-2xl font-extrabold">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[#DDF3FB] p-8 text-center md:p-10">
          <p className="text-4xl">🧪</p>

          <h2 className="mt-4 text-3xl font-extrabold">
            Оқулық мазмұны
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Келесі қадамда осы оқулықтың нақты мазмұнын кітаптағы ретімен
            орналастырамыз.
          </p>

          <div className="mt-7 inline-flex rounded-full bg-white px-7 py-3 font-bold text-[#3B9FD8]">
            📚 Бөлімдер мен тақырыптар жақында
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 BIOCHEM • Химия 7
      </footer>
    </main>
  );
}