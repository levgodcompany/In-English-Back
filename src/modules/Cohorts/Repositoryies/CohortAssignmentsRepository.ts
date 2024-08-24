import { prisma } from "../../../../prisma";

class CohortAssignmentsRepository {
  async assignTeacherToCohort(idCohort: number, idTeacher: number) {
    try {
      return await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortTeachers: {
            connectOrCreate: {
              where: { idTeacher_idCohort: { idCohort, idTeacher } },
              create: { idTeacher },
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al asignar Teacher al Cohort: ${error}`);
    }
  }

  async assignStudentToCohort(idCohort: number, idStudent: number) {
    try {
      return await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortStudents: {
            connectOrCreate: {
              where: { idStudent_idCohort: { idCohort, idStudent } },
              create: { idStudent },
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al asignar Student al Cohort: ${error}`);
    }
  }

  async assignUnitToCohort(idCohort: number, idUnit: number) {
    try {
      return await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortUnities: {
            connectOrCreate: {
              where: { idUnit_idCohort: { idCohort, idUnit } },
              create: { idUnit },
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al asignar Unit al Cohort: ${error}`);
    }
  }

  async assignCourseToCohort(idCohort: number, idCourse: number) {
    try {
      return await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortCourses: {
            connectOrCreate: {
              where: { idCourse_idCohort: { idCohort, idCourse } },
              create: { idCourse },
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al asignar Course al Cohort: ${error}`);
    }
  }

  async assignModuleToCohort(idCohort: number, idModule: number) {
    try {
      return await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortModules: {
            connectOrCreate: {
              where: { idModule_idCohort: { idCohort, idModule } },
              create: { idModule },
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al asignar Module al Cohort: ${error}`);
    }
  }
}

export default new CohortAssignmentsRepository();
