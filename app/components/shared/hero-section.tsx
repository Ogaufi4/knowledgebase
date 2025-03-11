'use client'

import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { heroData } from '@/lib/hero_data'

export function HeroSection() {
    return (
        <div className="relative isolate -mt-40 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Botswana landscape"
                    className="h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pb-32 lg:flex lg:px-8 lg:py-48">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="relative">
                        <div className="absolute -top-4 left-1 h-24 w-24">
                            <div className="absolute inset-0 -z-10 overflow-hidden rounded-full bg-primary/10" />
                        </div>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                        {heroData.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {heroData.description}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        {heroData.buttons.map((button, index) => (
                            <Button key={index} asChild value={'outline'}>
                                <Link href={button.link}>{button.label}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="relative top-0 z-50 w-full image-container">
                    <img
                        className="rounded-full object-cover -top-6 -right-10  absolute h-[500px] w-[500px]"
                        src="https://images.unsplash.com/photo-1531208853003-c1ec1b8a81d7?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <img
                        className="rounded-full object-cover top-[30%] left-10  absolute h-[400px] w-[400px] border-t-8  border-r-8 "
                        // src="https://images.unsplash.com/photo-1531208853003-c1ec1b8a81d7?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        src="https://images.unsplash.com/photo-1455669175216-9017c9b02fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENob2JlJTIwYmFza2V0fGVufDB8fDB8fHww"
                        alt=""
                    />
                </div>
                {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="w-full flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Botswana cultural artifacts"
              className="w-[76rem] rounded-md bg-gray-900/0 shadow-2xl ring-1 ring-gray-900/5"
            />
          </div>
        </div> */}
            </div>
        </div>
    )
}
