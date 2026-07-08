import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PopularDocuments from "@/components/home/PopularDocuments";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <PopularDocuments />
      <Features />
    </main>
  );
}