/*
  Warnings:

  - You are about to drop the `Activities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ActivitySubmissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ActivityTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LevelActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModuleActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UnitActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_activityTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ActivitySubmissions" DROP CONSTRAINT "ActivitySubmissions_activityId_fkey";

-- DropForeignKey
ALTER TABLE "ActivitySubmissions" DROP CONSTRAINT "ActivitySubmissions_studentId_fkey";

-- DropForeignKey
ALTER TABLE "CourseActivity" DROP CONSTRAINT "CourseActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "CourseActivity" DROP CONSTRAINT "CourseActivity_courseId_fkey";

-- DropForeignKey
ALTER TABLE "LevelActivity" DROP CONSTRAINT "LevelActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "LevelActivity" DROP CONSTRAINT "LevelActivity_levelId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleActivity" DROP CONSTRAINT "ModuleActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleActivity" DROP CONSTRAINT "ModuleActivity_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "UnitActivity" DROP CONSTRAINT "UnitActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "UnitActivity" DROP CONSTRAINT "UnitActivity_unitId_fkey";

-- DropTable
DROP TABLE "Activities";

-- DropTable
DROP TABLE "ActivitySubmissions";

-- DropTable
DROP TABLE "ActivityTypes";

-- DropTable
DROP TABLE "CourseActivity";

-- DropTable
DROP TABLE "LevelActivity";

-- DropTable
DROP TABLE "ModuleActivity";

-- DropTable
DROP TABLE "UnitActivity";

-- CreateTable
CREATE TABLE "ExamsUnities" (
    "id" SERIAL NOT NULL,
    "idUnit" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "passingScore" INTEGER NOT NULL,
    "numberAttempts" INTEGER NOT NULL,

    CONSTRAINT "ExamsUnities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamsLevels" (
    "id" SERIAL NOT NULL,
    "idLevel" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "passingScore" INTEGER NOT NULL,
    "NumberAttempts" INTEGER NOT NULL,

    CONSTRAINT "ExamsLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSubmissionsUnities" (
    "id" SERIAL NOT NULL,
    "submissionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "idStudent" INTEGER NOT NULL,
    "archive" TEXT NOT NULL,
    "idExamUnit" INTEGER NOT NULL,

    CONSTRAINT "ExamSubmissionsUnities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSubmissionsLevel" (
    "id" SERIAL NOT NULL,
    "submissionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "idStudent" INTEGER NOT NULL,
    "archive" TEXT NOT NULL,
    "idExamUnit" INTEGER NOT NULL,

    CONSTRAINT "ExamSubmissionsLevel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExamsUnities" ADD CONSTRAINT "ExamsUnities_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsLevels" ADD CONSTRAINT "ExamsLevels_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idExamUnit_fkey" FOREIGN KEY ("idExamUnit") REFERENCES "ExamsUnities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idExamUnit_fkey" FOREIGN KEY ("idExamUnit") REFERENCES "ExamsLevels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
