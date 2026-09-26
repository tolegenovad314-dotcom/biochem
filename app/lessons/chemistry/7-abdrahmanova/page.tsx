"use client";

import { useState } from "react";

const chapters = [
  {
    number: "01",
    title: "Химия ғылымына кіріспе",
    topics: [
      "Химия ғылымы",
      "Химиялық зертханадағы қауіпсіздік",
      "Заттар және олардың қасиеттері",
      "Таза заттар",
      "Қоспалар",
      "Қоспаларды бөлу әдістері",
    ],
  },
  {
    number: "02",
    title: "Заттардың агрегаттық күйінің өзгеруі",
    topics: [
      "Физикалық және химиялық құбылыстар",
      "Заттардың агрегаттық күйлері",
      "Бөлшектер теориясы",
      "Қатты заттар",
      "Сұйық заттар",
      "Газ тәрізді заттар",
      "Температура және жылу энергиясы",
      "Қайнау және булану",
      "Салқындау процесі",
    ],
  },
  {
    number: "03",
    title: "Атомдар. Молекулалар. Заттар",
    topics: [
      "Атом",
      "Молекула",
      "Химиялық элемент",
      "Химиялық элементтің таңбасы",
      "Протон, нейтрон және электрон",
      "Атом ядросы",
      "Жай және күрделі заттар",
      "Металдар мен бейметалдар",
      "Иондар",
      "Химиялық байланыс",
    ],
  },
  {
    number: "04",
    title: "Ауа. Жану реакциясы",
    topics: [
      "Ауа және оның құрамы",
      "Оттек",
      "Жану",
      "Жану реакциялары",
      "Жану өнімдері",
      "Атмосфералық ауа",
      "Жануды тоқтату шарттары",
    ],
  },
  {
    number: "05",
    title: "Химиялық реакциялар",
    topics: [
      "Химиялық реакция ұғымы",
      "Химиялық реакциялардың белгілері",
      "Реакциялардың жүру жағдайлары",
      "Реакция теңдеулері",
      "Заттардың массасының сақталуы",
    ],
  },
  {
    number: "06",
    title: "Химиялық элементтердің периодтық кестесі",
    topics: [
      "Химиялық элементтер",
      "Периодтық кесте",
      "Периодтар",
      "Топтар",
      "Металдар және бейметалдар",
      "Элементтердің периодтық жүйедегі орны",
    ],
  },
  {
    number: "07",
    title: "Салыстырмалы атомдық масса және қарапайым химиялық формула",
    topics: [
      "Салыстырмалы атомдық масса",
      "Химиялық формула",
      "Қарапайым химиялық формула",
      "Салыстырмалы молекулалық масса",
      "Формула бойынша есептеулер",
    ],
  },
];

const topicLinks: Record<string, string> = {
  "Химия ғылымы":
    "/lessons/chemistry/7-abdrahmanova/himiya-gilimi",

  "Химиялық зертханадағы қауіпсіздік":
    "/lessons/chemistry/7-abdrahmanova/himiya-zertkhana-kauipsizdik",

  "Заттар және олардың қасиеттері":
    "/lessons/chemistry/7-abdrahmanova/zattar-kasietteri",

  "Таза заттар":
    "/lessons/chemistry/7-abdrahmanova/taza-zattar",

  "Қоспалар":
    "/lessons/chemistry/7-abdrahmanova/qospalar",

  "Қоспаларды бөлу әдістері":
    "/lessons/chemistry/7-abdrahmanova/qospalardy-bolu-adisteri",
};

export default function Chemistry7AbdrahmanovaPage() {
  const [openChapter, setOpenChapter] = useState("01");

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-500 px-4 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            🧪 7-сынып • Химия
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Химия
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            7-сыныпқа арналған химия сабақтары. Әр тақырыпты теория,
            практика және тест арқылы меңгер.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
              📖 Теория
            </div>
            <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
              🔬 Практика
            </div>
            <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
              📝 Тест
            </div>
            <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
              📊 Нәтиже
            </div>
          </div>
        </div>
      </section>

      {/* BOOK INFO */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-bold text-blue-600">
                  ОҚУЛЫҚ
                </div>

                <h2 className="mt-1 text-2xl font-black text-slate-900">
                  7-сынып химия
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Абдрахманова оқулығы бойынша тақырыптар
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-center">
                  <div className="text-xl font-black text-blue-600">
                    7
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    бөлім
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-center">
                  <div className="text-xl font-black text-emerald-600">
                    50+
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    тақырып
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900">
              Бөлімдер
            </h2>

            <p className="mt-2 text-slate-500">
              Қажетті бөлімді ашып, тақырыпты таңда.
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => {
              const isOpen = openChapter === chapter.number;

              return (
                <div
                  key={chapter.number}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* CHAPTER HEADER */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenChapter(isOpen ? "" : chapter.number)
                    }
                    className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50 sm:p-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-lg font-black text-white shadow-md">
                      {chapter.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black text-slate-900 sm:text-xl">
                        {chapter.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {chapter.topics.length} тақырып
                      </p>
                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </div>
                  </button>

                  {/* TOPICS */}
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-6">
                      <div className="grid gap-3 md:grid-cols-2">
                        {chapter.topics.map((topic, index) => {
                          const link = topicLinks[topic];

                          if (link) {
                            return (
                              <a
                                key={topic}
                                href={link}
                                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600">
                                  {index + 1}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="font-bold text-slate-800 transition group-hover:text-blue-600">
                                    {topic}
                                  </div>

                                  <div className="mt-1 text-xs font-semibold text-emerald-600">
                                    📖 Теория • 🔬 Практика • 📝 Тест
                                  </div>
                                </div>

                                <div className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-bold text-white transition group-hover:bg-blue-700">
                                  Аш →
                                </div>
                              </a>
                            );
                          }

                          return (
                            <div
                              key={topic}
                              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 opacity-80"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-black text-slate-500">
                                {index + 1}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-slate-700">
                                  {topic}
                                </div>

                                <div className="mt-1 text-xs font-semibold text-slate-400">
                                  Жаңа сабақ дайындалуда
                                </div>
                              </div>

                              <div className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-400">
                                Жақында
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}