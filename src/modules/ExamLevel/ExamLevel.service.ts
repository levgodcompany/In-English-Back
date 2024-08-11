import { ExamLevel } from "@prisma/client";
import { prisma } from "../../../prisma";
import ExamLevelRepository from "./ExamLevel.repository";

class ExamLevelServices {
  async findOne(id: number) {
    try {
      const level = await ExamLevelRepository.findOne(id);
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
      const teachers = await ExamLevelRepository.findAll();
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Examen: ${error}`);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      const teachers = await ExamLevelRepository.findAllByIdLevel(idLevel);
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Examen: ${error}`);
    }
  }

  async create(data: ExamLevel) {
    try {
      const newLevel = await ExamLevelRepository.create(data);
      return newLevel;
    } catch (error) {
      throw new Error(`Error al crear el Examen: ${error}`);
    }
  }

  async update(id: number, data: Partial<ExamLevel>) {
    try {
      const updatedLevel = await ExamLevelRepository.update(id, data);
      return updatedLevel;
    } catch (error) {
      throw new Error(`Error al actualizar el Examen con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedLevel = await ExamLevelRepository.delete(id);
      return deletedLevel;
    } catch (error) {
      throw new Error(`Error al eliminar el Examen con ID ${id}: ${error}`);
    }
  }
}

export default new ExamLevelServices();
