import Link from "next/link";
import { FileText } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-md">
        <FileText className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          DocumentSathi
        </h1>
        <p className="-mt-1 text-xs text-slate-500">
          Government Document Guide
        </p>
      </div>
    </Link>
  );
}