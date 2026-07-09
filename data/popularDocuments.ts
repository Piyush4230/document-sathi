import {
  CreditCard,
  IdCard,
  Car,
  BookOpen,
} from "lucide-react";

export const popularDocuments = [
  {
    title: "Aadhaar Card",
    slug: "aadhaar",
    category: "Identity",
    description: "Apply, update and download Aadhaar.",
    icon: IdCard,
  },
  {
    title: "PAN Card",
    slug: "pan",
    category: "Finance",
    description: "New PAN and correction services.",
    icon: CreditCard,
  },
  {
    title: "Passport",
    slug: "passport",
    category: "Travel",
    description: "Fresh passport and renewal guide.",
    icon: BookOpen,
  },
  {
    title: "Driving Licence",
    slug: "driving-licence",
    category: "Transport",
    description: "Apply, renew or update licence.",
    icon: Car,
  },
];