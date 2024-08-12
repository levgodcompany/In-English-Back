import { Benefit } from "@prisma/client";
import { BenefitRepository } from "../repositories";

class BenefitServices {
  async create(data: Benefit) {
    try {
      return await BenefitRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear un benefit: ${error}`);
    }
  }

  async findAll() {
    try {
      return await BenefitRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar todas los benefits: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await BenefitRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar un benefit: ${error}`);
    }
  }

  async update(id: number, data: Benefit) {
    try {
      return await BenefitRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar un benefit: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await BenefitRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar un benefit: ${error}`);
    }
  }
}

export default new BenefitServices();
