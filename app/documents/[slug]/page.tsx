import { documents } from "@/data/documents";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;

  const document = documents.find((doc) => doc.slug === slug);

  if (!document) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold text-red-600">
          Document Not Found
        </h1>

        <p className="mt-4 text-slate-600">
          The requested document does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-5xl font-bold text-slate-900">
        {document.title}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        {document.description}
      </p>

      {/* Eligibility */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          ✅ Eligibility
        </h2>

        <ul className="space-y-3">
          {document.eligibility?.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Required Documents */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          📋 Required Documents
        </h2>

        <ul className="space-y-3">
          {document.requiredDocuments?.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          📝 Step-by-Step Process
        </h2>

        <ol className="space-y-4">
          {document.steps?.map((step, index) => (
            <li
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="font-semibold">
                Step {index + 1}:
              </span>{" "}
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Information Card */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
        <p>
          <strong>⏳ Processing Time:</strong> {document.processingTime}
        </p>

        <p className="mt-3">
          <strong>💰 Fees:</strong> {document.fees}
        </p>

        <a
          href={document.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Visit Official Website
        </a>
      </section>
    </main>
  );
}