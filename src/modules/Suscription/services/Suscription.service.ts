import { Suscription } from "@prisma/client";
import { SuscriptionRepository } from "../repositories";

class SuscriptionService {
  async create(data: Suscription) {
    try {
      return await SuscriptionRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear una suscription: ${error}`);
    }
  }

  async findAll() {
    try {
      return await SuscriptionRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar todas las suscriptions: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await SuscriptionRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }

  async update(id: number, data: Suscription) {
    try {
      return await SuscriptionRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar una suscription: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return await SuscriptionRepository.deleteSuscriptionWithRelations(id);
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }
}

export default new SuscriptionService();
