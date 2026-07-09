import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("documents")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Supabase Test</h1>

      <pre className="mt-6">
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}