import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DocumentSathi
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="rounded-md border px-3 py-2 text-sm">
            English
          </button>

          <button className="text-xl">
            🌙
          </button>
        </div>

      </div>
    </header>
  );
}