import { prisma } from "../../../../prisma";
import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllAndLevels() {
    try {
      const students = await StudentRelationsRepository.findAllAndLevels();
      return students;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}

export default new StudentRelations();
