"use client";

import { useState } from "react";

const questions = [
  {
    question: "Зертханада жұмыс істеген кезде ең алдымен не сақтау керек?",
    options: [
      "Қауіпсіздік ережелерін",
      "Телефонды",
      "Музыка тыңдауды",
      "Тәжірибені асығыс жасауды",
    ],
    correct: 0,
  },
  {
    question: "Химиялық заттарды зертханада қалай қолдану керек?",
    options: [
      "Өз қалауың бойынша",
      "Мұғалімнің нұсқауы мен қауіпсіздік ережелеріне сәйкес",
      "Дәмін татып көріп",
      "Иіскеп тексеріп",
    ],
    correct: 1,
  },
  {
    question: "Зертханада қорғаныш көзілдірігі не үшін қажет?",
    options: [
      "Әдемі көріну үшін",
      "Көзді қорғау үшін",
      "Жарықты күшейту үшін",
      "Тәжірибені тездету үшін",
    ],
    correct: 1,
  },
  {
    question: "Белгісіз химиялық затқа қатысты дұрыс әрекет қандай?",
    options: [
      "Оны дәмін татып көру",
      "Оны қолмен ұстап көру",
      "Мұғалімнің нұсқауын күту",
      "Досыңа беру",
    ],
    correct: 2,
  },
  {
    question: "Зертханада төтенше жағдай болса, не істеу керек?",
    options: [
      "Жасырынып қалу",
      "Өз бетіңше мәселені жасыру",
      "Дереу мұғалімге хабарлау",
      "Зертханадан ешкімге айтпай шығу",
    ],
    correct: 2,
  },
];

const situations = [
  {
    title: "🧪 Жағдай 1",
    text: "Оқушы белгісіз ерітіндіні дәмін татып көргісі келді.",
    answer: "Бұл әрекет қауіпті. Белгісіз химиялық заттарды дәмін татуға болмайды.",
  },
  {
    title: "🔥 Жағдай 2",
    text: "Оқушы тәжірибе кезінде мұғалімнің нұсқауынсыз құралды қолданды.",
    answer: "Дұрыс емес. Зертханалық құралдарды нұсқаулыққа сәйкес және мұғалімнің бақылауымен қолдану керек.",
  },
  {
    title: "🥽 Жағдай 3",
    text: "Оқушы химиялық тәжірибе кезінде қорғаныш көзілдірігін киді.",
    answer: "Бұл дұрыс әрекет. Қорғаныш құралдары қауіпсіздікті сақтауға көмектеседі.",
  },
];

