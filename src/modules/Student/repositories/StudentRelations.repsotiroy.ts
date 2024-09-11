import { prisma } from "../../../prisma";

class StudentRelations {
  async findOneStudentWithRelations(id: number, relations: string[]) {
    try {
      const includeRelations = relations.reduce((acc, relation) => {
        acc[relation] = true;
        return acc;
      }, {} as Record<string, boolean>);

      const student = await prisma.student.findUnique({
        where: {
          id,
        },
        include: includeRelations,
      });

      return student;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // Metodo para obtener todos los Students
  async findAllAndLevels() {
    try {
      const students = await prisma.student.findMany({
        include: {
          levels: {
            include: {
              level: {
                select: {
                  title: true,
                  id: true,
                },
              },
            },
          },
        },
      });
      return students;
    } catch (error) {
      throw new Error(`Error al buscar todos los Student${error}`);
    }
  }

  async findAllLevelsCohorts(idLevel: number, idStudent: number) {
    try {
      const students = await prisma.cohort.findMany({
        where: {
          idLevel: idLevel
        },
      })
      return students;
    } catch (error) {
      throw new Error(`Error al buscar todos los Student${error}`);
    }
  } 

  async findAllAndLevelsPreRegister() {
    try {
      const students = await prisma.student.findMany();
      return students;
    } catch (error) {
      throw new Error(`Error al buscar todos los Student${error}`);
    }
  }

  // Metodo para obtener todos los student con sus relaciones
  async findAllStudentsWithRelations(relations: string[]) {
    try {
      const includeRelations = relations.reduce((acc, relation) => {
        acc[relation] = true;
        return acc;
      }, {} as Record<string, boolean>);

      let students = await prisma.student.findMany({
        include: includeRelations,
      });

      return students;
    } catch (error) {
      throw new Error(
        `Error al buscar los estudiantes con sus relaciones${error}`
      );
    }
  }

  // El total de modulos que a completado un student de un curso
  async totalModuleToCourse(idCourse: number, idStudent: number) {
    try {
      type Total = {
        id: number;
        total: number;
      };

      const rawResults = await prisma.$queryRaw<Total[]>`
          SELECT 
	          s.id,
	          COUNT(ms."moduleId") as total
          FROM public."Students" s
          INNER JOIN public."ModuleStudent" ms ON ms."studentId" = s.id
          INNER JOIN public."Modules" m ON m.id = ms."moduleId"
          WHERE m."idCourse" = ${idCourse} AND s.id = ${idStudent}
          GROUP BY s.id;
        `;

      return rawResults;
    } catch (error) {
      throw new Error(
        `Error al buscar el total de modulo completados por un estudiante: ${error}`
      );
    }
  }
}

export default new StudentRelations();
