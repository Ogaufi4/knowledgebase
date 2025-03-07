/*
  Warnings:

  - Made the column `termsAccepted` on table `onboardings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "onboardings" ADD COLUMN     "interests" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "termsAccepted" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "onboardings" ADD CONSTRAINT "onboardings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
