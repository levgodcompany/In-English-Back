import { Module } from "@prisma/client";
import { ModuleInfoBasic } from "../ModuleDto";
import { ModuleRepository } from "../repositories";

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

  async findAllInfoBasic() {
    try {
      const modules = await ModuleRepository.findAll();
      return modules.map((module) => {
        const info: ModuleInfoBasic = {
          id: module.id,
          title: module.title,
          idCourse: module.idCourse,
        };
        return info;
      });
    } catch (error) {
      throw new Error(`${error}`);
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
      return ModuleRepository.deleteModuleWithRelations(id);
    } catch (error) {
      throw new Error(`Error al eliminar el module: ${error}`);
    }
  }
}

export default new ModueService();
