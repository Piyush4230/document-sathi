import Link from "next/link";

const categories = [
  {
    title: "Identity",
    icon: "🪪",
    documents: 8,
  },
  {
    title: "Finance",
    icon: "💰",
    documents: 5,
  },
  {
    title: "Travel",
    icon: "✈️",
    documents: 3,
  },
  {
    title: "Transport",
    icon: "🚗",
    documents: 4,
  },
  {
    title: "Education",
    icon: "🎓",
    documents: 6,
  },
  {
    title: "Certificates",
    icon: "📄",
    documents: 7,
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Browse by Category
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Find government documents organized by category.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/documents"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {category.documents} Documents
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}