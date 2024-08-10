import { Course } from "@prisma/client";
import { prisma } from "../../../prisma";
import CourseRepsitory from "./Course.repsitory";

class CourseService {
  async create(data: Course) {
    try {
      return CourseRepsitory.create(data);
    } catch (error) {
      throw new Error(`Error al crear el course: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return CourseRepsitory.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar el course: ${error}`);
    }
  }

  async findAll() {
    try {
      return CourseRepsitory.findAll();
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async findAllByIdUnit(idUnit: number) {
    try {
      return CourseRepsitory.findAllByIdUnit(idUnit);
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async findAllUnitiesByIdCourse(idUnit: number) {
    try {
      return CourseRepsitory.findAllUnitiesByIdCourse(idUnit);
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async update(id: number, data: Course) {
    try {
      return CourseRepsitory.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar el Course: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return CourseRepsitory.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el course: ${error}`);
    }
  }

  // Métodos específicos para asignación de entidades
  async assignActivityToCourse(idCourse: number, idAcivity: number) {
    try {
      return CourseRepsitory.assignActivityToCourse(idCourse, idAcivity);
    } catch (error) {
      throw new Error(`Error al associar el Course con Activity: ${error}`);
    }
  }

  async removeActivityToCourse(idCourse: number, idAcivity: number) {
    try {
      CourseRepsitory.removeActivityToCourse(idCourse, idAcivity);
    } catch (error) {
      throw new Error(`Error al remover el Course de la Activity: ${error}`);
    }
  }
}

export default new CourseService();
