export default function Biology() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-green-600 hover:underline"
        >
          ← Басты бетке
        </a>

        <div className="mt-10 text-center">
          <div className="text-6xl">🧬</div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Биология
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Тірі ағзалар әлемін бірге зерттейік!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="text-4xl">🔬</div>

            <h2 className="mt-4 text-2xl font-bold">
              Жасуша
            </h2>

            <p className="mt-3 text-gray-600">
              Жасушаның құрылысы және негізгі органоидтар.
            </p>

            <button className="mt-6 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white">
              Оқу
            </button>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="text-4xl">🧬</div>

            <h2 className="mt-4 text-2xl font-bold">
              ДНҚ
            </h2>

            <p className="mt-3 text-gray-600">
              ДНҚ құрылысы, гендер және тұқымқуалаушылық.
            </p>

            <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
              Оқу
            </button>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="text-4xl">🫀</div>

            <h2 className="mt-4 text-2xl font-bold">
              Адам ағзасы
            </h2>

            <p className="mt-3 text-gray-600">
              Адам мүшелері және мүшелер жүйесі.
            </p>

            <button className="mt-6 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white">
              Оқу
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}