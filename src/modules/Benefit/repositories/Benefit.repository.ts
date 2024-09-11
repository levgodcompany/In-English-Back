import { Benefit } from "@prisma/client";
import { prisma } from "../../../prisma";

class BenefitRepository {
  async create(data: Benefit) {
    try {
      return await prisma.benefit.create({ data });
    } catch (error) {
      throw new Error(`Error al crear un benefit: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.benefit.findMany();
    } catch (error) {
      throw new Error(`Error al buscar todas los benefits: ${error}`);
    }
  }

  async findAllById(id: number[]) {
    try {
      return await prisma.benefit.findMany({ where: { id: { in: id } } });
    } catch (error) {
      throw new Error(`Error al buscar todas los benefits: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.benefit.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar un benefit: ${error}`);
    }
  }

  async update(id: number, data: Benefit) {
    try {
      return await prisma.benefit.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error al actualizar un benefit: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await prisma.benefit.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error al eliminar un benefit: ${error}`);
    }
  }
}

export default new BenefitRepository();
