/*
  Warnings:

  - Made the column `password` on table `Students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "password" SET NOT NULL;
