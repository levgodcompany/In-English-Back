import { Cohort } from "@prisma/client";
import { CohortRepository } from "../Repositoryies";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class CohortsServices {
  async findOne(id: number) {
    try {
      const cohort = await CohortRepository.findOne(id);
      return cohort;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(idLevel: number) {
    try {
      const cohorts = await CohortRepository.findAll(idLevel);

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: Cohort) {
    try {
      const newCohort = await CohortRepository.create(data);
      return newCohort;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Partial<Cohort>) {
    try {
      const updatedCohort = await CohortRepository.update(id, data);
      return updatedCohort;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      const deletedCohort = await CohortRepository.deleteCohortWithRelations(
        id
      );
      return deletedCohort;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new CohortsServices();
