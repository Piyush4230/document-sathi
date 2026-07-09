"use client";

import { useState } from "react";

const links = [
  { id: "overview", label: "📄 Overview" },
  { id: "eligibility", label: "✅ Eligibility" },
  { id: "documents", label: "📋 Required Documents" },
  { id: "steps", label: "📝 Steps" },
  { id: "info", label: "💰 Information" },
];

export default function DocumentSidebar() {
  const [active, setActive] = useState("overview");

  return (
    <aside className="sticky top-24 hidden h-fit w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:block">
      <h2 className="mb-4 text-lg font-bold">
        Quick Navigation
      </h2>

      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`block rounded-lg px-3 py-2 transition ${
              active === link.id
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}