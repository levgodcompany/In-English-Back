import { ExamLevel } from "@prisma/client";
import { prisma } from "../../../prisma";

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
            select:{
              name: true,
              lastName: true
            }
          },
          level: {
            select: {
              title: true
            }
          }
        }
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
          idLevel: idLevel
        },
        include: {
          teacher: {
            select:{
              name: true,
              lastName: true
            }
          },
          level: {
            select: {
              title: true
            }
          }
        }
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

  async delete(id: number) {
    try {
      const deletedLevel = await prisma.examLevel.delete({ where: { id } });
      return deletedLevel;
    } catch (error) {
      throw new Error(`Error al eliminar el Examen con ID ${id}: ${error}`);
    }
  }
}

export default new ExamLevelRepository();
