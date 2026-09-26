"use client";

import { useState } from "react";

const testQuestions = [
  {
    question: "Химия ғылымы нені зерттейді?",
    options: [
      "Тек өсімдіктерді",
      "Заттардың құрамы, құрылысы, қасиеттері және өзгерістері",
      "Тек жануарларды",
      "Тек математикалық есептерді",
    ],
    correct: 1,
  },
  {
    question: "Химияда зерттелетін негізгі нысан не?",
    options: ["Заттар", "Тек адамдар", "Тек ғаламшарлар", "Тек сандар"],
    correct: 0,
  },
  {
    question: "Заттың қандай қасиеті химияда зерттелуі мүмкін?",
    options: [
      "Химиялық қасиеті",
      "Тек адамның жасы",
      "Тек адамның бойы",
      "Тек уақыт",
    ],
    correct: 0,
  },
  {
    question: "Химиялық өзгеріске қайсысы мысал болады?",
    options: [
      "Мұздың еруі",
      "Судың булануы",
      "Заттың жаңа затқа айналуы",
      "Қағазды бүктеу",
    ],
    correct: 2,
  },
  {
    question: "Химияның күнделікті өмірдегі маңызы қандай?",
    options: [
      "Химия тек зертханада ғана керек",
      "Химия медицинада, ауыл шаруашылығында, тұрмыста және өндірісте қолданылады",
      "Химия тек мектепте оқытылады",
      "Химияның өмірге қатысы жоқ",
    ],
    correct: 1,
  },
];

const practiceQuestions = [
  {
    question: "Химия ғылымы зерттейтін үш нәрсені ата.",
    answer:
      "Заттардың құрамы, құрылысы, қасиеттері және өзгерістері.",
  },
  {
    question: "Күнделікті өмірден химияға байланысты екі мысал келтір.",
    answer:
      "Мысалы: тамақ дайындау, сабын қолдану, дәрі жасау немесе батареялардың жұмысы.",
  },
  {
    question: "Неліктен химияны білу маңызды?",
    answer:
      "Өйткені химия заттардың қасиеттері мен өзгерістерін түсінуге және оларды дұрыс қолдануға көмектеседі.",
  },
];

