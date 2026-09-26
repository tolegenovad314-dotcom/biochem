"use client";

import { useState } from "react";

const questions = [
  {
    question: "Атомның ортасында не орналасады?",
    options: ["Электрон", "Ядро", "Молекула", "Ион"],
    correct: 1,
  },
  {
    question: "Протонның заряды қандай?",
    options: ["Теріс", "Бейтарап", "Оң", "Заряды жоқ"],
    correct: 2,
  },
  {
    question: "Электронның заряды қандай?",
    options: ["Оң", "Теріс", "Бейтарап", "Екі түрлі"],
    correct: 1,
  },
  {
    question: "Коваленттік байланыста атомдар не істейді?",
    options: [
      "Электрондарды ортақ пайдаланады",
      "Ядроларын біріктіреді",
      "Барлық электрондарын жоғалтады",
      "Протондарын ауыстырады",
    ],
    correct: 0,
  },
  {
    question: "NaCl қандай қосылыс?",
    options: [
      "Иондық қосылыс",
      "Тек металл",
      "Тек бейметалл",
      "Газ",
    ],
    correct: 0,
  },
];

export default function Tests() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const chooseAnswer = (index: number) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const finalScore = score;

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <a
            href="/"
            className="text-blue-600 hover:underline"
          >
            ← Басты бет
          </a>

          <section className="mt-8 rounded-3xl bg-white p-10 text-center shadow-xl">

            <div className="text-7xl">🎉</div>

            <p className="mt-5 font-semibold text-blue-600">
              ТЕСТ АЯҚТАЛДЫ
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
              Нәтижең
            </h1>

            <div className="mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full bg-blue-100">
              <span className="text-5xl font-extrabold text-blue-600">
                {finalScore}/{questions.length}
              </span>
            </div>

            <p className="mt-6 text-xl text-gray-600">
              {finalScore === questions.length
                ? "🔥 Керемет! Барлық сұраққа дұрыс жауап бердің!"
                : finalScore >= 3
                  ? "👏 Жақсы нәтиже! Тағы да қайталап көр."
                  : "📚 Тақырыптарды тағы бір рет қарап шық."}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                onClick={restart}
                className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >
                🔄 Қайта тапсыру
              </button>

              <a
                href="/chemistry"
                className="rounded-xl bg-gray-100 px-7 py-4 font-bold text-gray-800 hover:bg-gray-200"
              >
                🧪 Химияға өту
              </a>

            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <a
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Басты бет
        </a>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-xl md:p-10">

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-blue-600">
                📝 BIOCHEM • ТЕСТ
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                Химия бойынша тест
              </h1>
            </div>

            <div className="rounded-xl bg-blue-50 px-4 py-2 font-bold text-blue-700">
              {current + 1}/{questions.length}
            </div>
          </div>

          {/* Прогресс */}
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Сұрақ */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold leading-9 text-gray-900">
              {question.question}
            </h2>

            <div className="mt-7 grid gap-4">

              {question.options.map((option, index) => {

                const isCorrect =
                  selected !== null && index === question.correct;

                const isWrong =
                  selected === index &&
                  index !== question.correct;

                return (
                  <button
                    key={option}
                    onClick={() => chooseAnswer(index)}
                    className={`rounded-2xl border-2 p-5 text-left font-semibold transition ${
                      isCorrect
                        ? "border-green-500 bg-green-50 text-green-700"
                        : isWrong
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>

                    {option}

                    {isCorrect && (
                      <span className="float-right">✅</span>
                    )}

                    {isWrong && (
                      <span className="float-right">❌</span>
                    )}
                  </button>
                );
              })}

            </div>

            {/* Түсіндірме */}
            {selected !== null && (
              <div
                className={`mt-6 rounded-2xl p-5 ${
                  selected === question.correct
                    ? "bg-green-50"
                    : "bg-red-50"
                }`}
              >
                <p
                  className={`font-bold ${
                    selected === question.correct
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {selected === question.correct
                    ? "✅ Дұрыс жауап!"
                    : "❌ Дұрыс емес!"}
                </p>

                <p className="mt-2 text-gray-700">
                  Дұрыс жауап:{" "}
                  <strong>
                    {question.options[question.correct]}
                  </strong>
                </p>
              </div>
            )}

            {/* Келесі */}
            {selected !== null && (
              <button
                onClick={nextQuestion}
                className="mt-7 w-full rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
              >
                {current === questions.length - 1
                  ? "🏁 Нәтижені көру"
                  : "Келесі сұрақ →"}
              </button>
            )}

          </div>
        </section>
      </div>
    </main>
  );
}