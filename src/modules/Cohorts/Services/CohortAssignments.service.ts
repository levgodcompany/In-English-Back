import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async assignUnitToCohort(idCohort: number, idUnit: number) {
    try {
      const updatedTeacher =
        await CohortAssignmentsRepository.assignUnitToCohort(idCohort, idUnit);

      return updatedTeacher;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new CohortAssignmentsService();
