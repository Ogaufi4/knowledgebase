/*
  Warnings:

  - You are about to drop the column `onboardingId` on the `users` table. All the data in the column will be lost.
  - Made the column `researchPurpose` on table `onboardings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `organization` on table `onboardings` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_onboardingId_fkey";

-- AlterTable
ALTER TABLE "onboardings" ALTER COLUMN "researchPurpose" SET NOT NULL,
ALTER COLUMN "organization" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "onboardingId";
