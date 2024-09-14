import CohortUnitRepository from "../../Repositoryies/Unit/CohortUnit.repository";

class CohortUnitService {
  async enableUnit(idCohort: number, idUnit: number, enabled: boolean) {
    await CohortUnitRepository.enableUnit(idCohort, idUnit, enabled);
  }

  async delete(idCohort: number, idUnit: number) {
    await CohortUnitRepository.delete(idCohort, idUnit);
  }
}

export default new CohortUnitService();
