import { Unit } from "@prisma/client";
import { prisma } from "../../../prisma";

class UnitRepository {
  async create(data: Unit) {
    try {
      const unit = await prisma.unit.create({
        data,
      });

      return unit;
    } catch (error) {
      throw new Error(`Error al crear la unidad: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      const unit = await prisma.unit.findUnique({
        where: { id },
        include: {
          courses: true,
          teachers: true,
        },
      });
      return unit;
    } catch (error) {
      throw new Error(`Error al buscar la unidad: ${error}`);
    }
  }

  async findAll() {
    try {
      const unit = await prisma.unit.findMany();
      return unit;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      const unities = await prisma.unit.findMany({
        where: { idLevel: idLevel },
      });
      return unities;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async update(id: number, data: Unit) {
    try {
      const unit = await prisma.unit.update({ where: { id }, data });
      return unit;
    } catch (error) {
      throw new Error(`Error al actualizar la unidad: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const unit = await prisma.unit.delete({ where: { id } });
      return unit;
    } catch (error) {
      throw new Error(`Error al eliminar la unidad: ${error}`);
    }
  }

  // Métodos específicos para asignación de entidades
}

export default new UnitRepository();
