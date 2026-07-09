import { popularDocuments } from "@/data/popularDocuments";

export default function PopularDocuments() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-2 text-4xl font-bold text-slate-900">
        Popular Documents
      </h2>

      <p className="mb-10 text-slate-600">
        Start with the most commonly used government documents.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {popularDocuments.map((document) => (
          <div
            key={document.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 text-5xl">{document.icon}</div>

            <h3 className="mb-2 text-xl font-semibold">
              {document.title}
            </h3>

            <p className="text-sm text-slate-600">
              {document.description}
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}