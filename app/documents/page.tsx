import Link from "next/link";
import { getAllDocuments } from "@/lib/documents";
import { documents } from "@/data/documents";

export default function DocumentsPage() {
    const documents = getAllDocuments();
  const categories = [...new Set(documents.map((doc) => doc.category))];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        All Documents
      </h1>

      <p className="mt-4 text-slate-600">
        Browse government documents by category.
      </p>

      {categories.map((category) => (
        <section key={category} className="mt-14">
          <h2 className="mb-6 text-3xl font-bold">
            {category}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents
              .filter((doc) => doc.category === category)
              .map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/documents/${doc.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">
                    {doc.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {doc.description}
                  </p>

                  <p className="mt-5 font-semibold text-blue-600">
                    View Guide →
                  </p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}