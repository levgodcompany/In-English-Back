import { Category } from "@prisma/client";
import { prisma } from "../../../prisma";

class CategoryRepository {
  private table = prisma.category;
  private tcategoryTypeLevel = prisma.categoryTypeLevel;

  async create(data: Category) {
    const newCategory = await this.table.create({ data });
    return newCategory;
  }

  async findOne(id: number) {
    const category = await this.table.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async findAll() {
    const category = await this.table.findMany();

    return category;
  }

  async delete(id: number) {
    const deletClass = await this.table.delete({
      where: {
        id,
      },
    });

    return deletClass;
  }

  async update(id: number, data: Category) {
    const deletClass = await this.table.update({
      where: {
        id,
      },
      data,
    });

    return deletClass;
  }

}

export default new CategoryRepository();