export default function HimiyaZertkhanaPage() {
  const [section, setSection] = useState("theory");

  const [situationIndex, setSituationIndex] = useState(0);
  const [showSituationAnswer, setShowSituationAnswer] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function selectAnswer(index: number) {
    if (selected !== null) return;

    setSelected(index);

    if (index === questions[questionIndex].correct) {
      setScore((old) => old + 1);
    }
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex((old) => old + 1);
    setSelected(null);
  }

  function restartTest() {
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-600 via-amber-600 to-blue-700">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <a
            href="/lessons/chemistry/7-abdrahmanova"
            className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur hover:bg-white/20"
          >
            ← Оқулыққа қайту
          </a>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center">
            <div className="text-white">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                🧪 7-СЫНЫП · 1-БӨЛІМ
              </div>

              <h1 className="mt-5 text-4xl font-black md:text-6xl">
                Химиялық зертханадағы қауіпсіздік
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-50">
                Химия зертханасында қауіпсіз жұмыс істеудің
                негізгі ережелерін үйрен.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  🛡️ Қауіпсіздік
                </span>

                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  ⏱️ 10 минут
                </span>

                <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                  🏆 +10 ұпай
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-60 w-48 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <div className="text-8xl">🥽</div>

                <div className="absolute -right-4 top-8 rounded-2xl bg-white px-4 py-3 text-2xl shadow-xl">
                  🧪
                </div>

                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 text-2xl shadow-xl">
                  🛡️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAV */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 py-4">
            {[
              ["theory", "📖", "Теория"],
              ["practice", "🔬", "Практика"],
              ["test", "📝", "Тест"],
            ].map(([id, icon, title]) => (
              <button
                key={id}
                onClick={() => setSection(id)}
                className={`rounded-2xl p-4 text-left font-black transition ${
                  section === id
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-slate-50 text-slate-700 hover:bg-orange-50"
                }`}
              >
                <div className="text-2xl">{icon}</div>
                <div className="mt-2">{title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THEORY */}
      {section === "theory" && (
        <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-orange-600">
                  01 · Негізгі ереже
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Қауіпсіздік — бірінші орында
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Химиялық зертханада кез келген тәжірибені
                  орындамас бұрын қауіпсіздік ережелерін білу
                  және сақтау қажет.
                </p>

                <div className="mt-8 rounded-3xl bg-orange-50 p-6">
                  <div className="text-4xl">🛡️</div>

                  <h3 className="mt-3 text-xl font-black">
                    Есте сақта!
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Зертханада тәжірибені тек нұсқаулыққа сәйкес
                    және мұғалімнің бақылауымен орында.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-blue-600">
                  02 · Негізгі қауіпсіздік ережелері
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    [
                      "🥽",
                      "Қорғаныш құралдарын қолдан",
                      "Қажет жағдайда қорғаныш көзілдірігін, қолғапты және халатты пайдалан.",
                    ],
                    [
                      "🧪",
                      "Заттарды рұқсатсыз ұстама",
                      "Белгісіз немесе қауіпті заттарды өз бетіңше қолдануға болмайды.",
                    ],
                    [
                      "👃",
                      "Химиялық заттарды тікелей иіскеме",
                      "Заттың иісін тек мұғалім көрсеткен қауіпсіз әдіспен анықтау керек.",
                    ],
                    [
                      "🚫",
                      "Заттарды дәмін татпа",
                      "Зертханадағы химиялық заттардың ешқайсысын дәмін татып көруге болмайды.",
                    ],
                    [
                      "👩‍🏫",
                      "Нұсқауды орында",
                      "Тәжірибені бастамас бұрын мұғалімнің түсіндірмесін мұқият тыңда.",
                    ],
                    [
                      "📢",
                      "Төтенше жағдайды хабарла",
                      "Төгілсе, сынса немесе басқа жағдай болса, бірден мұғалімге айт.",
                    ],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-2xl bg-slate-50 p-5"
                    >
                      <div className="text-3xl">{icon}</div>

                      <div>
                        <h3 className="font-black">
                          {title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8">
                <div className="text-4xl">⚠️</div>

                <h2 className="mt-3 text-2xl font-black">
                  Ең маңыздысы
                </h2>

                <p className="mt-3 leading-7 text-slate-700">
                  Қауіпті жағдай туындаса, оны жасыруға болмайды.
                  Бірден мұғалімге немесе зертхана жетекшісіне
                  хабарлау қажет.
                </p>
              </div>
            </div>

            <aside>
              <div className="sticky top-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-4xl">🧠</div>

                <h3 className="mt-4 text-xl font-black">
                  Есте сақта!
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>✅ Мұғалімнің нұсқауын тыңда</li>
                  <li>✅ Қорғаныш құралдарын пайдалан</li>
                  <li>✅ Химиялық заттарды рұқсатсыз ұстама</li>
                  <li>✅ Заттарды дәмін татпа</li>
                  <li>✅ Қауіпті жағдайды бірден хабарла</li>
                </ul>

                <button
                  onClick={() => setSection("practice")}
                  className="mt-6 w-full rounded-2xl bg-orange-600 px-5 py-3 font-black text-white transition hover:bg-orange-700"
                >
                  Практикаға өту →
                </button>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* PRACTICE */}
      {section === "practice" && (
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase text-emerald-600">
              🔬 Практика
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Қауіпсіз әрекетті анықта
            </h2>

            <div className="mt-8 rounded-3xl bg-emerald-50 p-6">
              <div className="text-sm font-black text-emerald-700">
                {situationIndex + 1} / {situations.length}
              </div>

              <h3 className="mt-3 text-xl font-black">
                {situations[situationIndex].title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                {situations[situationIndex].text}
              </p>
            </div>

            {!showSituationAnswer ? (
              <button
                onClick={() => setShowSituationAnswer(true)}
                className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-black text-white hover:bg-emerald-700"
              >
                Дұрыс әрекетті көрсету
              </button>
            ) : (
              <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-black text-emerald-700">
                  Түсіндірме:
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  {situations[situationIndex].answer}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3">
              <button
                disabled={situationIndex === 0}
                onClick={() => {
                  setSituationIndex((old) => old - 1);
                  setShowSituationAnswer(false);
                }}
                className="rounded-2xl border border-slate-200 px-5 py-3 font-bold disabled:opacity-40"
              >
                ← Алдыңғы
              </button>

              {situationIndex < situations.length - 1 ? (
                <button
                  onClick={() => {
                    setSituationIndex((old) => old + 1);
                    setShowSituationAnswer(false);
                  }}
                  className="rounded-2xl bg-emerald-600 px-5 py-3 font-black text-white"
                >
                  Келесі →
                </button>
              ) : (
                <button
                  onClick={() => setSection("test")}
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
      {section === "test" && (
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          {!finished ? (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase text-purple-600">
                    📝 Тест
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    Қауіпсіздік ережелерін тексер
                  </h2>
                </div>

                <div className="rounded-xl bg-purple-50 px-4 py-2 text-sm font-black text-purple-600">
                  {questionIndex + 1} / {questions.length}
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-purple-600 transition-all"
                  style={{
                    width: `${
                      ((questionIndex + 1) / questions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="mt-8 rounded-3xl bg-purple-50 p-6">
                <h3 className="text-xl font-black leading-8">
                  {questions[questionIndex].question}
                </h3>

                <div className="mt-6 space-y-3">
                  {questions[questionIndex].options.map(
                    (option, index) => {
                      const correct =
                        index === questions[questionIndex].correct;

                      const chosen = selected === index;

                      let style =
                        "border-slate-200 bg-white hover:border-purple-300";

                      if (selected !== null) {
                        if (correct) {
                          style =
                            "border-emerald-400 bg-emerald-50";
                        } else if (chosen) {
                          style =
                            "border-red-400 bg-red-50";
                        }
                      }

                      return (
                        <button
                          key={option}
                          onClick={() => selectAnswer(index)}
                          className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left font-semibold transition ${style}`}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-black">
                            {String.fromCharCode(65 + index)}
                          </span>

                          <span className="flex-1">
                            {option}
                          </span>

                          {selected !== null && correct && (
                            <span>✅</span>
                          )}

                          {selected !== null &&
                            chosen &&
                            !correct && <span>❌</span>}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {selected !== null && (
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900 p-5 text-white">
                  <div>
                    <p className="font-black">
                      {selected === questions[questionIndex].correct
                        ? "Дұрыс жауап! 🎉"
                        : "Қате жауап."}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {selected === questions[questionIndex].correct
                        ? "+1 ұпай"
                        : "Келесі сұраққа өт."}
                    </p>
                  </div>

                  <button
                    onClick={nextQuestion}
                    className="rounded-xl bg-white px-5 py-3 font-black text-slate-900"
                  >
                    {questionIndex === questions.length - 1
                      ? "Нәтиже"
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

              <h2 className="mt-2 text-4xl font-black">
                Нәтижең
              </h2>

              <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full bg-purple-50">
                <div>
                  <div className="text-4xl font-black text-purple-600">
                    {score}/{questions.length}
                  </div>

                  <div className="text-sm font-bold text-slate-400">
                    ұпай
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {score === questions.length
                  ? "Керемет! Қауіпсіздік ережелерін өте жақсы меңгердің! 🎉"
                  : score >= 3
                    ? "Жақсы! Қате кеткен сұрақтарды қайта қарап шық."
                    : "Теорияны қайта қарап, тестті тағы бір рет орындап көр."}
              </p>

              <button
                onClick={restartTest}
                className="mt-8 rounded-2xl bg-purple-600 px-6 py-3 font-black text-white"
              >
                🔄 Қайта тапсыру
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}