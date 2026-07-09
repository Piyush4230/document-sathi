export interface Document {
  slug: string;
  title: string;
  description: string;

category: string; 

  eligibility: string[];
  requiredDocuments: string[];
  steps: string[];

  faq: {
    question: string;
    answer: string;
  }[];

  relatedDocuments: string[];

  commonMistakes: string[];

  processingTime: string;
  fees: string;
  officialWebsite: string;
}