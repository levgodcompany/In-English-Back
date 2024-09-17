import { ClassOnlive } from "@prisma/client";
import { ClassOnliveRepository } from "../repository";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class ClassOnliveService {
  async create(data: ClassOnlive) {
    const newClass = await ClassOnliveRepository.create(data);
    return newClass;
  }

  async findOne(id: number) {
    const classOnlive = await ClassOnliveRepository.findOne(id);

    return classOnlive;
  }

  async findAllClassOnLive(idCohort: number) {
    try {
      const cohorts = await ClassOnliveRepository.findAllClassOnLive(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async findAll() {
    const classOnlive = await ClassOnliveRepository.findAll();

    return classOnlive;
  }

  async delete(id: number) {
    const deletClass = await ClassOnliveRepository.delete(id);

    return deletClass;
  }
  async update(id: number, data: ClassOnlive) {
    const deletClass = await ClassOnliveRepository.update(id, data);

    return deletClass;
  }
}

export default new ClassOnliveService();
