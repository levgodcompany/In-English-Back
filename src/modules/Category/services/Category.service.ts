import { Category } from "@prisma/client";
import { CategoryRepository } from "../repository";

class CategoryService {
  async create(data: Category) {
    const newClass = await CategoryRepository.create(data);
    return newClass;
  }

  async findOne(id: number) {
    const category = await CategoryRepository.findOne(id);

    return category;
  }

  async findAll() {
    const category = await CategoryRepository.findAll();

    return category;
  }

  async delete(id: number) {
    return await CategoryRepository.delete(id);
  }
  async update(id: number, data: Category) {
    return await CategoryRepository.update(id, data);
  }
}

export default new CategoryService();
