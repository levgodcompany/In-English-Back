import { prisma } from "../../../../prisma";

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
}

export default new StudentRelations();
