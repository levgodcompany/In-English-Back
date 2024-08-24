-- DropForeignKey
ALTER TABLE "CohortCourse" DROP CONSTRAINT "CohortCourse_idCohort_fkey";

-- DropForeignKey
ALTER TABLE "CohortCourse" DROP CONSTRAINT "CohortCourse_idCourse_fkey";

-- DropForeignKey
ALTER TABLE "CohortModule" DROP CONSTRAINT "CohortModule_idCohort_fkey";

-- DropForeignKey
ALTER TABLE "CohortModule" DROP CONSTRAINT "CohortModule_idModule_fkey";

-- DropForeignKey
ALTER TABLE "CohortStudent" DROP CONSTRAINT "CohortStudent_idCohort_fkey";

-- DropForeignKey
ALTER TABLE "CohortStudent" DROP CONSTRAINT "CohortStudent_idStudent_fkey";

-- DropForeignKey
ALTER TABLE "CohortTeacher" DROP CONSTRAINT "CohortTeacher_idCohort_fkey";

-- DropForeignKey
ALTER TABLE "CohortTeacher" DROP CONSTRAINT "CohortTeacher_idTeacher_fkey";

-- DropForeignKey
ALTER TABLE "CohortUnit" DROP CONSTRAINT "CohortUnit_idCohort_fkey";

-- DropForeignKey
ALTER TABLE "CohortUnit" DROP CONSTRAINT "CohortUnit_idUnit_fkey";

-- DropForeignKey
ALTER TABLE "CourseStudent" DROP CONSTRAINT "CourseStudent_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseStudent" DROP CONSTRAINT "CourseStudent_studentId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTeacher" DROP CONSTRAINT "CourseTeacher_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTeacher" DROP CONSTRAINT "CourseTeacher_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsLevel" DROP CONSTRAINT "ExamSubmissionsLevel_idExamLevel_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsLevel" DROP CONSTRAINT "ExamSubmissionsLevel_idStatus_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsLevel" DROP CONSTRAINT "ExamSubmissionsLevel_idStudent_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsUnities" DROP CONSTRAINT "ExamSubmissionsUnities_idExamUnit_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsUnities" DROP CONSTRAINT "ExamSubmissionsUnities_idStatus_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubmissionsUnities" DROP CONSTRAINT "ExamSubmissionsUnities_idStudent_fkey";

-- DropForeignKey
ALTER TABLE "ExamsLevels" DROP CONSTRAINT "ExamsLevels_idTeacher_fkey";

-- DropForeignKey
ALTER TABLE "ExamsUnities" DROP CONSTRAINT "ExamsUnities_idTeacher_fkey";

-- DropForeignKey
ALTER TABLE "ExamsUnities" DROP CONSTRAINT "ExamsUnities_idUnit_fkey";

-- DropForeignKey
ALTER TABLE "LevelStudent" DROP CONSTRAINT "LevelStudent_studentId_fkey";

-- DropForeignKey
ALTER TABLE "LevelTeacher" DROP CONSTRAINT "LevelTeacher_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleStudent" DROP CONSTRAINT "ModuleStudent_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleStudent" DROP CONSTRAINT "ModuleStudent_studentId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleTeacher" DROP CONSTRAINT "ModuleTeacher_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleTeacher" DROP CONSTRAINT "ModuleTeacher_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_idPaymentMethod_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_idStatus_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_idStudent_idSuscription_fkey";

-- DropForeignKey
ALTER TABLE "StudentSuscription" DROP CONSTRAINT "StudentSuscription_idStatus_fkey";

-- DropForeignKey
ALTER TABLE "StudentSuscription" DROP CONSTRAINT "StudentSuscription_idStudent_fkey";

-- DropForeignKey
ALTER TABLE "StudentSuscription" DROP CONSTRAINT "StudentSuscription_idSuscription_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_idStatus_fkey";

-- DropForeignKey
ALTER TABLE "SuscriptionBenefit" DROP CONSTRAINT "SuscriptionBenefit_idBenefit_fkey";

