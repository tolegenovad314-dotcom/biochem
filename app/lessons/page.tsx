"use client";

import { useState } from "react";

type Subject = "chemistry" | "biology";

const textbooks = {
  chemistry: [
    {
      grade: 7,
      title: "Химия",
      authors: "Т. Абдрахманова және авторлар",
      year: 2017,
      publisher: "АОО «НИШ»",
      language: "Қазақша",
      description: "7-сыныпқа арналған химия оқулығы",
      href: "/lessons/chemistry/7-abdrahmanova",
    },
    {
      grade: 8,
      title: "Химия",
      authors: "О. Кожахметова",
      year: 2018,
      publisher: "Атамұра",
      language: "Қазақша",
      description: "8-сыныпқа арналған химия оқулығы",
      href: null,
    },
    {
      grade: 8,
      title: "Химия",
      authors: "М. Усманова",
      year: 2018,
      publisher: "Атамұра",
      language: "Қазақша",
      description: "8-сыныпқа арналған химия оқулығы",
      href: null,
    },
    {
      grade: 8,
      title: "Chemistry",
      authors: "Д. Калиев",
      year: 2017,
      publisher: "—",
      language: "Қазақша",
      description: "8-сыныпқа арналған Chemistry оқулығы",
      href: null,
    },
  ],

  biology: [
    {
      grade: 7,
      title: "Биология",
      authors: "А. Соловьева, Б. Ибраимова, Ж. Алина",
      year: 2017,
      publisher: "Атамұра",
      language: "Қазақша",
      description: "7-сыныпқа арналған биология оқулығы",
      href: null,
    },
    {
      grade: 7,
      title: "Биология",
      authors: "Н. Аймуханов",
      year: 2017,
      publisher: "—",
      language: "Қазақша",
      description: "7-сыныпқа арналған биология оқулығы",
      href: null,
    },
    {
      grade: 8,
      title: "Биология",
      authors: "И. Короткова",
      year: 2019,
      publisher: "—",
      language: "Қазақша",
      description: "8-сыныпқа арналған биология оқулығы",
      href: null,
    },
    {
      grade: 8,
      title: "Биология",
      authors: "А. Соловьева",
      year: 2018,
      publisher: "Атамұра",
      language: "Қазақша",
      description: "8-сыныпқа арналған биология оқулығы",
      href: null,
    },
  ],
};

export default function LessonsPage() {
  const [grade, setGrade] = useState(7);
  const [subject, setSubject] = useState<Subject>("chemistry");

  const filteredBooks = textbooks[subject].filter(
    (book) => book.grade === grade
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur">
              📚 ОҚУЛЫҚ НЕГІЗІНДЕ ОҚУ
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Өз оқулығыңды таңда
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              Сыныбыңды және пәнді таңда. Содан кейін өзің оқитын
              қазақша оқулықты таңдап, оның бөлімдері мен тақырыптары
              бойынша оқуды бастайсың.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              01 — СЫНЫП
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Сыныбыңды таңда
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {[7, 8, 9, 10, 11].map((item) => (
                <button
                  key={item}
                  onClick={() => setGrade(item)}
                  className={`rounded-2xl px-6 py-3 font-bold transition ${
                    grade === item
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  {item}-сынып
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              02 — ПӘН
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Пәнді таңда
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => setSubject("chemistry")}
                className={`rounded-3xl border p-6 text-left transition ${
                  subject === "chemistry"
                    ? "border-blue-300 bg-blue-50 shadow-lg"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div className="text-4xl">🧪</div>

                <h3 className="mt-4 text-xl font-black">Химия</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Атомдар, химиялық байланыстар, реакциялар,
                  есептер және тәжірибелер.
                </p>
              </button>

              <button
                onClick={() => setSubject("biology")}
                className={`rounded-3xl border p-6 text-left transition ${
                  subject === "biology"
                    ? "border-emerald-300 bg-emerald-50 shadow-lg"
                    : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                <div className="text-4xl">🧬</div>

                <h3 className="mt-4 text-xl font-black">
                  Биология
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Жасуша, ағзалар, жүйелер, генетика,
                  экология және тіршілік әлемі.
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
              03 — ОҚУЛЫҚ
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              {grade}-сынып ·{" "}
              {subject === "chemistry" ? "Химия" : "Биология"}
            </h2>

            <p className="mt-2 text-slate-500">
              Қолданатын оқулығыңды таңда.
            </p>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
            {filteredBooks.length} оқулық
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredBooks.map((book, index) => (
              <div
                key={`${book.authors}-${book.year}-${index}`}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`h-2 ${
                    subject === "chemistry"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500"
                  }`}
                />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-4xl">
                      {subject === "chemistry" ? "🧪" : "🧬"}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      {book.year}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">
                    {book.title}
                  </h3>

                  <p className="mt-2 font-semibold text-slate-700">
                    {book.authors}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-slate-500">
                    <p>🏫 {book.publisher}</p>
                    <p>🌐 {book.language}</p>
                    <p>📖 {book.description}</p>
                  </div>

                  {book.href ? (
                    <a
                      href={book.href}
                      className={`mt-7 block w-full rounded-2xl px-5 py-3.5 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 ${
                        subject === "chemistry"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                    >
                      📚 Оқулықты таңдау →
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        alert(
                          `Келесі қадамда "${book.title}" оқулығының бөлімдері ашылады.`
                        )
                      }
                      className={`mt-7 w-full rounded-2xl px-5 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 ${
                        subject === "chemistry"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                    >
                      📚 Оқулықты таңдау →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="text-5xl">📚</div>

            <h3 className="mt-5 text-2xl font-black text-slate-900">
              Бұл сыныпқа оқулықтарды әлі енгізіп жатырмыз
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              Оқулықтардың нақты нұсқаларын біртіндеп қосамыз.
              Платформада кездейсоқ тақырыптар емес, нақты оқулық
              құрылымы қолданылатын болады.
            </p>
          </div>
        )}
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              BIOCHEM ОҚУ ЖҮЙЕСІ
            </p>

            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Бір тақырып — толық оқу циклі
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {[
              ["📖", "Теория"],
              ["🔬", "Практика"],
              ["📝", "Тест"],
              ["📊", "Нәтиже"],
              ["🔁", "Қателер"],
              ["🎓", "ҰБТ / Олимпиада"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-3 font-bold text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}