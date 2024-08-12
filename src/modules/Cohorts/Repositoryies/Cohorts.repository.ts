import { Cohort } from "@prisma/client";
import { prisma } from "../../../../prisma";

class CohortRepository {
  async findOne(id: number) {
    try {
      return await prisma.cohort.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.cohort.findMany();
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
}

export default new CohortRepository();
