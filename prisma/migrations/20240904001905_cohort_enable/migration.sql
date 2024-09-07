-- AlterTable
ALTER TABLE "CohortCourse" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "CohortModule" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "CohortStudent" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "CohortUnit" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;
