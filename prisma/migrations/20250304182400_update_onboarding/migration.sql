-- DropForeignKey
ALTER TABLE "onboardings" DROP CONSTRAINT "onboardings_userId_fkey";

-- AlterTable
ALTER TABLE "onboardings" ALTER COLUMN "termsAccepted" DROP NOT NULL;