export default function HimiyaGilimiPage() {
  const [activeSection, setActiveSection] = useState("theory");

  const [practiceIndex, setPracticeIndex] = useState(0);
  const [showPracticeAnswer, setShowPracticeAnswer] = useState(false);

  const [testIndex, setTestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  function chooseAnswer(index: number) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === testQuestions[testIndex].correct) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (testIndex === testQuestions.length - 1) {
      setTestFinished(true);
      return;
    }

    setTestIndex((previous) => previous + 1);
    setSelectedAnswer(null);
  }

  function restartTest() {
    setTestIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTestFinished(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-emerald-600">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Оқулыққа қайту
          </a>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center">
            <div className="text-white">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                🧪 7-СЫНЫП · 1-БӨЛІМ
              </div>

              <h1 className="mt-5 text-4xl font-black md:text-6xl">
                Химия ғылымы
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                Химияның нені зерттейтінін және оның күнделікті
                өмірдегі маңызын түсін.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  ⏱️ 10 минут
                </span>

                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  ⭐ Бастапқы деңгей
                </span>

                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  🏆 +10 ұпай
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-60 w-48 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <div className="text-8xl">🧪</div>

                <div className="absolute -right-4 top-8 rounded-2xl bg-white px-4 py-3 text-2xl shadow-xl">
                  ⚛️
                </div>

                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 text-2xl shadow-xl">
                  🔬
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 py-4">
            {[
              ["theory", "📖", "Теория"],
              ["practice", "🔬", "Практика"],
              ["test", "📝", "Тест"],
            ].map(([id, icon, title]) => {
              const active = activeSection === id;

              return (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`rounded-2xl p-4 text-left font-black transition ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-50 text-slate-700 hover:bg-blue-50"
                  }`}
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="mt-2">{title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* THEORY */}
      {activeSection === "theory" && (
        <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-blue-600">
                  01 · Негізгі түсінік
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Химия дегеніміз не?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Химия — заттардың құрамын, құрылысын,
                  қасиеттерін және олардың бір заттан басқа
                  затқа айналуын зерттейтін ғылым.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-6">
                  <div className="text-3xl">💡</div>

                  <h3 className="mt-3 text-xl font-black">
                    Қарапайым тілмен
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Химия бізге заттардың неден тұратынын,
                    қандай қасиеттері бар екенін және олардың
                    қалай өзгеретінін түсінуге көмектеседі.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-emerald-600">
                  02 · Химия нені зерттейді?
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    [
                      "🧬",
                      "Заттың құрамы",
                      "Заттың қандай бөлшектерден тұратынын зерттейді.",
                    ],
                    [
                      "🔍",
                      "Заттың құрылысы",
                      "Бөлшектердің орналасуы мен байланысын қарастырады.",
                    ],
                    [
                      "⚗️",
                      "Қасиеттері",
                      "Заттардың физикалық және химиялық қасиеттерін зерттейді.",
                    ],
                    [
                      "🔄",
                      "Өзгерістері",
                      "Заттардың реакциялар кезінде қалай өзгеретінін зерттейді.",
                    ],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-slate-50 p-5"
                    >
                      <div className="text-3xl">{icon}</div>

                      <h3 className="mt-3 font-black">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-purple-600">
                  03 · Күнделікті өмірдегі химия
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  Химия бізге жақын
                </h2>

                <div className="mt-6 space-y-3">
                  {[
                    "🍳 Тамақ дайындау кезінде химиялық өзгерістер жүреді.",
                    "🧼 Сабын мен жуғыш заттар тазалауда қолданылады.",
                    "💊 Дәрі-дәрмектерді жасау кезінде химиялық білім пайдаланылады.",
                    "🌱 Тыңайтқыштар ауыл шаруашылығында қолданылады.",
                    "🔋 Батареяларда химиялық процестер жүреді.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div className="sticky top-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-4xl">🧠</div>

                <h3 className="mt-4 text-xl font-black">
                  Есте сақта!
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Химия — заттардың құрамын, құрылысын,
                  қасиеттерін және өзгерістерін зерттейтін ғылым.
                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-1/3 rounded-full bg-blue-600" />
                </div>

                <p className="mt-2 text-xs font-bold text-slate-400">
                  Теорияның 33%-ы
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-8">
            <div className="text-4xl">⚡</div>

            <h2 className="mt-3 text-2xl font-black">
              Жылдам тексеру
            </h2>

            <p className="mt-3 text-lg text-slate-700">
              Химия ғылымы зерттейтін негізгі нәрселерді
              есіңе түсір.
            </p>

            <button
              onClick={() => setActiveSection("practice")}
              className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700"
            >
              Практикаға өту →
            </button>
          </div>
        </section>
      )}

      {/* PRACTICE */}
      {activeSection === "practice" && (
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black uppercase text-emerald-600">
                  🔬 Практика
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Біліміңді бекіт
                </h2>
              </div>

              <div className="rounded-xl bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-600">
                {practiceIndex + 1} / {practiceQuestions.length}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-emerald-50 p-6">
              <p className="text-sm font-black text-emerald-700">
                Тапсырма
              </p>

              <h3 className="mt-3 text-xl font-black leading-8 text-slate-900">
                {practiceQuestions[practiceIndex].question}
              </h3>
            </div>

            {!showPracticeAnswer ? (
              <button
                onClick={() => setShowPracticeAnswer(true)}
                className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-black text-white transition hover:bg-emerald-700"
              >
                Жауабын көрсету
              </button>
            ) : (
              <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-black text-emerald-700">
                  Үлгі жауап:
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  {practiceQuestions[practiceIndex].answer}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3">
              <button
                disabled={practiceIndex === 0}
                onClick={() => {
                  setPracticeIndex((previous) => previous - 1);
                  setShowPracticeAnswer(false);
                }}
                className="rounded-2xl border border-slate-200 px-5 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Алдыңғы
              </button>

              {practiceIndex < practiceQuestions.length - 1 ? (
                <button
                  onClick={() => {
                    setPracticeIndex((previous) => previous + 1);
                    setShowPracticeAnswer(false);
                  }}
                  className="rounded-2xl bg-emerald-600 px-5 py-3 font-black text-white"
                >
                  Келесі →
                </button>
              ) : (
                <button
                  onClick={() => setActiveSection("test")}
                  className="rounded-2xl bg-purple-600 px-5 py-3 font-black text-white"
                >
                  Тестке өту →
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* TEST */}
      {activeSection === "test" && (
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          {!testFinished ? (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase text-purple-600">
                    📝 Тест
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    Біліміңді тексер
                  </h2>
                </div>

                <div className="rounded-xl bg-purple-50 px-4 py-2 text-sm font-black text-purple-600">
                  {testIndex + 1} / {testQuestions.length}
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-purple-600 transition-all"
                  style={{
                    width: `${
                      ((testIndex + 1) / testQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="mt-8 rounded-3xl bg-purple-50 p-6">
                <h3 className="text-xl font-black leading-8 text-slate-900">
                  {testQuestions[testIndex].question}
                </h3>

                <div className="mt-6 space-y-3">
                  {testQuestions[testIndex].options.map(
                    (option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect =
                        index === testQuestions[testIndex].correct;

                      let className =
                        "border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50";

                      if (selectedAnswer !== null) {
                        if (isCorrect) {
                          className =
                            "border-emerald-400 bg-emerald-50";
                        } else if (isSelected) {
                          className =
                            "border-red-400 bg-red-50";
                        }
                      }

                      return (
                        <button
                          key={option}
                          onClick={() => chooseAnswer(index)}
                          className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left font-semibold transition ${className}`}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-black">
                            {String.fromCharCode(65 + index)}
                          </span>

                          <span className="flex-1">
                            {option}
                          </span>

                          {selectedAnswer !== null &&
                            isCorrect && (
                              <span>✅</span>
                            )}

                          {selectedAnswer !== null &&
                            isSelected &&
                            !isCorrect && (
                              <span>❌</span>
                            )}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {selectedAnswer !== null && (
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900 p-5 text-white">
                  <div>
                    <p className="font-black">
                      {selectedAnswer ===
                      testQuestions[testIndex].correct
                        ? "Дұрыс жауап! 🎉"
                        : "Бұл жауап қате."
                      }
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {selectedAnswer ===
                      testQuestions[testIndex].correct
                        ? "+1 ұпай"
                        : "Келесі сұраққа өт."
                      }
                    </p>
                  </div>

                  <button
                    onClick={nextQuestion}
                    className="rounded-xl bg-white px-5 py-3 font-black text-slate-900"
                  >
                    {testIndex === testQuestions.length - 1
                      ? "Нәтижені көру"
                      : "Келесі →"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
              <div className="text-7xl">🏆</div>

              <p className="mt-6 text-sm font-black uppercase text-purple-600">
                Тест аяқталды
              </p>

              <h2 className="mt-2 text-4xl font-black text-slate-900">
                Нәтижең
              </h2>

              <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full bg-purple-50">
                <div>
                  <div className="text-4xl font-black text-purple-600">
                    {score}/{testQuestions.length}
                  </div>

                  <div className="text-sm font-bold text-slate-400">
                    ұпай
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {score === testQuestions.length
                  ? "Керемет! Тақырыпты өте жақсы меңгердің! 🎉"
                  : score >= 3
                    ? "Жақсы нәтиже! Қате кеткен сұрақтарды қайта қарап шық."
                    : "Теорияны тағы бір қарап, тестті қайта орындап көр."}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={restartTest}
                  className="rounded-2xl bg-purple-600 px-6 py-3 font-black text-white"
                >
                  🔄 Қайта тапсыру
                </button>

                <button
                  onClick={() => setActiveSection("theory")}
                  className="rounded-2xl border border-slate-200 px-6 py-3 font-black text-slate-700"
                >
                  📖 Теорияға қайту
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}