import { Cohort, PrismaClient } from "@prisma/client";
import { prisma } from "../../../prisma";
import { p } from "../../../utilities/CrudRepository";

class CohortRepository {
  async findOne(id: number) {
    try {
      return await prisma.cohort.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAll(idLevel: number) {
    try {
      return await prisma.cohort.findMany({
        where: {
          idLevel: idLevel
        }
      });
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async create(data: Cohort) {
    try {
      return await prisma.cohort.create({ data });
    } catch (error) {
      throw new Error(`Error al crear el cohort: ${error}`);
    }
  }

  async update(id: number, data: Partial<Cohort>) {
    try {
      return await prisma.cohort.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error al actualizar el cohort con ID ${id}: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(idCohort: number) {
    try {
      const deletedCohort = await prisma.cohort.delete({
        where: { id: idCohort },
      });
      return deletedCohort;
    } catch (error) {
      throw new Error(
        `Error al eliminar el cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  public async deleteCohortWithRelations(idCohort: number): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminacion de realacion Cohort y Unities
        await p.cohortUnit.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Courses
        await p.cohortCourse.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Modules
        await p.cohortModule.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Students
        await p.cohortStudent.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Teachers
        await p.cohortTeacher.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Finalmente, eliminar la Cohort
        await p.cohort.delete({
          where: {
            id: idCohort,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${idCohort}:`, error);
      throw error;
    }
  }

  public async deleteCohortById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminacion de realacion Cohort y Unities
        await p.cohortUnit.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Courses
        await p.cohortCourse.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Modules
        await p.cohortModule.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Students
        await p.cohortStudent.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Teachers
        await p.cohortTeacher.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar la Cohort
        await p.cohort.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }

  public async deleteCohortWithRelationsCascade(idCohort: number, prismaInstance: PrismaClient): Promise<void> {
    try {
      await prismaInstance.$transaction(async (p) => {
        // Eliminacion de realacion Cohort y Unities
        await p.cohortUnit.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Courses
        await p.cohortCourse.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Modules
        await p.cohortModule.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Students
        await p.cohortStudent.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Eliminacion de realacion Cohort y Teachers
        await p.cohortTeacher.deleteMany({
          where: {
            idCohort: idCohort,
          },
        });

        // Finalmente, eliminar la Cohort
        await p.cohort.delete({
          where: {
            id: idCohort,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${idCohort}:`, error);
      throw error;
    }
  }

  public async deleteCohortByIdCascade(ids: number[], p: p): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
        // Eliminacion de realacion Cohort y Unities
        await p.cohortUnit.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Courses
        await p.cohortCourse.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Modules
        await p.cohortModule.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Students
        await p.cohortStudent.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Teachers
        await p.cohortTeacher.deleteMany({
          where: {
            idCohort: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar la Cohort
        await p.cohort.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
        console.log("-----------------------");
        console.log("COHORT ELIMINADO");
        console.log("-----------------------");
      // });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }
}

export default new CohortRepository();
