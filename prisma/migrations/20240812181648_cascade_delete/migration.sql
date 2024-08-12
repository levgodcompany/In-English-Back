-- DropForeignKey
ALTER TABLE "Cohorts" DROP CONSTRAINT "Cohorts_idLevel_fkey";

-- DropForeignKey
ALTER TABLE "ExamsLevels" DROP CONSTRAINT "ExamsLevels_idLevel_fkey";

-- DropForeignKey
ALTER TABLE "LevelStudent" DROP CONSTRAINT "LevelStudent_levelId_fkey";

-- DropForeignKey
ALTER TABLE "LevelTeacher" DROP CONSTRAINT "LevelTeacher_levelId_fkey";

-- DropForeignKey
ALTER TABLE "Suscriptions" DROP CONSTRAINT "Suscriptions_idLevel_fkey";

-- DropForeignKey
ALTER TABLE "Unities" DROP CONSTRAINT "Unities_idLevel_fkey";

-- AddForeignKey
ALTER TABLE "Cohorts" ADD CONSTRAINT "Cohorts_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscriptions" ADD CONSTRAINT "Suscriptions_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unities" ADD CONSTRAINT "Unities_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsLevels" ADD CONSTRAINT "ExamsLevels_idLevel_fkey" FOREIGN KEY ("idLevel") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelTeacher" ADD CONSTRAINT "LevelTeacher_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelStudent" ADD CONSTRAINT "LevelStudent_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
