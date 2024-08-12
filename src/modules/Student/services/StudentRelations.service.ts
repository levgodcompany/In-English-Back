import { prisma } from "../../../../prisma";
import { StudentRelationsRepository } from "../repositories";

class StudentRelations {
  async findOneStudentWithRelations(id: number, relations: string[]) {
    try {
      const includeRelations = relations.reduce((acc, relation) => {
        acc[relation] = true;
        return acc;
      }, {} as Record<string, boolean>);

      const student = await prisma.student.findUnique({
        where: { id },
        include: includeRelations,
      });
      return student;
    } catch (error) {
      throw new Error(`Error al buscar el Student con relaciones: ${error}`);
    }
  }

  async findAllStudentsWithRelations(relations: string[]) {
    try {
      const includeRelations = relations.reduce((acc, relation) => {
        acc[relation] = true;
        return acc;
      }, {} as Record<string, boolean>);

      const students = await prisma.student.findMany({
        include: includeRelations,
      });
      return students;
    } catch (error) {
      throw new Error(
        `Error al buscar los estudiantes con sus relaciones: ${error}`
      );
    }
  }

  async findAllAndLevels() {
    try {
      const students = await StudentRelationsRepository.findAllAndLevels();
      return students;
    } catch (error) {
      throw new Error("" + error);
    }
  }

}

export default new StudentRelations();