-- DropForeignKey
ALTER TABLE "SuscriptionBenefit" DROP CONSTRAINT "SuscriptionBenefit_idSuscription_fkey";

-- DropForeignKey
ALTER TABLE "SuscriptionPaymentMethod" DROP CONSTRAINT "SuscriptionPaymentMethod_idPaymentMethod_fkey";

-- DropForeignKey
ALTER TABLE "SuscriptionPaymentMethod" DROP CONSTRAINT "SuscriptionPaymentMethod_idSuscription_fkey";

-- DropForeignKey
ALTER TABLE "UnitStudent" DROP CONSTRAINT "UnitStudent_studentId_fkey";

-- DropForeignKey
ALTER TABLE "UnitStudent" DROP CONSTRAINT "UnitStudent_unitId_fkey";

-- DropForeignKey
ALTER TABLE "UnitTeacher" DROP CONSTRAINT "UnitTeacher_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "UnitTeacher" DROP CONSTRAINT "UnitTeacher_unitId_fkey";

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortStudent" ADD CONSTRAINT "CohortStudent_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortStudent" ADD CONSTRAINT "CohortStudent_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortTeacher" ADD CONSTRAINT "CohortTeacher_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortTeacher" ADD CONSTRAINT "CohortTeacher_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortUnit" ADD CONSTRAINT "CohortUnit_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortUnit" ADD CONSTRAINT "CohortUnit_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortCourse" ADD CONSTRAINT "CohortCourse_idCourse_fkey" FOREIGN KEY ("idCourse") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortCourse" ADD CONSTRAINT "CohortCourse_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortModule" ADD CONSTRAINT "CohortModule_idModule_fkey" FOREIGN KEY ("idModule") REFERENCES "Modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CohortModule" ADD CONSTRAINT "CohortModule_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idPaymentMethod_fkey" FOREIGN KEY ("idPaymentMethod") REFERENCES "PaymentMethods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idStudent_idSuscription_fkey" FOREIGN KEY ("idStudent", "idSuscription") REFERENCES "StudentSuscription"("idStudent", "idSuscription") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsUnities" ADD CONSTRAINT "ExamsUnities_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsUnities" ADD CONSTRAINT "ExamsUnities_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsLevels" ADD CONSTRAINT "ExamsLevels_idTeacher_fkey" FOREIGN KEY ("idTeacher") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsUnities" ADD CONSTRAINT "ExamSubmissionsUnities_idExamUnit_fkey" FOREIGN KEY ("idExamUnit") REFERENCES "ExamsUnities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmissionsLevel" ADD CONSTRAINT "ExamSubmissionsLevel_idExamLevel_fkey" FOREIGN KEY ("idExamLevel") REFERENCES "ExamsLevels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionPaymentMethod" ADD CONSTRAINT "SuscriptionPaymentMethod_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionPaymentMethod" ADD CONSTRAINT "SuscriptionPaymentMethod_idPaymentMethod_fkey" FOREIGN KEY ("idPaymentMethod") REFERENCES "PaymentMethods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionBenefit" ADD CONSTRAINT "SuscriptionBenefit_idBenefit_fkey" FOREIGN KEY ("idBenefit") REFERENCES "Benefits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionBenefit" ADD CONSTRAINT "SuscriptionBenefit_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelTeacher" ADD CONSTRAINT "LevelTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitTeacher" ADD CONSTRAINT "UnitTeacher_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitTeacher" ADD CONSTRAINT "UnitTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTeacher" ADD CONSTRAINT "CourseTeacher_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTeacher" ADD CONSTRAINT "CourseTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleTeacher" ADD CONSTRAINT "ModuleTeacher_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleTeacher" ADD CONSTRAINT "ModuleTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelStudent" ADD CONSTRAINT "LevelStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStudent" ADD CONSTRAINT "UnitStudent_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStudent" ADD CONSTRAINT "UnitStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStudent" ADD CONSTRAINT "CourseStudent_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStudent" ADD CONSTRAINT "CourseStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleStudent" ADD CONSTRAINT "ModuleStudent_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleStudent" ADD CONSTRAINT "ModuleStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
