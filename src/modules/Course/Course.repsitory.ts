import { Course } from "@prisma/client";
import { prisma } from "../../../prisma";

class CourseRepository {
  async create(data: Course) {
    try {
      const course = await prisma.course.create({
        data,
      });

      return course;
    } catch (error) {
      throw new Error(`Error al crear el course: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      const course = await prisma.course.findUnique({ where: { id } });
      return course;
    } catch (error) {
      throw new Error(`Error al buscar el course: ${error}`);
    }
  }

  async findAll() {
    try {
      const courses = await prisma.course.findMany();
      return courses;
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async findAllByIdUnit(idUnit: number) {
    try {
      const courses = await prisma.course.findMany({
        where: {
          idUnit: idUnit,
        },
      });
      return courses;
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async findAllUnitiesByIdCourse(idUnit: number) {
    try {
      const courses = await prisma.course.findMany({
        where: {
          idUnit: idUnit,
        },
        include: {
          modules: {
            select: {
              id: true,
              title: true,
              order: true,
              typeFile: true,
              fileURL: true,
              description: true,
            },
          },
        },
      });
      return courses;
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async update(id: number, data: Course) {
    try {
      const course = await prisma.course.update({ where: { id }, data });
      return course;
    } catch (error) {
      throw new Error(`Error al actualizar el Course: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const course = await prisma.course.delete({ where: { id } });
      return course;
    } catch (error) {
      throw new Error(`Error al eliminar el course: ${error}`);
    }
  }
}

export default new CourseRepository();
