/*
  Warnings:

  - A unique constraint covering the columns `[pseudo]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "dateNais" TIMESTAMP(3),
ADD COLUMN     "genre" TEXT NOT NULL DEFAULT 'Autre',
ADD COLUMN     "pseudo" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Profile_pseudo_key" ON "Profile"("pseudo");
