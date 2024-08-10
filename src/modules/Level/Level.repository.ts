import { Level } from "@prisma/client";
import { prisma } from "../../../prisma";

class LevelRepository {
  async findOne(id: number) {
    try {
      const level = await prisma.level.findUnique({ where: { id } });
      if (!level) {
        throw new Error(`No se encontró el Level con ID: ${id}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Level con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const teachers = await prisma.level.findMany();
      if (teachers.length === 0) {
        throw new Error("No se encontraron Teachers");
      }
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Teachers: ${error}`);
    }
  }

  async create(data: Level) {
    try {
      const existingLevel = await prisma.level.findFirst({
        where: { title: data.title },
      });
      if (existingLevel) {
        throw new Error(`Ya existe un Level con el titulo ${data.title}`);
      }
      const newLevel = await prisma.level.create({ data });
      return newLevel;
    } catch (error) {
      throw new Error(`Error al crear el Level: ${error}`);
    }
  }

  async update(id: number, data: Partial<Level>) {
    try {
      const updatedLevel = await prisma.level.update({
        where: { id },
        data,
      });
      return updatedLevel;
    } catch (error) {
      throw new Error(`Error al actualizar el Level con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedLevel = await prisma.level.delete({ where: { id } });
      return deletedLevel;
    } catch (error) {
      throw new Error(`Error al eliminar el Level con ID ${id}: ${error}`);
    }
  }
}

export default new LevelRepository();
