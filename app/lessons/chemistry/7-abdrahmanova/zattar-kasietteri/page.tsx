"use client";

import { useState } from "react";

type Tab = "theory" | "practice" | "test";

const testQuestions = [
  {
    question: "Зат дегеніміз не?",
    options: [
      "Белгілі бір қасиеттері бар материяның түрі",
      "Тек сұйық күйдегі дене",
      "Тек газдар жиынтығы",
      "Тек тірі ағза",
    ],
    answer: 0,
  },
  {
    question: "Заттың физикалық қасиетіне қайсысы жатады?",
    options: ["Жану", "Түсі", "Шіру", "Басқа затқа айналу"],
    answer: 1,
  },
  {
    question: "Судың қалыпты жағдайда агрегаттық күйі қандай?",
    options: ["Қатты", "Сұйық", "Газ", "Плазма"],
    answer: 1,
  },
  {
    question: "Темірдің түсі қандай?",
    options: ["Күміс түсті", "Қызыл", "Жасыл", "Көк"],
    answer: 0,
  },
  {
    question: "Қайсысы заттың қасиетін сипаттайды?",
    options: ["Түс", "Сынып бөлмесі", "Оқушы", "Дәптер"],
    answer: 0,
  },
];

const practiceQuestions = [
  {
    question: "Су, мұз және су буы — бір заттың әртүрлі күйлері. Олардың агрегаттық күйлерін ата.",
    answer: "Су — сұйық, мұз — қатты, су буы — газ.",
  },
  {
    question: "Темірдің түсі, тығыздығы және балқу температурасы қандай қасиеттерге жатады?",
    answer: "Бұлардың барлығы физикалық қасиеттерге жатады.",
  },
  {
    question: "Қанттың түсі ақ, суда ериді және тәтті дәмі бар. Осыдан кемінде екі қасиетін ата.",
    answer: "Мысалы: ақ түсті және суда ериді.",
  },
];

