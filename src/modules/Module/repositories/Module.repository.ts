import { Module } from "@prisma/client";
import { prisma } from "../../../../prisma";

class ModuleRepository {
  async create(data: Module) {
    try {
      const module = await prisma.module.create({
        data,
      });

      return module;
    } catch (error) {
      throw new Error(`Error al crear el module: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      const module = await prisma.module.findUnique({ where: { id } });
      return module;
    } catch (error) {
      throw new Error(`Error al buscar el module: ${error}`);
    }
  }

  async findAll() {
    try {
      const modules = await prisma.module.findMany();
      return modules;
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async findAllByIdCourse(idCourse: number) {
    try {
      const modules = await prisma.module.findMany({
        where: {
          idCourse: idCourse,
        },
      });
      return modules;
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async update(id: number, data: Module) {
    try {
      const module = await prisma.module.update({ where: { id }, data });
      return module;
    } catch (error) {
      throw new Error(`Error al actualizar el module: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const module = await prisma.module.delete({ where: { id } });
      return module;
    } catch (error) {
      throw new Error(`Error al eliminar el module: ${error}`);
    }
  }
}

export default new ModuleRepository();
