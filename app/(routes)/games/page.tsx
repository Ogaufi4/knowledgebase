"use client"
import Container from '@/app/components/shared/games/container'
import React from 'react'
import { Button } from '@/app/components/ui/button'
import { ArrowLeft,  } from 'lucide-react'

import Link from 'next/link';

export default function Games() {


    return (
        <div>
            <div className="p-3 flex-">
            <Button asChild variant="link" className="mt-4 sm:mt-0">
              <Link href="/" className="flex items-center">
              <ArrowLeft className="ml-2 h-4 w-4 " />
              Back
              </Link>
            </Button>
                <Container />
            </div>
        </div>
    )
}
