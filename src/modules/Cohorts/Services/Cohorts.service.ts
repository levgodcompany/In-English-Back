import { Cohort } from "@prisma/client";
import { CohortRepository } from "../Repositoryies";

class CohortsServices {
  async findOne(id: number) {
    try {
      const cohort = await CohortRepository.findOne(id);
      return cohort;
    } catch (error) {
      throw new Error(`Error al buscar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const cohorts = await CohortRepository.findAll();

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async create(data: Cohort) {
    try {
      const newCohort = await CohortRepository.create(data);
      return newCohort;
    } catch (error) {
      throw new Error(`Error al crear el cohort: ${error}`);
    }
  }

  async update(id: number, data: Partial<Cohort>) {
    try {
      const updatedCohort = await CohortRepository.update(id, data);
      return updatedCohort;
    } catch (error) {
      throw new Error(`Error al actualizar el cohort con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedCohort = await CohortRepository.delete(id);
      return deletedCohort;
    } catch (error) {
      throw new Error(`Error al eliminar el cohort con ID ${id}: ${error}`);
    }
  }
}

export default new CohortsServices();
