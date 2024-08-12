import { Course } from "@prisma/client";
import { CourseCRUDRepository } from "../repositories";

class CourseCrudService {
  async create(data: Course) {
    try {
      return CourseCRUDRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear el course: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return CourseCRUDRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar el course: ${error}`);
    }
  }

  async findAll() {
    try {
      return CourseCRUDRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async update(id: number, data: Course) {
    try {
      return CourseCRUDRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar el Course: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return CourseCRUDRepository.deleteCourseWithRelations(id);
    } catch (error) {
      throw new Error(`Error al eliminar el course: ${error}`);
    }
  }
}

export default new CourseCrudService();
