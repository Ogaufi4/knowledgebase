import ArticleCard from '@/app/components/articles/article-card'
import { Button } from '@/app/components/ui/button'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/app/components/ui/tabs'
import { featuredArticles } from '@/app/utils/mock/articles'
import HomeNavigation from '@/app/utils/nav/homeNavigation'
import { ArrowRight, BarChart, FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Analytics() {
    return (
        <div className="flex flex-col min-h-screen">
            <HomeNavigation />
            <main className="flex-grow pt-28 pb-16">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div>
                            <h1 className='mb-2'>Analytics Dashboard</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Our repository trends and real time contribution
                                tracking.
                            </p>
                        </div>
                                    </div>
                        {/* Header metrics */}

                        {/* <OverViewGridAnalytics/> */}

                        <Tabs defaultValue="cahrts" className="mb-10">
                            <TabsList className="mb-6">
                                <TabsTrigger
                                    value="charts"
                                    className="flex items-center"
                                >
                                    <BarChart className="h-4 w-4 mr-2" />
                                    Chart/Analytics
                                </TabsTrigger>
                                <TabsTrigger
                                    value="recent"
                                    className="flex items-center"
                                >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Recent Submissions
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="charts">
                                <p> Charts</p>
                            </TabsContent>
                            <TabsContent value="recent" className="mt-0">
                                <p>Recent Submissions</p>
                                {/* recent submissions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {featuredArticles.map((article) => (
                                        <ArticleCard
                                            className="animate-fade-in h-full"
                                            key={article.id}
                                            {...article}
                                        />
                                    ))}
                                </div>

                                {/* view all submissions */}
                                <div className='mt-6 text-center'>
                                    <Button asChild variant='outline'>
                                        <Link href="/browse" className='flex items-center'>
                                        View all submissions <ArrowRight className='h-4 w-4 ml-2'/>
                                        </Link>
                                    </Button>

                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* charts and recent submissions */}
                </div>
            </main>
        </div>
    )
}
