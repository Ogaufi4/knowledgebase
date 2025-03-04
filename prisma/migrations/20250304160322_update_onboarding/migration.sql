/*
  Warnings:

  - You are about to drop the `onboarding` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "onboarding" DROP CONSTRAINT "onboarding_userId_fkey";

-- DropTable
DROP TABLE "onboarding";

-- CreateTable
CREATE TABLE "onboardings" (
    "id" TEXT NOT NULL,
    "researchPurpose" TEXT,
    "organization" TEXT,
    "interests" TEXT[],
    "termsAccepted" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "onboardings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onboardings_userId_key" ON "onboardings"("userId");

-- AddForeignKey
ALTER TABLE "onboardings" ADD CONSTRAINT "onboardings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
