import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            🇮🇳 Your Digital Guide to Every Important Document
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900">
            Documents Made Easy,
          </h1>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight text-blue-600">
            Steps Made Simple.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Get step-by-step guidance for Aadhaar, PAN, Passport, Driving Licence,
            Voter ID and many more government documents.
          </p>

          <SearchBar />
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl bg-blue-100 text-8xl shadow-lg">
            📄
          </div>
        </div>

      </div>
    </section>
  );
}