// import { CategoryGrid } from '@/app/components/shared/category-section'
// import { FeaturedContent } from '@/app/components/shared/feature-section'
import { Footer } from '@/app/components/shared/footer'
import { HeroSection } from '@/app/components/shared/hero-section'
import Chatbot from '@/app/components/chatbot'
import { auth } from '@clerk/nextjs/server'
import React from 'react'
import ArticleSection from './components/articles/article-section'
import CategoryStatsSection from './components/shared/category-stats-section'
import RecentArticlesSection from './components/articles/recent-articles-section'
import HomeNavigation from './utils/nav/homeNavigation'

export default async function Home() {
    const { userId } = await auth()
    const href = userId ? '/dashboard' : '/sign-up'
    // const href = userId ? '/onboarding' : '/sign-up'
    return (
        <div className="min-h-screen flex flex-col ">


            {/* <HomeNavigation/> */}
            <HomeNavigation />

            <main className="flex-grow">

                {/* TODO: update the hero section */}
                <HeroSection href={href} />
                {/* featured articles */}
                <ArticleSection />
                {/* categories */}
                <CategoryStatsSection />
                {/* recent articles */}
                <RecentArticlesSection />

                {/* footer */}
                <Footer />
                <Chatbot />
            </main>
        </div>
    )
}
