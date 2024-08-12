import { prisma } from "../../../../prisma";

class CohortRelationshipsRepository {
  async findAllCohortUnitByIdCohort(idCohort: number) {
    try {
      return await prisma.cohortUnit.findMany({
        where: { idCohort },
        include: {
          cohort: { select: { title: true, id: true } },
          unities: { select: { id: true, title: true } },
        },
      });
    } catch (error) {
      throw new Error(
        `Error al buscar todas las unidades del cohort: ${error}`
      );
    }
  }

  async findAllCohortCourseByIdCohort(idCohort: number) {
    try {
      return await prisma.cohortCourse.findMany({
        where: { idCohort },
        include: {
          cohort: { select: { title: true, id: true } },
          courses: { select: { id: true, title: true } },
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar todos los cursos del cohort: ${error}`);
    }
  }

  async findAllCohortModuleByIdCohort(idCohort: number) {
    try {
      return await prisma.cohortModule.findMany({
        where: { idCohort },
        include: {
          cohort: { select: { title: true, id: true } },
          modules: { select: { id: true, title: true } },
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar todos los módulos del cohort: ${error}`);
    }
  }

  async findAllCohortTeacherByIdCohort(idCohort: number) {
    try {
      return await prisma.cohortTeacher.findMany({
        where: { idCohort },
        include: {
          cohort: { select: { title: true, id: true } },
          teacher: {
            select: { email: true, name: true, lastName: true, id: true },
          },
        },
      });
    } catch (error) {
      throw new Error(
        `Error al buscar todos los profesores del cohort: ${error}`
      );
    }
  }

  async findAllCohortStudentByIdCohort(idCohort: number) {
    try {
      return await prisma.cohortStudent.findMany({
        where: { idCohort },
        include: {
          cohort: { select: { title: true, id: true } },
          student: {
            select: { id: true, name: true, lastName: true, email: true },
          },
        },
      });
    } catch (error) {
      throw new Error(
        `Error al buscar todos los estudiantes del cohort: ${error}`
      );
    }
  }
}

export default new CohortRelationshipsRepository();
