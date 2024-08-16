/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `Students` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "dni" TEXT,
ADD COLUMN     "tel" TEXT;

-- CreateTable
CREATE TABLE "Tutors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "relationship" TEXT NOT NULL,
    "tel" TEXT,

    CONSTRAINT "Tutors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentTutor" (
    "idStudent" INTEGER NOT NULL,
    "idTutor" INTEGER NOT NULL,

    CONSTRAINT "StudentTutor_pkey" PRIMARY KEY ("idStudent","idTutor")
);

-- CreateTable
CREATE TABLE "TypeLevels" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TypeLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeLevelLevel" (
    "idLevel" INTEGER NOT NULL,
    "idTypeLevel" INTEGER NOT NULL,

    CONSTRAINT "TypeLevelLevel_pkey" PRIMARY KEY ("idLevel","idTypeLevel")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_email_key" ON "Tutors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_dni_key" ON "Tutors"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Students_dni_key" ON "Students"("dni");

-- AddForeignKey
ALTER TABLE "StudentTutor" ADD CONSTRAINT "StudentTutor_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentTutor" ADD CONSTRAINT "StudentTutor_idTutor_fkey" FOREIGN KEY ("idTutor") REFERENCES "Tutors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeLevelLevel" ADD CONSTRAINT "TypeLevelLevel_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeLevelLevel" ADD CONSTRAINT "TypeLevelLevel_idTypeLevel_fkey" FOREIGN KEY ("idTypeLevel") REFERENCES "TypeLevels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
