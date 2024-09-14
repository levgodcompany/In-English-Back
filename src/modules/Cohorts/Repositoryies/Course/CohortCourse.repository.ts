import { prisma } from "../../../../prisma";


class CohortCourseRepository {
  private db = prisma.cohortCourse;

  async enableCourse(idCohort: number, idCourse: number, enabled: boolean) {
    try {
      await this.db.update({
        where: {
          idCourse_idCohort: {
            idCohort,
            idCourse,
          },
        },
        data: {
          enabled,
        },
      });
    } catch (error) {}
  }

  async delete(idCohort: number, idCourse: number) {
    try {
      await this.db.delete({
        where: {
          idCourse_idCohort: {
            idCohort,
            idCourse,
          },
        },
      });
    } catch (error) {}
  }
}

export default new CohortCourseRepository();