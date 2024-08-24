import { Module } from "@prisma/client";
import { ModuleInfoBasic } from "../ModuleDto";
import { ModuleRepository } from "../repositories";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class ModueService {
  async create(data: Module) {
    try {
      return ModuleRepository.create(data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return ModuleRepository.findOne(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return ModuleRepository.findAll();
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllByIdCourse(idCourse: number) {
    try {
      return ModuleRepository.findAllByIdCourse(idCourse);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Module) {
    try {
      return ModuleRepository.update(id, data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      return ModuleRepository.deleteModuleWithRelations(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new ModueService();
