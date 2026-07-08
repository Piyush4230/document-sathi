const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Passport",
  "Driving Licence",
  "Voter ID",
  "Birth Certificate",
];

export default function PopularDocuments() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Popular Documents
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <div
            key={doc}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">📄</div>

            <h3 className="text-xl font-semibold">{doc}</h3>

            <p className="mt-2 text-sm text-slate-500">
              Step-by-step application guide.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}