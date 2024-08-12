import { CohortAssignmentsRepository } from "../Repositoryies";

class CohortAssignmentsService {
  // Métodos específicos para asignación de entidades
  async assignTeacherToCohort(idCohort: number, idTeacher: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignTeacherToCohort(
          idCohort,
          idTeacher
        );
      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Teacher con el ID ${idTeacher} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignStudentToCohort(idCohort: number, idStudent: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignStudentToCohort(
          idCohort,
          idStudent
        );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Student con el ID ${idStudent} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignUnitToCohort(idCohort: number, idUnit: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignUnitToCohort(idCohort, idUnit);

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Unit con el ID ${idUnit} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignCourseToCohort(idCohort: number, idCourse: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignCourseToCohort(
          idCohort,
          idCourse
        );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Course con el ID ${idCohort} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignModuleToCohort(idCohort: number, idModule: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignModuleToCohort(
          idCohort,
          idModule
        );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Module con el ID ${idModule} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }
}

export default new CohortAssignmentsService();
