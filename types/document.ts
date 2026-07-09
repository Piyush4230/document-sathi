export interface Document {
  slug: string;
  title: string;
  description: string;

  eligibility: string[];
  requiredDocuments: string[];
  steps: string[];

  processingTime: string;
  fees: string;
  officialWebsite: string;
}