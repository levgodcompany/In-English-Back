import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
import { CohortRelationshipsRepository } from "../Repositoryies";

class CohortRelationshipsService {
  async findAllCohortUnitByIdCohort(idCohort: number) {
    try {
      const cohorts =
        await CohortRelationshipsRepository.findAllCohortUnitByIdCohort(
          idCohort
        );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findTotalClassOnLive(idCohort: number) {
    try {
      const cohorts = await CohortRelationshipsRepository.findTotalClassOnLive(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  async findOneAllInfo(idCohort: number) {
    try {
      const cohorts = await CohortRelationshipsRepository.findOneAllInfo(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAllCohortCourseByIdCohort(idCohort: number) {
    try {
      const cohorts =
        await CohortRelationshipsRepository.findAllCohortCourseByIdCohort(
          idCohort
        );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAllCohortModuleByIdCohort(idCohort: number) {
    try {
      const cohorts =
        await CohortRelationshipsRepository.findAllCohortModuleByIdCohort(
          idCohort
        );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAllCohortTeacherByIdCohort(idCohort: number) {
    try {
      const cohorts =
        await CohortRelationshipsRepository.findAllCohortTeacherByIdCohort(
          idCohort
        );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAllCohortStudentByIdCohort(idCohort: number) {
    try {
      const cohorts =
        await CohortRelationshipsRepository.findAllCohortStudentByIdCohort(
          idCohort
        );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new CohortRelationshipsService();
