"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "Қоспаларды бөлу неге негізделеді?",
    options: [
      "Заттардың химиялық реакцияға түсуіне",
      "Заттардың физикалық қасиеттерінің айырмашылығына",
      "Барлық заттардың бірдей болуына",
      "Қоспаны міндетті түрде қыздыруға",
    ],
    answer: 1,
    explanation:
      "Қоспаларды бөлу кезінде оның құрамындағы заттардың физикалық қасиеттерінің айырмашылығы пайдаланылады.",
  },
  {
    question: "Құм мен суды бөлу үшін қандай әдіс қолданылады?",
    options: ["Сүзу", "Айдау", "Магнитпен бөлу", "Буландыру"],
    answer: 0,
    explanation:
      "Құм суда ерімейді, сондықтан құм мен суды сүзу арқылы бөлуге болады.",
  },
  {
    question: "Темір ұнтағы мен құмды қалай бөлуге болады?",
    options: ["Сүзу", "Магнитпен бөлу", "Буландыру", "Тұндыру"],
    answer: 1,
    explanation:
      "Темір магнитке тартылады, ал құм магнитке тартылмайды.",
  },
  {
    question: "Тұзды судан тұзды алу үшін қандай әдіс тиімді?",
    options: ["Сүзу", "Тұндыру", "Буландыру", "Магнитпен бөлу"],
    answer: 2,
    explanation:
      "Суды буландырғанда су буға айналады, ал тұз ыдыста қалады.",
  },
  {
    question: "Сұйықтарды қайнау температураларының айырмашылығына қарай бөлу қалай аталады?",
    options: ["Сүзу", "Айдау", "Тұндыру", "Магнитпен бөлу"],
    answer: 1,
    explanation:
      "Айдау сұйықтардың қайнау температураларының айырмашылығына негізделеді.",
  },
];

const practiceTasks = [
  {
    title: "Құм + су",
    question: "Құм мен судың қоспасын қандай әдіспен бөлуге болады?",
    answer:
      "Сүзу әдісімен бөлуге болады. Құм сүзгіде қалады, ал су сүзгіден өтеді.",
  },
  {
    title: "Темір + құм",
    question: "Темір ұнтағы мен құмды қалай ажыратуға болады?",
    answer:
      "Магнитпен бөлуге болады, себебі темір магнитке тартылады.",
  },
  {
    title: "Тұз + су",
    question: "Тұзды судан тұзды қалай алуға болады?",
    answer:
      "Буландыру әдісі қолданылады. Су буланып, тұз қалады.",
  },
  {
    title: "Су + май",
    question: "Су мен майды қалай бөлуге болады?",
    answer:
      "Тұндыру арқылы олардың қабаттарға бөлінуін пайдаланып ажыратуға болады.",
  },
];

const methods = [
  {
    icon: "🧺",
    title: "Сүзу",
    description:
      "Ерімейтін қатты затты сұйықтан бөлу әдісі.",
    example: "Құм + су",
  },
  {
    icon: "🧲",
    title: "Магнитпен бөлу",
    description:
      "Магнитке тартылатын заттарды басқа заттардан ажырату.",
    example: "Темір + құм",
  },
  {
    icon: "💧",
    title: "Буландыру",
    description:
      "Еріген затты еріткіштен бөлу үшін еріткішті буландыру.",
    example: "Тұз + су",
  },
  {
    icon: "⚗️",
    title: "Айдау",
    description:
      "Сұйықтарды қайнау температураларының айырмашылығына қарай бөлу.",
    example: "Сұйық қоспалар",
  },
  {
    icon: "⏳",
    title: "Тұндыру",
    description:
      "Бөлшектердің тығыздығы немесе ерігіштігі айырмашылығына негізделеді.",
    example: "Лай су",
  },
];

