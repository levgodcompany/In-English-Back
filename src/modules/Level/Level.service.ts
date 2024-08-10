import { Level } from "@prisma/client";
import { prisma } from "../../../prisma";
import LevelRepository from "./Level.repository";

class LevelService {
  async create(data: Level) {
    try {
      return LevelRepository.create(data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findAll() {
    try {
      return LevelRepository.findAll();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return LevelRepository.findOne(id);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async update(id: number, data: Partial<Level>) {
    try {
      return LevelRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar el Level con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return LevelRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el Level con ID ${id}: ${error}`);
    }
  }
}

export default new LevelService();
