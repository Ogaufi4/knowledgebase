
import { CategoryGrid } from "@/app/components/shared/category-section";
import { FeaturedContent } from "@/app/components/shared/feature-section";
import { Footer } from "@/app/components/shared/footer";
import { HeroSection } from "@/app/components/shared/hero-section";
import Chatbot from "@/app/components/chatbot";
import { auth } from '@clerk/nextjs/server';
import React from "react";


export default async function Home() {
    const { userId } = await auth()
    const href = userId ? '/dashboard' : '/sign-up'
    // const href = userId ? '/onboarding' : '/sign-up'
    return (
        <div className="min-h-screen flex flex-col ">
            <div className="flex-grow">
                {/* <HomeNavigation/> */}
                
                <HeroSection href={href}/>

        <CategoryGrid />
        <Footer />
        <Chatbot/>
      </div>
    </div>
  );
}