import { ExamLevel } from "@prisma/client";
import { ExamLevelRepository } from "../repositories";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class ExamLevelServices {
  async findOne(id: number) {
    // try {
    const level = await ExamLevelRepository.findOne(id);
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
    try {
      const teachers = await ExamLevelRepository.findAll();
      return teachers;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      const teachers = await ExamLevelRepository.findAllByIdLevel(idLevel);
      return teachers;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: ExamLevel) {
    try {
      const newLevel = await ExamLevelRepository.create(data);
      return newLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Partial<ExamLevel>) {
    try {
      const updatedLevel = await ExamLevelRepository.update(id, data);
      return updatedLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      const deletedLevel =
        await ExamLevelRepository.deleteExamLevelWithRelations(id);
      return deletedLevel;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new ExamLevelServices();
