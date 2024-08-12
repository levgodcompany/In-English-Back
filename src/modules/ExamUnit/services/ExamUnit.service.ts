import { ExamUnit } from "@prisma/client";
import { ExamUnitRepository } from "../repositories";

class ExamUnitServices {
  async findOne(id: number) {
    try {
      const level = await ExamUnitRepository.findOne(id);
      if (!level) {
        throw new Error(`No se encontró el Examen con ID: ${id}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Examen con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const teachers = await ExamUnitRepository.findAll();
      if (teachers.length === 0) {
        throw new Error("No se encontraron Teachers");
      }
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Examen: ${error}`);
    }
  }

  async create(data: ExamUnit) {
    try {
      const newLevel = await ExamUnitRepository.create(data);
      return newLevel;
    } catch (error) {
      throw new Error(`Error al crear el Examen: ${error}`);
    }
  }

  async update(id: number, data: Partial<ExamUnit>) {
    try {
      const updatedLevel = await ExamUnitRepository.update(id, data);
      return updatedLevel;
    } catch (error) {
      throw new Error(`Error al actualizar el Examen con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedLevel = await ExamUnitRepository.delete(id);
      return deletedLevel;
    } catch (error) {
      throw new Error(`Error al eliminar el Examen con ID ${id}: ${error}`);
    }
  }
}

export default new ExamUnitServices();
