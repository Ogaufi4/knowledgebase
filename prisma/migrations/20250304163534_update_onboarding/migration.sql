/*
  Warnings:

  - You are about to drop the column `interests` on the `onboardings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "onboardings" DROP COLUMN "interests",
ALTER COLUMN "researchPurpose" DROP NOT NULL,
ALTER COLUMN "organization" DROP NOT NULL,
ALTER COLUMN "termsAccepted" DROP NOT NULL;
