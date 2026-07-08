const features = [
  {
    title: "Step-by-Step Guides",
    description: "Simple instructions for every government document.",
  },
  {
    title: "Official Links",
    description: "Direct links to official government websites.",
  },
  {
    title: "Bilingual Support",
    description: "Available in both English and Hindi.",
  },
  {
    title: "AI Assistant",
    description: "Ask questions and get instant document guidance.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose DocumentSathi?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">⭐</div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}