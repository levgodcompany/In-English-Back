import { ExamLevel, PrismaClient } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { p } from "../../../utilities/CrudRepository";

class ExamLevelRepository {
  async findOne(id: number) {
    try {
      const level = await prisma.examLevel.findUnique({ where: { id } });
      if (!level) {
        throw new Error(`No se encontró el Examen con ID: ${id}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Examen con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const teachers = await prisma.examLevel.findMany({
        include: {
          teacher: {
            select: {
              name: true,
              lastName: true,
            },
          },
          level: {
            select: {
              title: true,
            },
          },
        },
      });
      if (teachers.length === 0) {
        throw new Error("No se encontraron Teachers");
      }
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Examen: ${error}`);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      const teachers = await prisma.examLevel.findMany({
        where: {
          idLevel: idLevel,
        },
        include: {
          teacher: {
            select: {
              name: true,
              lastName: true,
            },
          },
          level: {
            select: {
              title: true,
            },
          },
        },
      });
      if (teachers.length === 0) {
        throw new Error("No se encontraron Teachers");
      }
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Examen: ${error}`);
    }
  }

  async create(data: ExamLevel) {
    try {
      const newLevel = await prisma.examLevel.create({ data });
      return newLevel;
    } catch (error) {
      throw new Error(`Error al crear el Examen: ${error}`);
    }
  }

  async update(id: number, data: Partial<ExamLevel>) {
    try {
      const updatedLevel = await prisma.examLevel.update({
        where: { id },
        data,
      });
      return updatedLevel;
    } catch (error) {
      throw new Error(`Error al actualizar el Examen con ID ${id}: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(id: number) {
    try {
      const deletedLevel = await prisma.examLevel.delete({ where: { id } });
      return deletedLevel;
    } catch (error) {
      throw new Error(`Error al eliminar el Examen con ID ${id}: ${error}`);
    }
  }

  public async deleteExamLevelWithRelations(
    idExamLevel: number
  ): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminacion de realacion ExamLevel y ExamSubmissionLevel
        await p.examSubmissionLevel.deleteMany({
          where: {
            idExamLevel,
          },
        });
        // Finalmente, eliminar la Cohort
        await p.cohort.delete({
          where: {
            id: idExamLevel,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${idExamLevel}:`, error);
      throw error;
    }
  }

  public async deleteExamLevelById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminacion de realacion ExamLevel y ExamSubmissionLevel
        await p.examSubmissionLevel.deleteMany({
          where: {
            idExamLevel: {
              in: ids,
            },
          },
        });
        // Finalmente, eliminar la Cohort
        await p.cohort.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }

  public async deleteExamLevelWithRelationsCascade(
    idExamLevel: number,
    prismaInstance: PrismaClient
  ): Promise<void> {
    try {
      await prismaInstance.$transaction(async (p) => {
        // Eliminacion de realacion ExamLevel y ExamSubmissionLevel
        await p.examSubmissionLevel.deleteMany({
          where: {
            idExamLevel,
          },
        });
        // Finalmente, eliminar la Cohort
        await p.cohort.delete({
          where: {
            id: idExamLevel,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${idExamLevel}:`, error);
      throw error;
    }
  }

  public async deleteExamLevelByIdCascade(ids: number[], p: p): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
        // Eliminacion de realacion ExamLevel y ExamSubmissionLevel
        await p.examSubmissionLevel.deleteMany({
          where: {
            idExamLevel: {
              in: ids,
            },
          },
        });
        // Finalmente, eliminar la Cohort
        await p.cohort.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
        console.log("-----------------------");
        console.log("EXAMEN LEVEL ELIMINADO");
        console.log("-----------------------");
      // });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }
}

export default new ExamLevelRepository();
