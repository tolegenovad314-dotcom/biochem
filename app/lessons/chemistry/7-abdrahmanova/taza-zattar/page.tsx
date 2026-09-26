"use client";

import { useState } from "react";

const questions = [
  {
    question: "Таза зат дегеніміз не?",
    options: [
      "Құрамы тұрақты, бір ғана заттан тұратын зат",
      "Бірнеше заттың қоспасы",
      "Тек сұйық зат",
      "Тек газ тәрізді зат",
    ],
    answer: 0,
  },
  {
    question: "Қайсысы таза затқа мысал болады?",
    options: ["Ауа", "Топырақ", "Оттек", "Тұзды су"],
    answer: 2,
  },
  {
    question: "Таза заттың құрамы қандай болады?",
    options: ["Тұрақты", "Әрқашан өзгереді", "Кездейсоқ", "Белгісіз"],
    answer: 0,
  },
  {
    question: "Қайсысы қоспа болып табылады?",
    options: ["Темір", "Мыс", "Ауа", "Оттек"],
    answer: 2,
  },
  {
    question: "Таза заттың негізгі ерекшелігі қандай?",
    options: [
      "Белгілі және тұрақты қасиеттері болады",
      "Әр уақытта қасиеті өзгереді",
      "Тек түсі маңызды",
      "Тек агрегаттық күйі маңызды",
    ],
    answer: 0,
  },
];

const practice = [
  {
    question:
      "Оттек, ауа, темір және тұзды судың қайсысы таза зат, қайсысы қоспа?",
    answer:
      "Таза заттар: оттек және темір. Қоспалар: ауа және тұзды су.",
  },
  {
    question: "Неліктен ауа таза зат емес?",
    answer:
      "Өйткені ауа бірнеше газдан тұратын қоспа.",
  },
  {
    question: "Таза заттың құрамының тұрақты болуы нені білдіреді?",
    answer:
      "Оның құрамы белгілі және тұрақты болады.",
  },
];

