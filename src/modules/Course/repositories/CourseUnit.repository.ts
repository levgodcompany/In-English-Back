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

  async findAllCourseByIdUnitAndIdStudent(idUnit: number, idStudent: number) {
    try {
      type Module = {
        id: number;
        title: string;
        description: string;
        idCourse: number;
        order: number;
        fileURL: string | null;
        typeFile: string | null;
      };
      
      type CourseAndModules = {
        id: number;
        title: string;
        description: string;
        order: number;
        idUnit: number;
        modules: Module[];
      };
      
      const rawResults = await prisma.$queryRaw<any[]>`
        SELECT 
          c.id AS course_id, 
          c.title AS course_title, 
          c.description AS course_description, 
          c."order" AS course_order, 
          c."idUnit" AS course_idUnit,
          m.id AS module_id, 
          m.title AS module_title, 
          m."order" AS module_order, 
          m."typeFile" AS module_typefile, 
          m."fileURL" AS module_fileurl, 
          m.description AS module_description
        FROM public."Courses" c
        LEFT JOIN public."Modules" m ON c.id = m."idCourse"
        INNER JOIN public."CohortModule" cm ON m.id = cm."idModule"
        INNER JOIN public."Cohorts" ct ON cm."idCohort" = ct.id
        INNER JOIN public."CohortStudent" cs ON ct.id = cs."idCohort"
        INNER JOIN public."Students" s ON cs."idStudent" = s.id
        WHERE c."idUnit" = ${idUnit} AND s.id = ${idStudent};
      `;
      
      const groupedCourses: CourseAndModules[] = [];
      
      rawResults.forEach((result) => {
        let course = groupedCourses.find(c => c.id === result.course_id);
      
        if (!course) {
          course = {
            id: result.course_id,
            title: result.course_title,
            description: result.course_description,
            order: result.course_order,
            idUnit: result.course_idUnit,
            modules: []
          };
          groupedCourses.push(course);
        }
      
        if (result.module_id) {
          course.modules.push({
            id: result.module_id,
            title: result.module_title,
            description: result.module_description,
            idCourse: result.course_id,
            order: result.module_order,
            fileURL: result.module_fileurl,
            typeFile: result.module_typefile
          });
        }
      });
      
      return groupedCourses;
      
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }
}

export default new CourseUnitRepository();
