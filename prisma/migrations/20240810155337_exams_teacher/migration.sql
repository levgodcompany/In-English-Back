/*
  Warnings:

  - Added the required column `idTeacher` to the `ExamsLevels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTeacher` to the `ExamsUnities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamsLevels" ADD COLUMN     "idTeacher" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExamsUnities" ADD COLUMN     "idTeacher" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamsUnities" ADD CONSTRAINT "ExamsUnities_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsLevels" ADD CONSTRAINT "ExamsLevels_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
