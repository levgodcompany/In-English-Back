import { Suscription } from "@prisma/client";
import { prisma } from "../../../prisma";

class LevelRelationRepository {
  async findOne(id: number) {
    try {
      const level = await prisma.level.findUnique({ where: { id } });
      if (!level) {
        throw new Error(`No se encontró el Level con ID: ${id}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Level con ID ${id}: ${error}`);
    }
  }

  async findAllSuscriptionByIdLevel(idLevel: number) {
    try {
      const levels = await prisma.suscription.findMany({
        where: {
          idLevel: idLevel,
        },
        include: {
          benefits: {
            include: {
              benefit: {
                select: {
                  id: true,
                  description: true,
                },
              },
            },
          },
          paymentMethods: {
            include: {
              paymentMethod: {
                select: {
                  id: true,
                  description: true,
                },
              },
            },
          },
        },
      });
      return levels;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }

  async findTypeLevelsByIdLevel(idLevel: number) {
    try {
      const level = await prisma.typeLevelLevel.findMany({
        where: { idLevel: idLevel },
        include: {
          typeLevel: {
            select: {
              id: true,
              title: true,
              description: true,
            },
          },
        },
      });
      if (!level) {
        throw new Error(`No se encontró el Level con ID: ${idLevel}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Level con ID ${idLevel}: ${error}`);
    }
  }
}

export default new LevelRelationRepository();
