import { Document } from "@/types/document";
export const documents: Document[] = [
  {
  slug: "aadhaar",
  title: "Aadhaar Card",
  description:
    "Aadhaar is a 12-digit unique identification number issued by UIDAI.",

  eligibility: [
    "Any resident of India",
    "No minimum age",
    "Valid identity proof",
  ],

  requiredDocuments: [
    "Proof of Identity",
    "Proof of Address",
    "Date of Birth Proof",
  ],

  steps: [
    "Visit the nearest Aadhaar Enrollment Centre.",
    "Submit your documents.",
    "Complete biometric verification.",
    "Receive acknowledgement slip.",
    "Download Aadhaar after approval.",
  ],

  processingTime: "7–30 Days",

  fees: "Free / ₹50 for updates",

  officialWebsite: "https://uidai.gov.in",
},
  {
    slug: "pan",
    title: "PAN Card",
    description:
      "PAN is a Permanent Account Number issued by the Income Tax Department.",
    
      eligibility: [],
requiredDocuments: [],
steps: [],

      processingTime: "10–15 Days",
    fees: "₹107",
    officialWebsite: "https://www.incometax.gov.in",
  },
  {
    slug: "passport",
    title: "Passport",
    description:
      "Passport is an official travel document issued by the Government of India.",
    
      eligibility: [],
requiredDocuments: [],
steps: [],

      processingTime: "15–30 Days",
    fees: "Depends on passport type",
    officialWebsite: "https://passportindia.gov.in",
  },
];