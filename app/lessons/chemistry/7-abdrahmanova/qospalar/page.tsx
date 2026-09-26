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
    question: "Қоспа дегеніміз не?",
    options: [
      "Бір ғана заттан тұратын жүйе",
      "Екі немесе одан да көп заттан тұратын жүйе",
      "Тек металдардан тұратын зат",
      "Тек газдардан тұратын зат",
    ],
    answer: 1,
    explanation:
      "Қоспа екі немесе одан да көп заттың бірге болуынан түзіледі.",
  },
  {
    question: "Қайсысы қоспаға жатады?",
    options: ["Оттек", "Темір", "Ауа", "Алтын"],
    answer: 2,
    explanation:
      "Ауа құрамында азот, оттек, көмірқышқыл газы және басқа да газдар бар.",
  },
  {
    question: "Қоспадағы заттарды қалай бөлуге болады?",
    options: [
      "Тек химиялық реакция арқылы",
      "Физикалық әдістер арқылы",
      "Ешқашан бөлуге болмайды",
      "Тек қыздыру арқылы",
    ],
    answer: 1,
    explanation:
      "Қоспаның құрамындағы заттарды сүзу, тұндыру, буландыру, айдау сияқты физикалық әдістермен бөлуге болады.",
  },
  {
    question: "Тұзды су қандай жүйеге жатады?",
    options: ["Таза зат", "Қоспа", "Химиялық элемент", "Жай зат"],
    answer: 1,
    explanation:
      "Тұзды су — су мен тұздан тұратын қоспа.",
  },
  {
    question: "Қоспаның негізгі ерекшелігі қандай?",
    options: [
      "Құрамы әрқашан тұрақты",
      "Құрамындағы заттар өз қасиеттерін сақтай алады",
      "Тек бір элементтен тұрады",
      "Әрқашан жаңа зат түзіледі",
    ],
    answer: 1,
    explanation:
      "Қоспадағы заттар өздерінің негізгі қасиеттерін сақтайды және оларды физикалық әдістермен бөлуге болады.",
  },
];

const practiceQuestions = [
  {
    question: "Берілгендерді таза зат және қоспа деп бөл:",
    answer:
      "Оттек пен темір — таза заттарға мысал. Ауа мен тұзды су — қоспалар.",
  },
  {
    question: "Неліктен ауа қоспа болып саналады?",
    answer:
      "Өйткені ауа бірнеше газдан тұрады: негізінен азот пен оттек, сонымен қатар басқа газдар да кездеседі.",
  },
  {
    question: "Қоспадағы заттарды не үшін бөлу қажет болуы мүмкін?",
    answer:
      "Қоспаның құрамындағы қажетті затты алу немесе заттарды жеке-жеке зерттеу үшін бөлуге болады.",
  },
];

