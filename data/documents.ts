import { Document } from "@/types/document";
export const documents: Document[] = [
  {
  slug: "aadhaar",
  title: "Aadhaar Card",
  description:
    "Aadhaar is a 12-digit unique identification number issued by UIDAI.",
category: "Identity", 
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
faq: [
  {
    question: "Can I apply for Aadhaar online?",
    answer:
      "No. You need to visit an Aadhaar Enrollment Centre for biometric verification.",
  },
  {
    question: "Is Aadhaar mandatory?",
    answer:
      "It is not mandatory for every service, but it is widely used as an identity proof in India.",
  },
  {
    question: "How long does Aadhaar take?",
    answer:
      "Usually between 7 and 30 days after successful enrollment.",
  },
],
relatedDocuments: ["pan", "passport"],


commonMistakes: [
    "Submitting incorrect or outdated documents.",
    "Not completing biometric verification.",
    "Not checking the acknowledgment slip for errors.",
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
  category: "Finance",
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
  faq:[],
  relatedDocuments: ["aadhaar", "passport"],
  commonMistakes: [
    "Submitting incorrect or outdated documents.",
    "Not completing biometric verification.",
    "Not checking the acknowledgment slip for errors.",
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
  category: "Travel",
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
  faq:[],
  relatedDocuments: ["aadhaar", "pan"],
  commonMistakes: [
    "Submitting incorrect or outdated documents.",
    "Not completing biometric verification.",
    "Not checking the acknowledgment slip for errors.",
  ],
  processingTime: "15–30 Days",
  fees: "Depends on passport type",
  officialWebsite: "https://passportindia.gov.in",
},
{
  slug: "driving-licence",
  title: "Driving Licence",
  description:
    "A Driving Licence is an official document issued by the Regional Transport Office (RTO) allowing a person to drive legally in India.",

  category: "Transport",

  eligibility: [
    "Applicant must be at least 18 years old for Light Motor Vehicles (LMV).",
    "Must hold a valid Learner's Licence.",
    "Must pass the driving test conducted by the RTO.",
  ],

  requiredDocuments: [
    "Aadhaar Card",
    "Address Proof",
    "Age Proof",
    "Learner's Licence",
    "Passport-size Photograph",
  ],

  steps: [
    "Visit the Parivahan Sewa Portal.",
    "Fill the Driving Licence application form.",
    "Upload the required documents.",
    "Pay the application fee.",
    "Book a driving test slot.",
    "Appear for the driving test.",
    "Receive your Driving Licence after approval.",
  ],

  faq: [
    {
      question: "Can I apply for a Driving Licence online?",
      answer:
        "Yes. You can apply through the Parivahan Sewa portal and complete the remaining process at the RTO.",
    },
    {
      question: "What is the minimum age for a Driving Licence?",
      answer:
        "18 years for Light Motor Vehicles (LMV).",
    },
  ],

  relatedDocuments: ["aadhaar", "pan", "passport"],

  commonMistakes: [
    "Uploading unclear documents.",
    "Entering incorrect personal details.",
    "Missing the driving test appointment.",
  ],

  processingTime: "15–30 Days",

  fees: "Varies by state",

  officialWebsite: "https://parivahan.gov.in",
}
];