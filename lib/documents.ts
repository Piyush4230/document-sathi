import { documents } from "@/data/documents";

export function getAllDocuments() {
  return documents;
}

export function getDocumentBySlug(slug: string) {
  return documents.find((doc) => doc.slug === slug);
}