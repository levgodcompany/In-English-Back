import { ClassOnlive } from "@prisma/client";
import { prisma } from "../../../prisma";

class ClassOnliveRepository {
  private table = prisma.classOnlive;
  async create(data: ClassOnlive) {
    const newClass = await this.table.create({ data });
    return newClass;
  }

  async findOne(id: number) {
    const classOnlive = await this.table.findUnique({
      where: {
        id,
      },
    });

    return classOnlive;
  }
  async findAllClassOnLive(idCohort: number) {
    try {
      const totalClasses = await prisma.classOnlive.findMany({
        where: {
          idCohort,
        },
      });
      return totalClasses;
    } catch (error) {
      throw new Error(
        `Error al buscar todos las clases de la cohort: ${error}`
      );
    }
  }

  async findAll() {
    const classOnlive = await this.table.findMany();

    return classOnlive;
  }

  async delete(id: number) {
    const deletClass = await this.table.delete({
      where: {
        id,
      },
    });

    return deletClass;
  }
}

export default new ClassOnliveRepository();
