import { PrismaClient, Suscription } from "@prisma/client";
import { prisma } from "../../../prisma";
import { p } from "../../../utilities/CrudRepository";

class SuscriptionRepository {
  async create(data: Suscription) {
    try {
      return await prisma.suscription.create({ data });
    } catch (error) {
      throw new Error(`Error al crear una suscription: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.suscription.findMany();
    } catch (error) {
      throw new Error(`Error al buscar todas las suscriptions: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.suscription.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }

  async update(id: number, data: Suscription) {
    try {
      return await prisma.suscription.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error al actualizar una suscription: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(id: number) {
    try {
      return await prisma.suscription.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error al buscar una suscription: ${error}`);
    }
  }

  public async deleteSuscriptionWithRelations(
    idSuscription: number
  ): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Eliminacion de realacion Suscription y Benefit
        await p.suscriptionBenefit.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Eliminacion de realacion Suscription y PaymentMethod
        await p.suscriptionPaymentMethod.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Eliminacion de realacion Suscription y Student
        await p.studentSuscription.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Finalmente, eliminar la Suscription
        await p.suscription.delete({
          where: {
            id: idSuscription,
          },
        });
      });
    } catch (error) {
      console.error(
        `Error eliminando la Suscription con ID ${idSuscription}:`,
        error
      );
      throw error;
    }
  }

  public async deleteSuscriptionById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        await p.suscriptionBenefit.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Suscription y PaymentMethod
        await p.suscriptionPaymentMethod.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Suscription y Student
        await p.studentSuscription.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar la Suscription
        await p.suscription.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }

  public async deleteSuscriptionWithRelationsCascade(
    idSuscription: number,
    prismaInstance: PrismaClient
  ): Promise<void> {
    try {
      await prismaInstance.$transaction(async (p) => {
        // Eliminacion de realacion Suscription y Benefit
        await p.suscriptionBenefit.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Eliminacion de realacion Suscription y PaymentMethod
        await p.suscriptionPaymentMethod.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Eliminacion de realacion Suscription y Student
        await p.studentSuscription.deleteMany({
          where: {
            idSuscription,
          },
        });

        // Finalmente, eliminar la Suscription
        await p.suscription.delete({
          where: {
            id: idSuscription,
          },
        });
      });
    } catch (error) {
      console.error(
        `Error eliminando la Suscription con ID ${idSuscription}:`,
        error
      );
      throw error;
    }
  }

  public async deleteSuscriptionByIdCascade(ids: number[], p: p): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
        await p.suscriptionBenefit.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Suscription y PaymentMethod
        await p.suscriptionPaymentMethod.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Suscription y Student
        await p.studentSuscription.deleteMany({
          where: {
            idSuscription: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar la Suscription
        await p.suscription.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
        console.log("-----------------------");
        console.log("SUSCRIPTION ELIMINADO");
        console.log("-----------------------");
      // });
    } catch (error) {
      console.error(`Error eliminando la cohort con ID ${ids}:`, error);
      throw error;
    }
  }
}

export default new SuscriptionRepository();
