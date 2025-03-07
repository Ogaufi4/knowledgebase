/*
  Warnings:

  - You are about to drop the `UserOnboarding` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnboarding" DROP CONSTRAINT "UserOnboarding_userId_fkey";

-- DropTable
DROP TABLE "UserOnboarding";

-- CreateTable
CREATE TABLE "onboarding" (
    "id" TEXT NOT NULL,
    "researchPurpose" TEXT,
    "organization" TEXT,
    "interests" TEXT[],
    "termsAccepted" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onboarding_userId_key" ON "onboarding"("userId");

-- AddForeignKey
ALTER TABLE "onboarding" ADD CONSTRAINT "onboarding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
