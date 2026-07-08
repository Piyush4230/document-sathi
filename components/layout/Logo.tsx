import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-md">
        📄
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">
          DocumentSathi
        </h1>

        <p className="text-xs text-slate-500">
          Your Digital Document Guide
        </p>
      </div>
    </Link>
  );
}