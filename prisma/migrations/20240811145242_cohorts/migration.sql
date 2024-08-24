/*
  Warnings:

  - You are about to drop the column `idExamUnit` on the `ExamSubmissionsLevel` table. All the data in the column will be lost.
  - Added the required column `idExamLevel` to the `ExamSubmissionsLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExamSubmissionsLevel" DROP CONSTRAINT "ExamSubmissionsLevel_idExamUnit_fkey";

-- AlterTable
ALTER TABLE "ExamSubmissionsLevel" DROP COLUMN "idExamUnit",
ADD COLUMN     "idExamLevel" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Cohorts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "registrationStartDate" TIMESTAMP(3) NOT NULL,
    "registrationEndDate" TIMESTAMP(3) NOT NULL,
    "idLevel" INTEGER NOT NULL,

    CONSTRAINT "Cohorts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CohortStudent" (
    "idStudent" INTEGER NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "CohortStudent_pkey" PRIMARY KEY ("idStudent","idCohort")
);

-- CreateTable
CREATE TABLE "CohortTeacher" (
    "idTeacher" INTEGER NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "CohortTeacher_pkey" PRIMARY KEY ("idTeacher","idCohort")
);

-- CreateTable
CREATE TABLE "CohortUnit" (
    "idUnit" INTEGER NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "CohortUnit_pkey" PRIMARY KEY ("idUnit","idCohort")
);

-- CreateTable
CREATE TABLE "CohortCourse" (
    "idCourse" INTEGER NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "CohortCourse_pkey" PRIMARY KEY ("idCourse","idCohort")
);

-- CreateTable
CREATE TABLE "CohortModule" (
    "idModule" INTEGER NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "CohortModule_pkey" PRIMARY KEY ("idModule","idCohort")
);

-- AddForeignKey
ALTER TABLE "Cohorts" ADD CONSTRAINT "Cohorts_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortStudent" ADD CONSTRAINT "CohortStudent_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortStudent" ADD CONSTRAINT "CohortStudent_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortTeacher" ADD CONSTRAINT "CohortTeacher_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortTeacher" ADD CONSTRAINT "CohortTeacher_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortUnit" ADD CONSTRAINT "CohortUnit_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortUnit" ADD CONSTRAINT "CohortUnit_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortCourse" ADD CONSTRAINT "CohortCourse_idCourse_fkey" FOREIGN KEY ("idCourse") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortCourse" ADD CONSTRAINT "CohortCourse_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortModule" ADD CONSTRAINT "CohortModule_idModule_fkey" FOREIGN KEY ("idModule") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortModule" ADD CONSTRAINT "CohortModule_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idExamLevel_fkey" FOREIGN KEY ("idExamLevel") REFERENCES "ExamsLevels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
