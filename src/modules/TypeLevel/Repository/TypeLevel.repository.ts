import { TypeLevel } from "@prisma/client";
import { ICrudRepository } from "../../../utilities";
import { prisma } from "../../../../prisma";

class TypeLevelRepository implements ICrudRepository<TypeLevel> {
  async create(data: TypeLevel): Promise<TypeLevel> {
    const typeLevel = await prisma.typeLevel.create({ data });
    return typeLevel;
  }
  async findOne(id: number): Promise<TypeLevel | null> {
    const typeLevel = await prisma.typeLevel.findUnique({
      where: {
        id,
      },
    });
    return typeLevel;
  }
  async findAll(): Promise<TypeLevel[]> {
    const typeLevel = await prisma.typeLevel.findMany({
      include: {
        typeLevelLevels: {
          include: {
            level: {
              select: {
                id: true,
                title: true,
                description: true
              }
            }
          }
        }
      }
    });
    return typeLevel;
  }
  async update(id: number, data: TypeLevel): Promise<TypeLevel> {
    const typeLevel = await prisma.typeLevel.update({
      where: {
        id,
      },
      data,
    });
    return typeLevel;
  }
  async delete(id: number): Promise<TypeLevel> {
    const typeLevel = await prisma.typeLevel.delete({
      where: {
        id,
      },
    });
    return typeLevel;
  }
}

export default new TypeLevelRepository()