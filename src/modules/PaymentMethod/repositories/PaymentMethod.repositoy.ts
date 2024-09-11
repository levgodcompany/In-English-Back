import { PaymentMethod } from "@prisma/client";
import { prisma } from "../../../prisma";

class PaymentMethodRepositoy {
  async create(data: PaymentMethod) {
    try {
      return await prisma.paymentMethod.create({ data });
    } catch (error) {
      throw new Error(`Error al crear un paymentMethod: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.paymentMethod.findMany();
    } catch (error) {
      throw new Error(`Error al buscar todas los paymentMethods: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.paymentMethod.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar un paymentMethod: ${error}`);
    }
  }

  async findAllById(id: number[]) {
    try {
      return await prisma.paymentMethod.findMany({ where: { id: { in: id } } });
    } catch (error) {
      throw new Error(`Error al buscar todas los paymentMethod: ${error}`);
    }
  }

  async update(id: number, data: PaymentMethod) {
    try {
      return await prisma.paymentMethod.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error al actualizar un paymentMethod: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await prisma.paymentMethod.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error al eliminar un paymentMethod: ${error}`);
    }
  }
}

export default new PaymentMethodRepositoy();
