import { jsPDF } from "jspdf";
import { Document } from "@/types/document";

export function generatePdf(doc: Document) {
  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(22);
  pdf.text(doc.title, 20, y);

  y += 12;

  pdf.setFontSize(12);
  pdf.text(doc.description, 20, y);

  y += 18;

  pdf.setFontSize(16);
  pdf.text("Eligibility", 20, y);

  y += 8;

  doc.eligibility.forEach((item) => {
    pdf.text("• " + item, 25, y);
    y += 7;
  });

  y += 8;

  pdf.setFontSize(16);
  pdf.text("Required Documents", 20, y);

  y += 8;

  doc.requiredDocuments.forEach((item) => {
    pdf.text("• " + item, 25, y);
    y += 7;
  });

  y += 8;

  pdf.setFontSize(16);
  pdf.text("Processing Time", 20, y);

  y += 8;

  pdf.text(doc.processingTime, 25, y);

  y += 12;

  pdf.text("Fees: " + doc.fees, 20, y);

  y += 12;

  pdf.text("Official Website:", 20, y);

  y += 8;

  pdf.text(doc.officialWebsite, 20, y);

  pdf.save(`${doc.slug}-checklist.pdf`);
}