import { PaymentMethod } from "@prisma/client";
import PaymentMethodRepositoy from "./PaymentMethod.repositoy";

class PaymentMethodServices {
  async create(data: PaymentMethod) {
    try {
      return await PaymentMethodRepositoy.create(data);
    } catch (error) {
      throw new Error(`Error al crear un paymentMethod: ${error}`);
    }
  }

  async findAll() {
    try {
      return await PaymentMethodRepositoy.findAll();
    } catch (error) {
      throw new Error(`Error al buscar todas los paymentMethods: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await PaymentMethodRepositoy.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar un paymentMethod: ${error}`);
    }
  }

  async update(id: number, data: PaymentMethod) {
    try {
      return await PaymentMethodRepositoy.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar un paymentMethod: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await PaymentMethodRepositoy.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar un paymentMethod: ${error}`);
    }
  }
}

export default new PaymentMethodServices();
