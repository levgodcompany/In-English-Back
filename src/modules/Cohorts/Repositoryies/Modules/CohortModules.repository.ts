import { prisma } from "../../../../prisma";

class CohortModuleRepository {
  private db = prisma.cohortModule;

  async enableModules(idCohort: number, idModule: number, enabled: boolean) {
    try {
      await this.db.update({
        where: {
          idModule_idCohort: {
            idCohort,
            idModule,
          },
        },
        data: {
          enabled,
        },
      });
    } catch (error) {}
  }

  async delete(idCohort: number, idModule: number) {
    try {
      await this.db.delete({
        where: {
          idModule_idCohort: {
            idCohort,
            idModule,
          },
        },
      });
    } catch (error) {}
  }
}

export default new CohortModuleRepository();