export default function QospalarPage() {
  const [activeTab, setActiveTab] = useState<"theory" | "practice" | "test">(
    "theory"
  );

  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;

    setAnswers((prev) => {
      const next = [...prev];
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

  const correctCount = questions.reduce((count, question, index) => {
    return count + (answers[index] === question.answer ? 1 : 0);
  }, 0);

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
              Қоспалар
            </h1>

            <p className="mt-4 text-lg leading-8 text-blue-50">
              Қоспалардың не екенін, олардың ерекшеліктерін және
              құрамындағы заттарды қалай ажыратуға болатынын үйрен.
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
                    Қоспа дегеніміз не?
                  </h2>

                  <p className="mt-3 leading-8 text-slate-600">
                    <strong>Қоспа</strong> — екі немесе одан да көп
                    заттардың бірге болуынан түзілетін жүйе.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                🧩 Қоспаларға мысалдар
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["🌬️", "Ауа", "Бірнеше газдардың қоспасы"],
                  ["💧", "Тұзды су", "Су мен тұздың қоспасы"],
                  ["🏖️", "Құм мен су", "Қатты зат пен сұйықтық қоспасы"],
                  ["🥗", "Салат", "Әртүрлі заттардың қоспасы"],
                ].map(([icon, title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="text-3xl">{icon}</div>

                    <h3 className="mt-3 font-black text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
              <h2 className="text-2xl font-black text-emerald-900">
                🔍 Қоспаның ерекшеліктері
              </h2>

              <div className="mt-5 space-y-3 text-emerald-900">
                <div className="flex gap-3">
                  <span className="font-black">✓</span>
                  <span>
                    Қоспа екі немесе одан да көп заттан тұрады.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="font-black">✓</span>
                  <span>
                    Қоспаның құрамы әртүрлі болуы мүмкін.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="font-black">✓</span>
                  <span>
                    Қоспадағы заттар өздерінің негізгі қасиеттерін
                    сақтай алады.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="font-black">✓</span>
                  <span>
                    Қоспаларды физикалық әдістермен бөлуге болады.
                  </span>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-purple-200 bg-purple-50 p-7">
              <h2 className="text-2xl font-black text-purple-900">
                ⚖️ Таза зат пен қоспаны ажырат
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-purple-200 bg-white">
                <div className="grid grid-cols-2 border-b border-purple-100 bg-purple-50">
                  <div className="p-4 font-black text-purple-900">
                    Таза зат
                  </div>

                  <div className="p-4 font-black text-purple-900">
                    Қоспа
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-5 text-sm leading-7 text-slate-600">
                    Бір ғана заттан тұрады.
                    <br />
                    <br />
                    Мысалы: оттек, темір.
                  </div>

                  <div className="border-l border-purple-100 p-5 text-sm leading-7 text-slate-600">
                    Екі немесе одан да көп заттан тұрады.
                    <br />
                    <br />
                    Мысалы: ауа, тұзды су.
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-orange-200 bg-orange-50 p-7">
              <h2 className="text-xl font-black text-orange-900">
                💡 Есте сақта!
              </h2>

              <p className="mt-3 leading-8 text-orange-900">
                <strong>Қоспа = бірнеше зат бірге.</strong>
                <br />
                Қоспаның құрамындағы заттарды физикалық әдістер арқылы
                бөлуге болады.
              </p>
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
              Алдымен өзің жауап беріп көр, содан кейін жауабын тексер.
            </p>
          </div>

          <div className="space-y-5">
            {practiceQuestions.map((item, index) => (
              <article
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-black text-emerald-600">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900">
                      {item.question}
                    </h3>

                    <details className="mt-4">
                      <summary className="cursor-pointer font-bold text-emerald-600">
                        Жауабын көру
                      </summary>

                      <p className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-900">
                        {item.answer}
                      </p>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">
            <p className="text-sm font-bold text-emerald-400">
              КЕЛЕСІ ҚАДАМ
            </p>

            <h3 className="mt-2 text-2xl font-black">
              Енді тест арқылы өзіңді тексер 📝
            </h3>

            <button
              onClick={() => setActiveTab("test")}
              className="mt-5 rounded-xl bg-white px-5 py-3 font-black text-slate-900 transition hover:bg-slate-100"
            >
              Тестке өту →
            </button>
          </div>
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
                  Қоспалар тақырыбы бойынша тест
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
                          {question.options.map((option, optionIndex) => {
                            const selected =
                              answers[questionIndex] === optionIndex;

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
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                {option}
                              </button>
                            );
                          })}
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
                  Қоспалар тақырыбы бойынша нәтижең:
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

                    if (isCorrect) {
                      return (
                        <div
                          key={index}
                          className="rounded-2xl bg-emerald-50 p-4"
                        >
                          <p className="font-bold text-emerald-800">
                            ✅ {index + 1}-сұрақ — дұрыс
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className="rounded-2xl bg-red-50 p-4"
                      >
                        <p className="font-black text-red-800">
                          ❌ {index + 1}-сұрақ — қате
                        </p>

                        <p className="mt-2 text-sm leading-6 text-red-700">
                          Дұрыс жауап:{" "}
                          <strong>
                            {question.options[question.answer]}
                          </strong>
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {question.explanation}
                        </p>
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
            Қоспаларды енді оңай ажырата аласың! 🧪
          </h2>

          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-black text-slate-900 transition hover:bg-slate-100"
          >
            Келесі тақырыптарға өту →
          </a>
        </div>
      </section>
    </main>
  );
}