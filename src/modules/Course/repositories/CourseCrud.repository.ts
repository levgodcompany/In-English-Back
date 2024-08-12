import { Course, PrismaClient } from "@prisma/client";
import { prisma } from "../../../../prisma";
import ModuleRepository from "../../Module/repositories/Module.repository";
import { p } from "../../../utilities/CrudRepository";

class CourseCRUDRepository {
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

  async update(id: number, data: Course) {
    try {
      const course = await prisma.course.update({ where: { id }, data });
      return course;
    } catch (error) {
      throw new Error(`Error al actualizar el Course: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(id: number) {
    try {
      const course = await prisma.course.delete({ where: { id } });
      return course;
    } catch (error) {
      throw new Error(`Error al eliminar el course: ${error}`);
    }
  }

  public async deleteCourseWithRelations(courseId: number): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminar relaciones entre Curso y Módulos
        const modules = await p.module.findMany({
          where: {
            idCourse: courseId,
          },
          select: {
            id: true,
          },
        });

        if (modules.length > 0) {
          // Eliminar el módulo
          await ModuleRepository.deleteModulesByIds(modules.map((m) => m.id));
        }
        // Eliminar relaciones de CourseStudent
        await p.courseStudent.deleteMany({
          where: { courseId },
        });

        // Eliminar relaciones de CourseTeacher
        await p.courseTeacher.deleteMany({
          where: { courseId },
        });

        // Eliminar relaciones de CohortCourse
        await p.cohortCourse.deleteMany({
          where: { idCourse: courseId },
        });

        // Eliminar el Course en sí mismo
        await p.course.delete({
          where: { id: courseId },
        });
      });
    } catch (error) {
      console.error(`Error eliminando el curso con ID ${courseId}:`, error);
      throw error;
    }
  }

  public async deleteCoursesById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Obtenemos todos los Modules que dependen del Courses
        const modules = await p.module.findMany({
          where: {
            idCourse: {
              in: ids,
            },
          },
          select: {
            id: true,
          },
        });

        if (modules.length > 0) {
          // Eliminar el módulo
          await ModuleRepository.deleteModulesByIds(modules.map((m) => m.id));
        }

        // Eliminar relaciones entre Curso y Estudiantes
        await p.courseStudent.deleteMany({
          where: {
            courseId: {
              in: ids,
            },
          },
        });

        // Eliminar relaciones entre Curso y Profesores
        await p.courseTeacher.deleteMany({
          where: {
            courseId: {
              in: ids,
            },
          },
        });

        // Eliminar CohortCourse
        await p.cohortCourse.deleteMany({
          where: {
            idCourse: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar el curso
        await p.course.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando el curso con ID ${ids}:`, error);
      throw error;
    }
  }

  public async deleteCourseWithRelationsCascade(
    courseId: number,
    prismaInstance: PrismaClient
  ): Promise<void> {
    try {
      await prismaInstance.$transaction(async (p) => {
        // Eliminar relaciones entre Curso y Módulos
        const modules = await p.module.findMany({
          where: {
            idCourse: courseId,
          },
          select: {
            id: true,
          },
        });

        if (modules.length > 0) {
          // Eliminar el módulo
          await ModuleRepository.deleteModulesByIds(modules.map((m) => m.id));
        }
        // Eliminar relaciones de CourseStudent
        await p.courseStudent.deleteMany({
          where: { courseId },
        });

        // Eliminar relaciones de CourseTeacher
        await p.courseTeacher.deleteMany({
          where: { courseId },
        });

        // Eliminar relaciones de CohortCourse
        await p.cohortCourse.deleteMany({
          where: { idCourse: courseId },
        });

        // Eliminar el Course en sí mismo
        await p.course.delete({
          where: { id: courseId },
        });
      });
    } catch (error) {
      console.error(`Error eliminando el curso con ID ${courseId}:`, error);
      throw error;
    }
  }

  public async deleteCoursesByIdCascade(ids: number[], p: p): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
      // Obtenemos todos los Modules que dependen del Courses
      const modules = await p.module.findMany({
        where: {
          idCourse: {
            in: ids,
          },
        },
        select: {
          id: true,
        },
      });

      if (modules.length > 0) {
        // Eliminar el módulo
        await ModuleRepository.deleteModulesByIdsCascade(
          modules.map((m) => m.id),
          p
        );
      }

      // Eliminar relaciones entre Curso y Estudiantes
      await p.courseStudent.deleteMany({
        where: {
          courseId: {
            in: ids,
          },
        },
      });

      // Eliminar relaciones entre Curso y Profesores
      await p.courseTeacher.deleteMany({
        where: {
          courseId: {
            in: ids,
          },
        },
      });

      // Eliminar CohortCourse
      await p.cohortCourse.deleteMany({
        where: {
          idCourse: {
            in: ids,
          },
        },
      });

      // Finalmente, eliminar el curso
      await p.course.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
      console.log("-----------------------");
      console.log("CURSO ELIMINADO");
      console.log("-----------------------");
      // });
    } catch (error) {
      console.error(`Error eliminando el curso con ID ${ids}:`, error);
      throw error;
    }
  }
}
export default new CourseCRUDRepository();
