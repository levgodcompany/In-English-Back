-- CreateTable
CREATE TABLE "ClassOnlive" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "idCohort" INTEGER NOT NULL,

    CONSTRAINT "ClassOnlive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassOnliveStudent" (
    "idStudent" INTEGER NOT NULL,
    "idClassOnlive" INTEGER NOT NULL,

    CONSTRAINT "ClassOnliveStudent_pkey" PRIMARY KEY ("idStudent","idClassOnlive")
);

-- AddForeignKey
ALTER TABLE "ClassOnlive" ADD CONSTRAINT "ClassOnlive_idCohort_fkey" FOREIGN KEY ("idCohort") REFERENCES "Cohorts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassOnliveStudent" ADD CONSTRAINT "ClassOnliveStudent_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassOnliveStudent" ADD CONSTRAINT "ClassOnliveStudent_idClassOnlive_fkey" FOREIGN KEY ("idClassOnlive") REFERENCES "ClassOnlive"("id") ON DELETE CASCADE ON UPDATE CASCADE;
