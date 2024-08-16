import { TypeLevel } from "@prisma/client";
import { TypeLevelRepository } from "../Repository";

class TypeLevelService {
  async create(data: TypeLevel) {
    const typeLevel = await TypeLevelRepository.create(data);
    return typeLevel;
  }
  async findOne(id: number): Promise<TypeLevel | null> {
    const typeLevel = await TypeLevelRepository.findOne(id);
    return typeLevel;
  }
  async findAll() {
    const typeLevel = await TypeLevelRepository.findAll();
    return typeLevel;
  }
  async update(id: number, data: TypeLevel) {
    const typeLevel = await TypeLevelRepository.update(id, data);
    return typeLevel;
  }
  async delete(id: number) {
    const typeLevel = await TypeLevelRepository.delete(id);
    return typeLevel;
  }
}

export default new TypeLevelService();
