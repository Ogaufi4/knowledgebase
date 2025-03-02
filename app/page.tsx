import { CategoryGrid } from "@/app/components/shared/category-section";
import { FeaturedContent } from "@/app/components/shared/feature-section";
import { Footer } from "@/app/components/shared/footer";
import { HeroSection } from "@/app/components/shared/hero-section";
import Chatbot from "@/app/components/chatbot";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow">
        <HeroSection />
        
        <CategoryGrid />
        <Footer />
        <Chatbot/>
      </main>
    </div>
  );
}