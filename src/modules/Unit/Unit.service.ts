import { Unit } from "@prisma/client";
import UnitRepository from "./Unit.repository";

class UnitService {
  async create(data: Unit) {
    try {
      return UnitRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear la unidad: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return UnitRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar la unidad: ${error}`);
    }
  }

  async findAll() {
    try {
      return UnitRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      return UnitRepository.findAllByIdLevel(idLevel);
    } catch (error) {
      throw new Error(
        `Error al buscar las unidad por el idLevel ID ${idLevel}: ${error}`
      );
    }
  }

  async update(id: number, data: Unit) {
    try {
      return UnitRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar la unidad: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return UnitRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar la unidad: ${error}`);
    }
  }
}

export default new UnitService();
