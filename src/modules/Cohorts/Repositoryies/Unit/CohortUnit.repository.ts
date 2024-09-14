import { prisma } from "../../../../prisma";

class CohortUnitRepository {
  private db = prisma.cohortUnit;

  async enableUnit(idCohort: number, idUnit: number, enabled: boolean) {
    try {
      await this.db.update({
        where: {
          idUnit_idCohort: {
            idCohort,
            idUnit,
          },
        },
        data: {
          enabled,
        },
      });
    } catch (error) {}
  }

  async delete(idCohort: number, idUnit: number) {
    try {
      await this.db.delete({
        where: {
          idUnit_idCohort: {
            idCohort,
            idUnit,
          },
        },
      });
    } catch (error) {}
  }
}

export default new CohortUnitRepository();
