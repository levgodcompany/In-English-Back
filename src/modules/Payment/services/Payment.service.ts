import { Payment } from "@prisma/client";
import { PaymentRepository } from "../repositories";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class PaymentServices {
  async create(data: Payment) {
    try {
      return await PaymentRepository.create(data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await PaymentRepository.findAll();
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await PaymentRepository.findOne(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Payment) {
    try {
      return await PaymentRepository.update(id, data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      return await PaymentRepository.delete(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new PaymentServices();
