import Link from "next/link";
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
          <Link
            key={document.title}
            href={`/documents/${document.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <document.icon className="h-7 w-7 text-blue-600" />
            </div>

            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {document.category}
            </span>

            <h3 className="mt-4 mb-2 text-xl font-semibold">
              {document.title}
            </h3>

            <p className="text-sm text-slate-600">
              {document.description}
            </p>

            <div className="mt-6 font-semibold text-blue-600 transition group-hover:translate-x-1">
              View Guide →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}