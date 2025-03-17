
import HomeNavigation from '@/app/utils/nav/homeNavigation'
import React from 'react'

export default function ContributionPage() {
  return (

    <div className='flex flex-col min-h-screen'>
<HomeNavigation/>
      <main className='flex-grow py-16 container px-4 mx-auto'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-10 text-center'>
            <h1>Contribute Knowledge</h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Share your expertise and research with our community. Your contribution helps expand our collective Knowledge base.
            </p>

          </div>

        </div>


        </main>
    </div>
  )
}
