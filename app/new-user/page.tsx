"use client"
import { PageHeader } from "@/app/components/shared/page-header";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { OnboardingModal } from "@/app/components/onboading/OnboardingModal";

export default function NewUserPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (

    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <h1 className="mb-8 font-bold text-4xl">Welcome to Our Knowledge Base Platform</h1>
    <Button onClick={()=>setIsModalOpen(true)}>Start Onboarding</Button>
    <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userEmail="user@university.edu" // Example email for demonstration: To remove later
      />
  </main>
    );
  }
