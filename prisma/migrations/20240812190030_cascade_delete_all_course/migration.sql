-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_idUnit_fkey";

-- DropForeignKey
ALTER TABLE "Modules" DROP CONSTRAINT "Modules_idCourse_fkey";

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modules" ADD CONSTRAINT "Modules_idCourse_fkey" FOREIGN KEY ("idCourse") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
