export default function Stats() {
  const stats = [
    {
      number: "100+",
      label: "Government Documents",
    },
    {
      number: "50+",
      label: "Step-by-Step Guides",
    },
    {
      number: "24/7",
      label: "Available Online",
    },
    {
      number: "100%",
      label: "Free to Use",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {stat.number}
            </h2>

            <p className="mt-3 text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}