import { prisma } from "../../../../prisma";

class LandingRepository {
  async findAllLevels() {
    try {
      const levels = await prisma.typeLevel.findMany({
        include: {
          typeLevelLevels: {
            include: {
              level: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                  order: true,
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

  async findAllLevelsBasic() {
    try {
      const levels = await prisma.level.findMany({
        select: {
          id: true,
          title: true,
        },
      });
      return levels;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }

  async findCohortBasic(id: number) {
    try {
      const levels = await prisma.cohort.findUnique({
        where: {
          id
        },
        select: {
          id: true,
          title: true,
          
        }
      })
      return levels;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }

  async findAllTeacher() {
    try {
      const levels = await prisma.teacher.findMany({
        select: {
          id: true,
          name: true,
          lastName: true,
          imgUrl: true,
        },
      });
      return levels;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
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

  async findAllCohortsByIdLevel(idLevel: number) {
    try {
      const levels = await prisma.level.findFirst({
        where: {
          id: idLevel,
        },
        include: {
          teachers: {
            include: {
              teacher: {
                select: {
                  id: true,
                  name: true,
                  lastName: true,
                  imgUrl: true,
                },
              },
            },
          },
          cohorts: {
            select: {
              id: true,
              title: true,
              description: true,
              endDate: true,
              startDate: true,
              registrationEndDate: true,
              registrationStartDate: true,
            },
          },
        },
      });
      return levels;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }
}

export default new LandingRepository();
