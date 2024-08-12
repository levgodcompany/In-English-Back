import { Suscription } from "@prisma/client";
import { prisma } from "../../../../prisma";

class SuscriptionRepository {
  async create(data: Suscription) {
    try {
      return await prisma.suscription.create({ data });
    } catch (error) {
      throw new Error(`Error al crear una suscription: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.suscription.findMany();
    } catch (error) {
      throw new Error(`Error al buscar todas las suscriptions: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.suscription.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }

  async update(id: number, data: Suscription) {
    try {
      return await prisma.suscription.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error al actualizar una suscription: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await prisma.suscription.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }
}

export default new SuscriptionRepository();
