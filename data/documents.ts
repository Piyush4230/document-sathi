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
    "PAN (Permanent Account Number) is a unique 10-character alphanumeric identification issued by the Income Tax Department of India.",

  eligibility: [
    "Any Indian citizen or resident",
    "Individuals above or below 18 years can apply",
    "Companies, firms, and trusts are also eligible",
  ],

  requiredDocuments: [
    "Proof of Identity (Aadhaar Card, Voter ID, etc.)",
    "Proof of Address",
    "Date of Birth Proof",
    "Passport-size Photograph",
  ],

  steps: [
    "Visit the NSDL or UTIITSL PAN application portal.",
    "Fill out the PAN application form.",
    "Upload the required documents.",
    "Pay the application fee.",
    "Submit the application.",
    "Track your application status online.",
    "Receive your PAN Card by post or download e-PAN.",
  ],

  processingTime: "10–15 Days",

  fees: "₹107 (for Indian address)",

  officialWebsite: "https://www.incometax.gov.in",
},
  {
  slug: "passport",
  title: "Passport",
  description:
    "Passport is an official travel document issued by the Government of India.",

  eligibility: [
    "Must be an Indian citizen",
    "Valid proof of identity",
    "Valid proof of address",
  ],

  requiredDocuments: [
    "Aadhaar Card",
    "PAN Card (optional)",
    "Address Proof",
    "Birth Certificate (if required)",
  ],

  steps: [
    "Register on Passport Seva Portal.",
    "Fill the application form.",
    "Pay the application fee.",
    "Book an appointment at Passport Seva Kendra.",
    "Visit PSK with original documents.",
    "Complete police verification.",
    "Receive passport by post.",
  ],

  processingTime: "15–30 Days",
  fees: "Depends on passport type",
  officialWebsite: "https://passportindia.gov.in",
},
];