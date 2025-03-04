/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `onboardings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "onboardings" DROP CONSTRAINT "onboardings_userId_fkey";

-- AlterTable
ALTER TABLE "onboardings" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "onboardingId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_onboardingId_fkey" FOREIGN KEY ("onboardingId") REFERENCES "onboardings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
