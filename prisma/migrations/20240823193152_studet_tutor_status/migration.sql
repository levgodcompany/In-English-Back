/*
  Warnings:

  - You are about to drop the column `idStatus` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Tutors` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Tutors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_idStatus_fkey";

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "idStatus",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT '005',
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tutors" DROP COLUMN "birthDate",
DROP COLUMN "password";
