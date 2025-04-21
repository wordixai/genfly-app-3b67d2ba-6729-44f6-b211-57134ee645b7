import { CodeGenerationForm } from "@/components/CodeGenerationForm";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <CodeGenerationForm />
      </div>
    </main>
  );
}