-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "idStatus" INTEGER NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Levels" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suscriptions" (
    "id" SERIAL NOT NULL,
    "idLevel" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "numInstallments" INTEGER NOT NULL,
    "discountPercentage" INTEGER NOT NULL,

    CONSTRAINT "Suscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefits" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Benefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethods" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PaymentMethods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "idStudent" INTEGER NOT NULL,
    "idSuscription" INTEGER NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "idPaymentMethod" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "monthlyFee" INTEGER NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unities" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "idLevel" INTEGER NOT NULL,

    CONSTRAINT "Unities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "idUnit" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modules" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idCourse" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "fileURL" TEXT,
    "typeFile" TEXT,

    CONSTRAINT "Modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activities" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "fileURL" TEXT,
    "typeFile" TEXT,
    "order" INTEGER NOT NULL,
    "activityTypeId" INTEGER NOT NULL,

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityTypes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ActivityTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivitySubmissions" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "fileURL" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "qualification" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ActivitySubmissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LevelActivity" (
    "levelId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "LevelActivity_pkey" PRIMARY KEY ("levelId","activityId")
);

-- CreateTable
CREATE TABLE "StudentSuscription" (
    "idStudent" INTEGER NOT NULL,
    "idSuscription" INTEGER NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "totalAmount" DECIMAL(65,30) NOT NULL,
    "totalFees" INTEGER NOT NULL,

    CONSTRAINT "StudentSuscription_pkey" PRIMARY KEY ("idStudent","idSuscription")
);

-- CreateTable
CREATE TABLE "SuscriptionPaymentMethod" (
    "idSuscription" INTEGER NOT NULL,
    "idPaymentMethod" INTEGER NOT NULL,

    CONSTRAINT "SuscriptionPaymentMethod_pkey" PRIMARY KEY ("idSuscription","idPaymentMethod")
);

-- CreateTable
CREATE TABLE "SuscriptionBenefit" (
    "idSuscription" INTEGER NOT NULL,
    "idBenefit" INTEGER NOT NULL,

    CONSTRAINT "SuscriptionBenefit_pkey" PRIMARY KEY ("idSuscription","idBenefit")
);

-- CreateTable
CREATE TABLE "UnitActivity" (
    "unitId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "UnitActivity_pkey" PRIMARY KEY ("unitId","activityId")
);

-- CreateTable
CREATE TABLE "CourseActivity" (
    "courseId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "CourseActivity_pkey" PRIMARY KEY ("courseId","activityId")
);

-- CreateTable
CREATE TABLE "ModuleActivity" (
    "moduleId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "ModuleActivity_pkey" PRIMARY KEY ("moduleId","activityId")
);

-- CreateTable
CREATE TABLE "LevelTeacher" (
    "levelId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "LevelTeacher_pkey" PRIMARY KEY ("levelId","teacherId")
);

-- CreateTable
CREATE TABLE "UnitTeacher" (
    "unitId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "UnitTeacher_pkey" PRIMARY KEY ("unitId","teacherId")
);

-- CreateTable
CREATE TABLE "CourseTeacher" (
    "courseId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "CourseTeacher_pkey" PRIMARY KEY ("courseId","teacherId")
);

-- CreateTable
CREATE TABLE "ModuleTeacher" (
    "moduleId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "ModuleTeacher_pkey" PRIMARY KEY ("moduleId","teacherId")
);

-- CreateTable
CREATE TABLE "LevelStudent" (
    "levelId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "LevelStudent_pkey" PRIMARY KEY ("levelId","studentId")
);

-- CreateTable
CREATE TABLE "UnitStudent" (
    "unitId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "UnitStudent_pkey" PRIMARY KEY ("unitId","studentId")
);

-- CreateTable
CREATE TABLE "CourseStudent" (
    "courseId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "CourseStudent_pkey" PRIMARY KEY ("courseId","studentId")
);

-- CreateTable
CREATE TABLE "ModuleStudent" (
    "moduleId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "ModuleStudent_pkey" PRIMARY KEY ("moduleId","studentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentSuscription_idStudent_idSuscription_key" ON "StudentSuscription"("idStudent", "idSuscription");

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscriptions" ADD CONSTRAINT "Suscriptions_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idPaymentMethod_fkey" FOREIGN KEY ("idPaymentMethod") REFERENCES "PaymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idStudent_idSuscription_fkey" FOREIGN KEY ("idStudent", "idSuscription") REFERENCES "StudentSuscription"("idStudent", "idSuscription") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unities" ADD CONSTRAINT "Unities_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_idUnit_fkey" FOREIGN KEY ("idUnit") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modules" ADD CONSTRAINT "Modules_idCourse_fkey" FOREIGN KEY ("idCourse") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "ActivityTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySubmissions" ADD CONSTRAINT "ActivitySubmissions_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySubmissions" ADD CONSTRAINT "ActivitySubmissions_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelActivity" ADD CONSTRAINT "LevelActivity_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelActivity" ADD CONSTRAINT "LevelActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSuscription" ADD CONSTRAINT "StudentSuscription_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionPaymentMethod" ADD CONSTRAINT "SuscriptionPaymentMethod_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionPaymentMethod" ADD CONSTRAINT "SuscriptionPaymentMethod_idPaymentMethod_fkey" FOREIGN KEY ("idPaymentMethod") REFERENCES "PaymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionBenefit" ADD CONSTRAINT "SuscriptionBenefit_idBenefit_fkey" FOREIGN KEY ("idBenefit") REFERENCES "Benefits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscriptionBenefit" ADD CONSTRAINT "SuscriptionBenefit_idSuscription_fkey" FOREIGN KEY ("idSuscription") REFERENCES "Suscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitActivity" ADD CONSTRAINT "UnitActivity_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitActivity" ADD CONSTRAINT "UnitActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseActivity" ADD CONSTRAINT "CourseActivity_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseActivity" ADD CONSTRAINT "CourseActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleActivity" ADD CONSTRAINT "ModuleActivity_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleActivity" ADD CONSTRAINT "ModuleActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelTeacher" ADD CONSTRAINT "LevelTeacher_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelTeacher" ADD CONSTRAINT "LevelTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitTeacher" ADD CONSTRAINT "UnitTeacher_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitTeacher" ADD CONSTRAINT "UnitTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTeacher" ADD CONSTRAINT "CourseTeacher_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTeacher" ADD CONSTRAINT "CourseTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleTeacher" ADD CONSTRAINT "ModuleTeacher_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleTeacher" ADD CONSTRAINT "ModuleTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelStudent" ADD CONSTRAINT "LevelStudent_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelStudent" ADD CONSTRAINT "LevelStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStudent" ADD CONSTRAINT "UnitStudent_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStudent" ADD CONSTRAINT "UnitStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStudent" ADD CONSTRAINT "CourseStudent_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStudent" ADD CONSTRAINT "CourseStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleStudent" ADD CONSTRAINT "ModuleStudent_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleStudent" ADD CONSTRAINT "ModuleStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
