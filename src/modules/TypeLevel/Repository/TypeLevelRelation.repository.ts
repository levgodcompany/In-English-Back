import { prisma } from "../../../prisma";

class TypeLevelRelationsRepository {
  async assigLevel(idLevel: number, idTypeLevel: number) {
    try {
      const update = await prisma.typeLevel.update({
        where: {
          id: idTypeLevel,
        },
        data: {
          typeLevelLevels: {
            connectOrCreate: {
              where: {
                idLevel_idTypeLevel: {
                  idLevel,
                  idTypeLevel,
                },
              },
              create: {
                idLevel,
              },
            },
          },
        },
      });
      return update;
    } catch (error) {
      throw error;
    }
  }

  async remove(idLevel: number, idTypeLevel: number) {
    try {
      await prisma.typeLevelLevel.delete({
        where: {
          idLevel_idTypeLevel: {
            idLevel,
            idTypeLevel,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new TypeLevelRelationsRepository();
