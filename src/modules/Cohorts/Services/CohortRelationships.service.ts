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
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async findOneAllInfo(idCohort: number) {
    try {
      const cohorts = await CohortRelationshipsRepository.findOneAllInfo(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
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
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
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
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
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
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
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
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
}

export default new CohortRelationshipsService();
