
import { Footer } from "./components/shared/footer";
import { HeroSection } from "./components/shared/hero-section";

import { auth } from '@clerk/nextjs/server'
export default async function Home() {
    const { userId } = await auth()
    const href = userId ? '/onboarding' : '/sign-up'
    return (
        <div className="min-h-screen flex flex-col ">
            <div className="flex-grow">
                {/* <HomeNavigation/> */}
                <HeroSection href={href}/>
                <Footer/>

            </div>
        </div>
    )
}
