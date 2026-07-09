import Link from "next/link";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-8 text-sm text-slate-500">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>

      <span className="mx-2">›</span>

      <span>Documents</span>

      <span className="mx-2">›</span>

      <span className="font-medium text-slate-900">
        {title}
      </span>
    </nav>
  );
}