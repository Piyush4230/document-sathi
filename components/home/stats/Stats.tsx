import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              {item.number}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}