export default function ZattarKasietteriPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theory");
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showPracticeAnswers, setShowPracticeAnswers] = useState(false);

  const score = testQuestions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const percentage = Math.round((score / testQuestions.length) * 100);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const finishTest = () => {
    if (answers.length === testQuestions.length) {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="mb-6 inline-flex rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/25"
          >
            ← Оқулыққа қайту
          </a>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                7-сынып
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                1-бөлім
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                Бастапқы деңгей
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Заттар және олардың қасиеттері
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
              Заттардың негізгі қасиеттерін танып, оларды физикалық және
              химиялық өзгерістерден ажыратуды үйрен.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                📖 Теория
              </div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                🔬 Практика
              </div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                📝 5 тест
              </div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                ⭐ +10 ұпай
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`rounded-2xl px-5 py-4 text-left font-bold transition ${
              activeTab === "theory"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-700 hover:bg-blue-50"
            }`}
          >
            <div className="text-lg">📖 Теория</div>
            <div
              className={`mt-1 text-sm ${
                activeTab === "theory" ? "text-blue-100" : "text-slate-400"
              }`}
            >
              Негізгі түсініктер
            </div>
          </button>

          <button
            onClick={() => setActiveTab("practice")}
            className={`rounded-2xl px-5 py-4 text-left font-bold transition ${
              activeTab === "practice"
                ? "bg-emerald-600 text-white shadow-lg"
                : "text-slate-700 hover:bg-emerald-50"
            }`}
          >
            <div className="text-lg">🔬 Практика</div>
            <div
              className={`mt-1 text-sm ${
                activeTab === "practice"
                  ? "text-emerald-100"
                  : "text-slate-400"
              }`}
            >
              Білімді тексер
            </div>
          </button>

          <button
            onClick={() => setActiveTab("test")}
            className={`rounded-2xl px-5 py-4 text-left font-bold transition ${
              activeTab === "test"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-slate-700 hover:bg-purple-50"
            }`}
          >
            <div className="text-lg">📝 Тест</div>
            <div
              className={`mt-1 text-sm ${
                activeTab === "test" ? "text-purple-100" : "text-slate-400"
              }`}
            >
              5 сұрақ
            </div>
          </button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        {/* THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                  🧪
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Зат дегеніміз не?
                  </h2>
                  <p className="text-sm text-slate-500">
                    Химиядағы ең негізгі ұғымдардың бірі
                  </p>
                </div>
              </div>

              <p className="text-lg leading-8 text-slate-700">
                <strong>Зат</strong> — белгілі бір қасиеттері бар материяның
                түрі. Бізді қоршаған ортадағы көптеген денелер әртүрлі
                заттардан тұрады.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="text-3xl">💧</div>
                  <h3 className="mt-3 font-bold text-slate-900">Су</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Түссіз сұйық зат.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <div className="text-3xl">🔩</div>
                  <h3 className="mt-3 font-bold text-slate-900">Темір</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Металл, қатты зат.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-5">
                  <div className="text-3xl">🌬️</div>
                  <h3 className="mt-3 font-bold text-slate-900">Оттек</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Газ күйіндегі зат.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                🔎 Заттардың қасиеттері
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Әр заттың өзіне тән қасиеттері болады. Осы қасиеттер арқылы
                заттарды бір-бірінен ажыратуға болады.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["🎨", "Түс", "Заттың қандай түсті екені."],
                  ["👃", "Иіс", "Затқа тән иістің болуы."],
                  ["🧊", "Агрегаттық күй", "Қатты, сұйық немесе газ күйі."],
                  ["⚖️", "Тығыздық", "Заттың маңызды физикалық қасиеттерінің бірі."],
                  ["🌡️", "Балқу температурасы", "Заттың қатты күйден сұйық күйге өту температурасы."],
                  ["💧", "Ерігіштік", "Бір заттың басқа затта еру қабілеті."],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{icon}</div>
                      <div>
                        <h3 className="font-bold text-slate-900">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <h2 className="text-2xl font-black text-amber-900">
                💡 Есте сақта!
              </h2>

              <ul className="mt-4 space-y-3 text-amber-900">
                <li>✓ Әр заттың өзіне тән қасиеттері болады.</li>
                <li>✓ Физикалық қасиеттерді заттың құрамын өзгертпей бақылауға болады.</li>
                <li>✓ Заттар қатты, сұйық және газ күйінде болуы мүмкін.</li>
                <li>✓ Заттың қасиеттері оны басқа заттардан ажыратуға көмектеседі.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-purple-50 p-7">
              <h2 className="text-2xl font-black text-purple-900">
                🧠 Қысқаша схема
              </h2>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
                <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-800 shadow-sm">
                  Зат
                </div>

                <div className="text-2xl text-purple-400">→</div>

                <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-800 shadow-sm">
                  Қасиеттері
                </div>

                <div className="text-2xl text-purple-400">→</div>

                <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-800 shadow-sm">
                  Ажырату
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab("practice")}
              className="w-full rounded-2xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Теорияны түсіндім → Практикаға өту
            </button>
          </div>
        )}

        {/* PRACTICE */}
        {activeTab === "practice" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  🔬
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Практикалық тапсырмалар
                  </h2>
                  <p className="text-slate-500">
                    Алдымен өзің жауап беріп көр!
                  </p>
                </div>
              </div>
            </div>

            {practiceQuestions.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 font-black text-emerald-700">
                    {index + 1}
                  </div>

                  <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                    Тапсырма
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-7 text-slate-900">
                  {item.question}
                </h3>
              </div>
            ))}

            <button
              onClick={() => setShowPracticeAnswers(!showPracticeAnswers)}
              className="w-full rounded-2xl border-2 border-emerald-200 bg-white px-6 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              {showPracticeAnswers
                ? "Жауаптарды жасыру ↑"
                : "Жауаптарды көрсету ↓"}
            </button>

            {showPracticeAnswers && (
              <div className="space-y-4">
                {practiceQuestions.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                  >
                    <div className="font-bold text-emerald-900">
                      {index + 1}-жауап:
                    </div>
                    <p className="mt-2 leading-7 text-emerald-800">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setActiveTab("test")}
              className="w-full rounded-2xl bg-purple-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-700"
            >
              Практиканы аяқтадым → Тестке өту
            </button>
          </div>
        )}

        {/* TEST */}
        {activeTab === "test" && (
          <div className="space-y-6">
            {!showResult ? (
              <>
                <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-black text-slate-900">
                    📝 Білімді тексер
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Әр сұраққа бір дұрыс жауап таңда.
                  </p>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-purple-600 transition-all"
                      style={{
                        width: `${
                          (answers.length / testQuestions.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {answers.length} / {testQuestions.length} жауап
                  </p>
                </div>

                {testQuestions.map((question, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 font-black text-purple-700">
                        {questionIndex + 1}
                      </div>

                      <h3 className="font-bold leading-6 text-slate-900">
                        {question.question}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() =>
                            handleAnswer(questionIndex, optionIndex)
                          }
                          className={`w-full rounded-2xl border-2 p-4 text-left font-medium transition ${
                            answers[questionIndex] === optionIndex
                              ? "border-purple-500 bg-purple-50 text-purple-900"
                              : "border-slate-200 text-slate-700 hover:border-purple-200 hover:bg-purple-50"
                          }`}
                        >
                          <span className="mr-3 font-bold text-slate-400">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={finishTest}
                  disabled={answers.length !== testQuestions.length}
                  className={`w-full rounded-2xl px-6 py-4 font-bold text-white shadow-lg transition ${
                    answers.length === testQuestions.length
                      ? "bg-purple-600 hover:-translate-y-0.5 hover:bg-purple-700"
                      : "cursor-not-allowed bg-slate-300"
                  }`}
                >
                  Тестті аяқтау →
                </button>
              </>
            ) : (
              <div className="rounded-3xl border border-purple-100 bg-white p-8 text-center shadow-sm">
                <div className="text-6xl">
                  {percentage === 100
                    ? "🏆"
                    : percentage >= 60
                    ? "🎉"
                    : "📚"}
                </div>

                <h2 className="mt-5 text-3xl font-black text-slate-900">
                  Тест аяқталды!
                </h2>

                <p className="mt-3 text-slate-500">
                  Нәтижеңді төменнен көре аласың.
                </p>

                <div className="mx-auto mt-7 max-w-md rounded-3xl bg-purple-50 p-7">
                  <div className="text-5xl font-black text-purple-700">
                    {score} / {testQuestions.length}
                  </div>

                  <div className="mt-2 text-lg font-bold text-slate-700">
                    {percentage}%
                  </div>

                  <div className="mt-5 h-4 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-purple-600"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-7 grid gap-4 text-left md:grid-cols-3">
                  <div className="rounded-2xl bg-blue-50 p-5">
                    <div className="text-sm font-semibold text-slate-500">
                      Дұрыс жауап
                    </div>
                    <div className="mt-1 text-2xl font-black text-blue-700">
                      {score}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-red-50 p-5">
                    <div className="text-sm font-semibold text-slate-500">
                      Қате жауап
                    </div>
                    <div className="mt-1 text-2xl font-black text-red-600">
                      {testQuestions.length - score}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-amber-50 p-5">
                    <div className="text-sm font-semibold text-slate-500">
                      Ұпай
                    </div>
                    <div className="mt-1 text-2xl font-black text-amber-600">
                      +{score * 2}
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left">
                  <h3 className="font-black text-slate-900">
                    🔁 Қателермен жұмыс
                  </h3>

                  <div className="mt-4 space-y-3">
                    {testQuestions.map((question, index) =>
                      answers[index] !== question.answer ? (
                        <div
                          key={index}
                          className="rounded-xl border border-red-100 bg-white p-4"
                        >
                          <div className="font-bold text-slate-800">
                            {index + 1}. {question.question}
                          </div>

                          <div className="mt-2 text-sm text-red-600">
                            Дұрыс жауап:{" "}
                            <strong>{question.options[question.answer]}</strong>
                          </div>
                        </div>
                      ) : null
                    )}

                    {score === testQuestions.length && (
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-800">
                        🎉 Барлық сұраққа дұрыс жауап бердің! Керемет!
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={restartTest}
                    className="flex-1 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    🔄 Қайта тапсыру
                  </button>

                  <a
                    href="/lessons/chemistry/7-abdrahmanova"
                    className="flex-1 rounded-2xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
                  >
                    📚 Келесі тақырыпқа өту
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}