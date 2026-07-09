import Link from "next/link";
import { documents } from "@/data/documents";

type Props = {
  related: string[];
};

export default function RelatedDocuments({ related }: Props) {
  const items = documents.filter((doc) =>
    related.includes(doc.slug)
  );

  if (items.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        📚 Related Documents
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((doc) => (
          <Link
            key={doc.slug}
            href={`/documents/${doc.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {doc.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}