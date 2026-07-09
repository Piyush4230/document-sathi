type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQItem[];
};

export default function FAQ({ faqs }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer font-semibold">
              {faq.question}
            </summary>

            <p className="mt-3 text-slate-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}