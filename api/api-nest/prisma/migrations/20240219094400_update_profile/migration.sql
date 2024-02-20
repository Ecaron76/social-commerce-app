-- DropIndex
DROP INDEX "Profile_pseudo_key";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "pseudo" DROP DEFAULT;
