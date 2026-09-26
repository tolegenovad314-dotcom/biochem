export default function Chemistry() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
        >
          ← Басты бет
        </a>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-5xl">
              🧪
            </div>

            <p className="mt-6 font-semibold text-blue-600">
              BIOCHEM • ХИМИЯ
            </p>

            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Химия әлеміне қош келдің!
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Атомдардан бастап химиялық реакцияларға дейінгі
              тақырыптарды интерактивті түрде үйрен.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="font-semibold text-blue-600">ТАҚЫРЫПТАР</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Химияны зерттеуді баста
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="/lessons/atom"
              className="group rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
                ⚛️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Атом құрылысы
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Атом, ядро, протон, нейтрон және электрондардың
                құрылысын үйрен.
              </p>

              <div className="mt-6 font-bold text-blue-600">
                Сабақты бастау →
              </div>
            </a>

            <a
              href="/chemistry/bond"
              className="group rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl">
                🔗
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Химиялық байланыс
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Иондық және коваленттік байланыстардың қалай
                түзілетінін түсін.
              </p>

              <div className="mt-6 font-bold text-green-600">
                Сабақты бастау →
              </div>
            </a>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-4xl">
                ⚗️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Химиялық реакциялар
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Реакциялардың негізгі түрлерін және теңестіру
                принциптерін үйрен.
              </p>

              <div className="mt-6 font-bold text-purple-600">
                Жақында →
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
            <div className="text-4xl">🔬</div>

            <h2 className="mt-4 text-2xl font-bold">
              Виртуалды зертхана
            </h2>

            <p className="mt-3 leading-7 text-blue-100">
              Қауіпсіз ортада химиялық тәжірибелерді модельдеп көр.
            </p>

            <a
              href="/lab"
              className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50"
            >
              Зертханаға өту
            </a>
          </div>

          <div className="rounded-3xl bg-gray-900 p-8 text-white shadow-xl">
            <div className="text-4xl">📝</div>

            <h2 className="mt-4 text-2xl font-bold">
              Біліміңді тексер
            </h2>

            <p className="mt-3 leading-7 text-gray-300">
              Химия бойынша тест орындап, өз біліміңді тексер.
            </p>

            <a
              href="/tests"
              className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-100"
            >
              Тестке өту
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}