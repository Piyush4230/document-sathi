type Props = {
  mistakes: string[];
};

export default function CommonMistakes({ mistakes }: Props) {
  if (mistakes.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        ⚠️ Common Mistakes to Avoid
      </h2>

      <div className="space-y-4">
        {mistakes.map((mistake, index) => (
          <div
            key={index}
            className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4"
          >
            {mistake}
          </div>
        ))}
      </div>
    </section>
  );
}