import CohortModulesRepository from "../../Repositoryies/Modules/CohortModules.repository";

class CohortModuleService {
  async enableModules(idCohort: number, idModule: number, enabled: boolean) {
    await CohortModulesRepository.enableModules(idCohort, idModule, enabled);
  }

  async delete(idCohort: number, idModule: number) {
    await CohortModulesRepository.delete(idCohort, idModule);
  }
}

export default new CohortModuleService();
