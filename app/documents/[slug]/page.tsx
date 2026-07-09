import { getDocumentBySlug } from "@/lib/documents";
import DocumentSidebar from "@/components/document/DocumentSidebar";
import FAQ from "@/components/document/FAQ";
import Breadcrumb from "@/components/document/Breadcrumb";
import RelatedDocuments from "@/components/document/RelatedDocuments";
import DownloadButton from "@/components/document/DownloadButton";
import CommonMistakes from "@/components/document/CommonMistakes";
import BookmarkButton from "@/components/bookmark/BookmarkButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;

  const doc = getDocumentBySlug(slug);

  if (!doc) {
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
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <DocumentSidebar />

        <div>

          <Breadcrumb title={doc.title} />
          {/* Overview */}
          <section id="overview">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <div>
    <h1 className="text-5xl font-bold text-slate-900">
      {doc.title}
    </h1>

    <p className="mt-4 text-lg text-slate-600">
      {doc.description}
    </p>
  </div>

  <BookmarkButton slug={doc.slug} />
</div>

            {/* Quick Info Cards */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  Processing Time
                </p>
                <p className="mt-2 text-xl font-bold">
                  {doc.processingTime}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  Application Fee
                </p>
                <p className="mt-2 text-xl font-bold">
                  {doc.fees}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  Mode
                </p>
                <p className="mt-2 text-xl font-bold">
                  Online / Offline
                </p>
              </div>
            </div>
          </section>
<div className="mt-8">
            <DownloadButton doc={doc} />
          </div>
          {/* Eligibility */}
          <section id="eligibility" className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">
              ✅ Eligibility
            </h2>

            <ul className="space-y-3">
              {doc.eligibility.map((item) => (
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
          <section id="documents" className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">
              📋 Required Documents
            </h2>

            <ul className="space-y-3">
              {doc.requiredDocuments.map((item) => (
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
          <section id="steps" className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">
              📝 Step-by-Step Process
            </h2>

            <ol className="space-y-4">
              {doc.steps.map((step, index) => (
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

          {/* Information */}
          <section
            id="info"
            className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-md"
          >
            <p>
              <strong>⏳ Processing Time:</strong> {doc.processingTime}
            </p>

            <p className="mt-3">
              <strong>💰 Fees:</strong> {doc.fees}
            </p>

            <a
              href={doc.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Visit Official Website
            </a>
          </section>
          <FAQ faqs={doc.faq} />
          <CommonMistakes mistakes={doc.commonMistakes} />
          <RelatedDocuments related={doc.relatedDocuments} />
        </div>
      </div>
    </main>
  );
}