export default function TazaZattarPage() {
  const [tab, setTab] = useState<"theory" | "practice" | "test">("theory");
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const score = questions.reduce(
    (sum, question, index) =>
      sum + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const percent = Math.round((score / questions.length) * 100);

  const chooseAnswer = (questionIndex: number, optionIndex: number) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <section className="bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-500 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="inline-flex rounded-xl bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur hover:bg-white/25"
          >
            ← Оқулыққа қайту
          </a>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
              7-сынып
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
              1-бөлім
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
              10 минут
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-black md:text-5xl">
            Таза заттар
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
            Таза заттың анықтамасын және оның қоспадан айырмашылығын үйрен.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="grid gap-3 rounded-3xl bg-white p-3 shadow-sm md:grid-cols-3">
          <button
            onClick={() => setTab("theory")}
            className={`rounded-2xl p-4 text-left font-bold ${
              tab === "theory"
                ? "bg-emerald-600 text-white"
                : "hover:bg-emerald-50"
            }`}
          >
            📖 Теория
          </button>

          <button
            onClick={() => setTab("practice")}
            className={`rounded-2xl p-4 text-left font-bold ${
              tab === "practice"
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-50"
            }`}
          >
            🔬 Практика
          </button>

          <button
            onClick={() => setTab("test")}
            className={`rounded-2xl p-4 text-left font-bold ${
              tab === "test"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-50"
            }`}
          >
            📝 Тест
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-8">
        {tab === "theory" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                🧪 Таза зат дегеніміз не?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                <strong>Таза зат</strong> — құрамы тұрақты және белгілі
                қасиеттері бар, бір ғана заттан тұратын зат.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                🔍 Мысалдар
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-emerald-50 p-6">
                  <div className="text-4xl">🌬️</div>
                  <h3 className="mt-3 font-black">Оттек</h3>
                  <p className="mt-2 text-sm">
                    Таза заттың мысалы.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <div className="text-4xl">🔩</div>
                  <h3 className="mt-3 font-black">Темір</h3>
                  <p className="mt-2 text-sm">
                    Химиялық элементтен тұратын зат.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-6">
                  <div className="text-4xl">💧</div>
                  <h3 className="mt-3 font-black">
                    Дистилденген су
                  </h3>
                  <p className="mt-2 text-sm">
                    Оқу химиясында таза су ретінде қарастырылады.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">
                ⚖️ Таза зат пен қоспа
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-emerald-50 p-6">
                  <h3 className="text-xl font-black text-emerald-900">
                    🧪 Таза зат
                  </h3>

                  <ul className="mt-4 space-y-2 text-emerald-900">
                    <li>✓ Бір заттан тұрады</li>
                    <li>✓ Құрамы тұрақты</li>
                    <li>✓ Белгілі қасиеттері бар</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-orange-50 p-6">
                  <h3 className="text-xl font-black text-orange-900">
                    🥤 Қоспа
                  </h3>

                  <ul className="mt-4 space-y-2 text-orange-900">
                    <li>✓ Бірнеше заттан тұрады</li>
                    <li>✓ Құрамы өзгеруі мүмкін</li>
                    <li>✓ Құрамындағы заттар қасиеттерін сақтайды</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-amber-50 p-7">
              <h2 className="text-2xl font-black text-amber-900">
                💡 Есте сақта!
              </h2>

              <div className="mt-4 space-y-2 text-amber-900">
                <p>✓ Таза заттың құрамы тұрақты.</p>
                <p>✓ Ауа — қоспа.</p>
                <p>✓ Тұзды су — қоспа.</p>
                <p>✓ Оттек — таза зат.</p>
              </div>
            </div>

            <button
              onClick={() => setTab("practice")}
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
            >
              Теорияны түсіндім → Практика
            </button>
          </div>
        )}

        {tab === "practice" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">
                🔬 Практика
              </h2>

              <p className="mt-2 text-slate-500">
                Алдымен өзің жауап беріп көр.
              </p>
            </div>

            {practice.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-black text-blue-700">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-bold leading-7">
                  {item.question}
                </h3>
              </div>
            ))}

            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="w-full rounded-2xl border-2 border-blue-200 bg-white px-6 py-4 font-bold text-blue-700 hover:bg-blue-50"
            >
              {showAnswers
                ? "Жауаптарды жасыру ↑"
                : "Жауаптарды көрсету ↓"}
            </button>

            {showAnswers && (
              <div className="space-y-3">
                {practice.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-blue-50 p-5"
                  >
                    <p className="font-black text-blue-900">
                      {index + 1}-жауап
                    </p>

                    <p className="mt-2 text-blue-800">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setTab("test")}
              className="w-full rounded-2xl bg-purple-600 px-6 py-4 font-bold text-white hover:bg-purple-700"
            >
              Практика аяқталды → Тест
            </button>
          </div>
        )}

        {tab === "test" && !finished && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">
                📝 Тест
              </h2>

              <p className="mt-2 text-slate-500">
                5 сұраққа жауап бер.
              </p>

              <div className="mt-5 h-3 rounded-full bg-slate-100">
                <div
                  className="h-3 rounded-full bg-purple-600 transition-all"
                  style={{
                    width: `${(answers.length / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {questions.map((question, questionIndex) => (
              <div
                key={questionIndex}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="font-bold leading-7">
                  {questionIndex + 1}. {question.question}
                </h3>

                <div className="mt-5 space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() =>
                        chooseAnswer(questionIndex, optionIndex)
                      }
                      className={`w-full rounded-2xl border-2 p-4 text-left ${
                        answers[questionIndex] === optionIndex
                          ? "border-purple-500 bg-purple-50"
                          : "border-slate-200 hover:bg-purple-50"
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                if (answers.length === questions.length) {
                  setFinished(true);
                }
              }}
              disabled={answers.length !== questions.length}
              className={`w-full rounded-2xl px-6 py-4 font-bold text-white ${
                answers.length === questions.length
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              Тестті аяқтау →
            </button>
          </div>
        )}

        {tab === "test" && finished && (
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="text-6xl">
              {percent === 100 ? "🏆" : percent >= 60 ? "🎉" : "📚"}
            </div>

            <h2 className="mt-5 text-3xl font-black">
              Нәтижең дайын!
            </h2>

            <div className="mx-auto mt-7 max-w-md rounded-3xl bg-purple-50 p-7">
              <div className="text-5xl font-black text-purple-700">
                {score} / {questions.length}
              </div>

              <div className="mt-2 text-xl font-bold">
                {percent}%
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm text-slate-500">Дұрыс</p>
                <p className="mt-1 text-2xl font-black text-emerald-700">
                  {score}
                </p>
              </div>

              <div className="rounded-2xl bg-red-50 p-5">
                <p className="text-sm text-slate-500">Қате</p>
                <p className="mt-1 text-2xl font-black text-red-600">
                  {questions.length - score}
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <p className="text-sm text-slate-500">Ұпай</p>
                <p className="mt-1 text-2xl font-black text-amber-600">
                  +{score * 2}
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left">
              <h3 className="font-black">
                🔁 Қателермен жұмыс
              </h3>

              <div className="mt-4 space-y-3">
                {questions.map((question, index) =>
                  answers[index] !== question.answer ? (
                    <div
                      key={index}
                      className="rounded-xl bg-white p-4"
                    >
                      <p className="font-bold">
                        {index + 1}. {question.question}
                      </p>

                      <p className="mt-2 text-sm text-red-600">
                        Дұрыс жауап:{" "}
                        <strong>
                          {question.options[question.answer]}
                        </strong>
                      </p>
                    </div>
                  ) : null
                )}

                {score === questions.length && (
                  <div className="rounded-xl bg-emerald-50 p-4 font-bold text-emerald-800">
                    🎉 Барлық сұрақ дұрыс!
                  </div>
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setAnswers([]);
                  setFinished(false);
                }}
                className="flex-1 rounded-2xl border-2 border-slate-200 px-6 py-4 font-bold hover:bg-slate-50"
              >
                🔄 Қайта тапсыру
              </button>

              <a
                href="/lessons/chemistry/7-abdrahmanova"
                className="flex-1 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
              >
                📚 Оқулыққа қайту
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}