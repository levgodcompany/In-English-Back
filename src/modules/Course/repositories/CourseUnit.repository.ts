import { prisma } from "../../../../prisma";

class CourseUnitRepository {
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
}

export default new CourseUnitRepository();
