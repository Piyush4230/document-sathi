"use client";

import { Document } from "@/types/document";
import { generatePdf } from "@/lib/generatePdf";

type Props = {
  doc: Document;
};

export default function DownloadButton({ doc }: Props) {
  return (
    <button
      onClick={() => generatePdf(doc)}
      className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      📥 Download Checklist (PDF)
    </button>
  );
}