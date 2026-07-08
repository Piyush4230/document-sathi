import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-8 flex w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search for documents like Aadhaar, PAN, Passport..."
        className="flex-1 px-5 py-4 text-sm outline-none"
      />

      <button className="flex items-center gap-2 bg-blue-600 px-6 text-white transition hover:bg-blue-700">
        <Search size={18} />
        Search
      </button>
    </div>
  );
}