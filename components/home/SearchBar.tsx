"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { documents } from "@/data/documents";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    return documents.filter((doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSearch = () => {
    const slug = query.trim().toLowerCase();

    if (!slug) return;

    router.push(`/documents/${slug}`);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex">
        <input
          type="text"
          placeholder="Search Aadhaar, PAN, Passport..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="w-full rounded-l-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 rounded-r-xl bg-blue-600 px-6 text-white hover:bg-blue-700"
        >
          <Search size={18} />
          Search
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-lg">
          {suggestions.map((doc) => (
            <button
              key={doc.slug}
              onClick={() => router.push(`/documents/${doc.slug}`)}
              className="block w-full px-4 py-3 text-left hover:bg-slate-100"
            >
              {doc.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}