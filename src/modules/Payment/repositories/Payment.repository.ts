import { Payment } from "@prisma/client";
import { prisma } from "../../../../prisma";

class PaymentRepository {
  async create(data: Payment) {
    try {
      return await prisma.payment.create({ data });
    } catch (error) {
      throw new Error(`Error al crear un payment: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.payment.findMany();
    } catch (error) {
      throw new Error(`Error al buscar todas los payments: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.payment.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar un payment: ${error}`);
    }
  }

  async update(id: number, data: Payment) {
    try {
      return await prisma.payment.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error al actualizar un payment: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await prisma.payment.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error al eliminar un payment: ${error}`);
    }
  }
}

export default new PaymentRepository();
