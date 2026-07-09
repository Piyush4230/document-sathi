import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-8 flex w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <input
        type="text"
        placeholder="Search Aadhaar, PAN, Passport..."
        className="flex-1 px-6 py-5 text-base outline-none"
      />

      <button className="bg-blue-600 px-10 font-semibold text-white transition-all duration-200 hover:bg-blue-700">
        🔍 Search
      </button>
    </div>
  );
}