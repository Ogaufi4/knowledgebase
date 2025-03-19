-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ARTICLE', 'HISTORICAL_ARTIFACT', 'FLORA', 'FAUNA', 'INDIGENOUS_KNOWLEDGE', 'OTHER');

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "articleTitle" TEXT NOT NULL,
    "articleCategory" TEXT NOT NULL,
    "articleAbstract" TEXT NOT NULL,
    "articleContent" TEXT NOT NULL,
    "tags" JSONB,
    "files" JSONB,
    "articleTermsAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
