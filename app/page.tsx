import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PopularDocuments from "@/components/home/PopularDocuments";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <PopularDocuments />
      <Features />
    </main>
  );
}