import { ExamUnit } from "@prisma/client";
import { ExamUnitRepository } from "../repositories";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class ExamUnitServices {
  async findOne(id: number) {
    // try {
    const level = await ExamUnitRepository.findOne(id);
    if (!level) {
      throw new CustomError(
        `No se encontró el Examen con ID: ${id}`,
        HttpStatus.NOT_FOUND
      );
    }
    return level;
    // } catch (error) {
    //   throw new Error(`Error al buscar el Examen con ID ${id}: ${error}`);
    // }
  }

  async findAll() {
    // try {
    const teachers = await ExamUnitRepository.findAll();
    if (teachers.length === 0) {
      throw new CustomError(`No se encontraron Teachers`, HttpStatus.NOT_FOUND);
    }
    return teachers;
    // } catch (error) {
    //   throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  }

  async create(data: ExamUnit) {
    try {
      const newLevel = await ExamUnitRepository.create(data);
      return newLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Partial<ExamUnit>) {
    try {
      const updatedLevel = await ExamUnitRepository.update(id, data);
      return updatedLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      const deletedLevel = await ExamUnitRepository.delete(id);
      return deletedLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new ExamUnitServices();
