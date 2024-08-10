import { Module } from "@prisma/client";
import ModuleRepository from "./Module.repository";

class ModueService {
  async create(data: Module) {
    try {
      return ModuleRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear el module: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return ModuleRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar el module: ${error}`);
    }
  }

  async findAll() {
    try {
      return ModuleRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async findAllByIdCourse(idCourse: number) {
    try {
      return ModuleRepository.findAllByIdCourse(idCourse);
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async update(id: number, data: Module) {
    try {
      return ModuleRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar el module: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return ModuleRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el module: ${error}`);
    }
  }
}

export default new ModueService();