export default function QospalardyBoluAdisteriPage() {
  const [activeTab, setActiveTab] = useState<
    "theory" | "practice" | "test"
  >("theory");

  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (
    questionIndex: number,
    optionIndex: number
  ) => {
    if (submitted) return;

    setAnswers((previous) => {
      const next = [...previous];
      next[questionIndex] = optionIndex;
      return next;
    });
  };

  const finishTest = () => {
    const allAnswered = questions.every(
      (_, index) => answers[index] !== undefined
    );

    if (!allAnswered) {
      alert("Барлық сұраққа жауап бер.");
      return;
    }

    setSubmitted(true);
  };

  const restartTest = () => {
    setAnswers([]);
    setSubmitted(false);
  };

  const correctCount = questions.reduce(
    (count, question, index) =>
      count + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const percentage = Math.round(
    (correctCount / questions.length) * 100
  );

  const points = correctCount * 2;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Оқулыққа қайту
          </a>

          <div className="mt-8 max-w-4xl text-white">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
              🧪 7-СЫНЫП · 01-БӨЛІМ
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Қоспаларды бөлу әдістері
            </h1>

            <p className="mt-4 text-lg leading-8 text-blue-50">
              Қоспаларды олардың физикалық қасиеттерінің
              айырмашылығына сүйеніп бөлуді үйрен.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                📖 Теория
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                🔬 Практика
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                📝 5 сұрақ
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                ⭐ +10 ұпай
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:grid-cols-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`rounded-xl px-5 py-4 text-sm font-black transition ${
              activeTab === "theory"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            📖 Теория
          </button>

          <button
            onClick={() => setActiveTab("practice")}
            className={`rounded-xl px-5 py-4 text-sm font-black transition ${
              activeTab === "practice"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            🔬 Практика
          </button>

          <button
            onClick={() => setActiveTab("test")}
            className={`rounded-xl px-5 py-4 text-sm font-black transition ${
              activeTab === "test"
                ? "bg-purple-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            📝 Тест
          </button>
        </div>
      </section>

      {/* THEORY */}
      {activeTab === "theory" && (
        <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <div className="space-y-6">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  🧪
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Қоспаларды не үшін бөледі?
                  </h2>

                  <p className="mt-3 leading-8 text-slate-600">
                    Қоспа құрамындағы заттарды бір-бірінен ажырату
                    үшін олардың физикалық қасиеттеріндегі
                    айырмашылықтар пайдаланылады.
                  </p>

                  <p className="mt-3 leading-8 text-slate-600">
                    Мысалы, заттардың ерігіштігі, бөлшектерінің
                    өлшемі, тығыздығы, магнитке тартылуы немесе
                    қайнау температурасы әртүрлі болуы мүмкін.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                🔬 Негізгі бөлу әдістері
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {methods.map((method) => (
                  <div
                    key={method.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-4xl">{method.icon}</div>

                    <h3 className="mt-3 text-lg font-black text-slate-900">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {method.description}
                    </p>

                    <div className="mt-4 inline-flex rounded-xl bg-white px-3 py-2 text-xs font-bold text-blue-600 shadow-sm">
                      Мысал: {method.example}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-blue-200 bg-blue-50 p-7">
              <h2 className="text-2xl font-black text-blue-900">
                🧠 Қай қоспаға қай әдіс?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  ["Құм + су", "Сүзу"],
                  ["Темір + құм", "Магнитпен бөлу"],
                  ["Тұз + су", "Буландыру"],
                  ["Су + май", "Тұндыру"],
                ].map(([mixture, method]) => (
                  <div
                    key={mixture}
                    className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-bold text-slate-800">
                      {mixture}
                    </span>

                    <span className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-700">
                      {method}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-orange-200 bg-orange-50 p-7">
              <h2 className="text-xl font-black text-orange-900">
                💡 Есте сақта!
              </h2>

              <p className="mt-3 leading-8 text-orange-900">
                Қоспаны бөлу әдісін таңдағанда алдымен қоспадағы
                заттардың қандай физикалық қасиеті ерекшеленетінін
                анықта.
              </p>

              <div className="mt-5 rounded-2xl bg-white p-5 text-sm font-bold leading-8 text-slate-700">
                Құм + су → Сүзу
                <br />
                Темір + құм → Магнит
                <br />
                Тұз + су → Буландыру
                <br />
                Сұйық қоспа → Айдау
              </div>
            </article>
          </div>
        </section>
      )}

      {/* PRACTICE */}
      {activeTab === "practice" && (
        <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-600">
              🔬 БІЛІМІҢДІ ҚОЛДАН
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Практикалық тапсырмалар
            </h2>

            <p className="mt-2 text-slate-500">
              Алдымен өзің ойлан, содан кейін жауабын тексер.
            </p>
          </div>

          <div className="space-y-5">
            {practiceTasks.map((task) => (
              <article
                key={task.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-slate-900">
                  {task.title}
                </h3>

                <p className="mt-3 font-semibold leading-7 text-slate-700">
                  {task.question}
                </p>

                <details className="mt-5">
                  <summary className="cursor-pointer font-black text-emerald-600">
                    Жауабын көру
                  </summary>

                  <p className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-900">
                    {task.answer}
                  </p>
                </details>
              </article>
            ))}
          </div>

          <button
            onClick={() => setActiveTab("test")}
            className="mt-8 w-full rounded-2xl bg-purple-600 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:bg-purple-700"
          >
            Тестке өту →
          </button>
        </section>
      )}

      {/* TEST */}
      {activeTab === "test" && (
        <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          {!submitted ? (
            <>
              <div className="mb-8">
                <p className="text-sm font-black uppercase tracking-wider text-purple-600">
                  📝 БІЛІМІҢДІ ТЕКСЕР
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  Қоспаларды бөлу әдістері бойынша тест
                </h2>

                <p className="mt-2 text-slate-500">
                  5 сұрақ · әр дұрыс жауапқа 2 ұпай
                </p>
              </div>

              <div className="space-y-5">
                {questions.map((question, questionIndex) => (
                  <article
                    key={questionIndex}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 font-black text-purple-600">
                        {questionIndex + 1}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-black text-slate-900">
                          {question.question}
                        </h3>

                        <div className="mt-5 grid gap-3">
                          {question.options.map(
                            (option, optionIndex) => {
                              const selected =
                                answers[questionIndex] ===
                                optionIndex;

                              return (
                                <button
                                  key={option}
                                  onClick={() =>
                                    handleAnswer(
                                      questionIndex,
                                      optionIndex
                                    )
                                  }
                                  className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                                    selected
                                      ? "border-purple-500 bg-purple-50 text-purple-700"
                                      : "border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:bg-purple-50/50"
                                  }`}
                                >
                                  <span className="mr-3 font-black">
                                    {String.fromCharCode(
                                      65 + optionIndex
                                    )}
                                    .
                                  </span>

                                  {option}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <button
                onClick={finishTest}
                className="mt-8 w-full rounded-2xl bg-purple-600 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:bg-purple-700"
              >
                Нәтижені көру →
              </button>
            </>
          ) : (
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-center text-white shadow-xl">
                <div className="text-6xl">🎉</div>

                <h2 className="mt-4 text-3xl font-black">
                  Тест аяқталды!
                </h2>

                <p className="mt-2 text-purple-100">
                  Қоспаларды бөлу әдістері бойынша нәтижең:
                </p>

                <div className="mt-6 text-6xl font-black">
                  {percentage}%
                </div>

                <p className="mt-2 font-bold">
                  {correctCount} / {questions.length} дұрыс жауап
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <div className="text-3xl">✅</div>

                  <p className="mt-2 text-sm font-bold text-slate-400">
                    ДҰРЫС
                  </p>

                  <p className="mt-1 text-2xl font-black text-emerald-600">
                    {correctCount}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <div className="text-3xl">❌</div>

                  <p className="mt-2 text-sm font-bold text-slate-400">
                    ҚАТЕ
                  </p>

                  <p className="mt-1 text-2xl font-black text-red-500">
                    {questions.length - correctCount}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <div className="text-3xl">⭐</div>

                  <p className="mt-2 text-sm font-bold text-slate-400">
                    ҰПАЙ
                  </p>

                  <p className="mt-1 text-2xl font-black text-purple-600">
                    +{points}
                  </p>
                </div>
              </div>

              {/* ERROR REVIEW */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900">
                  🔁 Қателермен жұмыс
                </h3>

                <div className="mt-5 space-y-4">
                  {questions.map((question, index) => {
                    const isCorrect =
                      answers[index] === question.answer;

                    return (
                      <div
                        key={index}
                        className={`rounded-2xl p-4 ${
                          isCorrect
                            ? "bg-emerald-50"
                            : "bg-red-50"
                        }`}
                      >
                        <p
                          className={`font-black ${
                            isCorrect
                              ? "text-emerald-800"
                              : "text-red-800"
                          }`}
                        >
                          {isCorrect ? "✅" : "❌"} {index + 1}-сұрақ
                          — {isCorrect ? "дұрыс" : "қате"}
                        </p>

                        {!isCorrect && (
                          <>
                            <p className="mt-2 text-sm leading-6 text-red-700">
                              Дұрыс жауап:{" "}
                              <strong>
                                {question.options[question.answer]}
                              </strong>
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {question.explanation}
                            </p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={restartTest}
                  className="flex-1 rounded-2xl bg-purple-600 px-6 py-4 font-black text-white transition hover:bg-purple-700"
                >
                  🔄 Қайта тапсыру
                </button>

                <a
                  href="/lessons/chemistry/7-abdrahmanova"
                  className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-black text-slate-700 transition hover:bg-slate-50"
                >
                  📚 Оқулыққа қайту
                </a>
              </div>
            </div>
          )}
        </section>
      )}

      {/* FOOTER */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            BIOCHEM
          </p>

          <h2 className="mt-3 text-2xl font-black text-white">
            Қоспаларды бөлу әдістерін меңгердің! 🧪
          </h2>

          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-black text-slate-900 transition hover:bg-slate-100"
          >
            Оқулыққа қайту →
          </a>
        </div>
      </section>
    </main>
  );
}