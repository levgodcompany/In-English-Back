import { Level } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { ICrudRepository } from "../../../utilities";
import UnitRepository from "../../Unit/repositories/Unit.repository";
import ExamLevelRepository from "../../ExamLevel/repositories/ExamLevel.repository";
import SuscriptionRepository from "../../Suscription/repositories/Suscription.repository";
import CohortsRepository from "../../Cohorts/Repositoryies/Cohorts.repository";

class LevelRepository implements ICrudRepository<Level> {
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

  async findOneAll(id: number) {
    try {
      const level = await prisma.level.findUnique({
        where: { id },
        include: {
          typeLevelLevels: {
            include: {
              typeLevel: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                },
              },
            },
          },
          suscriptions: {
            select: {
              id: true,
              title: true,
              description: true,
              amount: true,
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
              discountPercentage: true,
              numInstallments: true,
            },
          },
        },
      });
      if (!level) {
        throw new Error(`No se encontró el Level con ID: ${id}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Level con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const teachers = await prisma.level.findMany();
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }

  async create(data: Level) {
    try {
      const existingLevel = await prisma.level.findFirst({
        where: { title: data.title },
      });
      if (existingLevel) {
        throw new Error(`Ya existe un Level con el titulo ${data.title}`);
      }
      const newLevel = await prisma.level.create({ data });
      return newLevel;
    } catch (error) {
      throw new Error(`Error al crear el Level: ${error}`);
    }
  }

  async update(id: number, data: Partial<Level>) {
    try {
      const updatedLevel = await prisma.level.update({
        where: { id },
        data,
      });
      return updatedLevel;
    } catch (error) {
      throw new Error(`Error al actualizar el Level con ID ${id}: ${error}`);
    }
  }

  async delete(levelId: number) {
    try {
      // Eliminar todas las Cohorts relacionadas con el nivel
      await prisma.cohort.deleteMany({
        where: {
          idLevel: levelId,
        },
      });

      // Eliminar todos los Suscriptions relacionadas con el nivel
      await prisma.suscription.deleteMany({
        where: {
          idLevel: levelId,
        },
      });

      // Eliminar todas las relaciones con profesores en LevelTeacher
      await prisma.levelTeacher.deleteMany({
        where: {
          levelId: levelId,
        },
      });

      // Eliminar todos los Examenes relacionados con el nivel
      await prisma.examLevel.deleteMany({
        where: {
          idLevel: levelId,
        },
      });

      // Eliminar todas las relaciones con estudiantes en LevelStudent
      await prisma.levelStudent.deleteMany({
        where: {
          levelId: levelId,
        },
      });

      // Finalmente, eliminar el Level
      return await prisma.level.delete({
        where: {
          id: levelId,
        },
      });
    } catch (error) {
      throw new Error(`Error al eliminar el Level con ID ${levelId}: ${error}`);
    }
  }

  public async deleteLevelWithRelations(idLevel: number): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        const unities = await p.unit.findMany({
          where: {
            idLevel: idLevel,
          },
          select: {
            id: true,
          },
        });

        if (unities.length > 0) {
          // Eliminacion de relacion Level y Unit
          await UnitRepository.deleteUnitById(unities.map((u) => u.id));
        }

        const exams = await p.examLevel.findMany({
          where: {
            idLevel,
          },
        });

        if (exams.length > 0) {
          {
            // Eliminacion de relacion ExamLevel y Level
            await ExamLevelRepository.deleteExamLevelById(
              exams.map((e) => e.id)
            );
          }
        } else {
          console.log("-----------------------");
          console.log("EXAMS VACIO", exams.length);
          console.log("-----------------------");
        }

        const suscriptios = await p.suscription.findMany({
          where: {
            idLevel,
          },
        });

        if (suscriptios.length > 0) {
          // Eliminacion de realacion Suscription y Level
          await SuscriptionRepository.deleteSuscriptionById(
            suscriptios.map((s) => s.id)
          );
        } else {
          console.log("-----------------------");
          console.log("SUSCRIPTION VACIO", suscriptios.length);
          console.log("-----------------------");
        }

        const cohorts = await p.cohort.findMany({
          where: {
            idLevel: idLevel,
          },
        });

        if (cohorts.length > 0) {
          // Eliminacion de realacion Cohort y Level
          await CohortsRepository.deleteCohortById(cohorts.map((c) => c.id));
        } else {
          console.log("-----------------------");
          console.log("COHORT VACIO", cohorts.length);
          console.log("-----------------------");
        }

        // Eliminacion de realacion Student y Level
        await p.levelStudent.deleteMany({
          where: {
            levelId: idLevel,
          },
        });

        // Eliminacion de realacion Teacher y Level
        await p.levelTeacher.deleteMany({
          where: {
            levelId: idLevel,
          },
        });

        // Finalmente, eliminar el Level
        await p.level.delete({
          where: {
            id: idLevel,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando el level con ID ${idLevel}:`, error);
      throw error;
    }
  }

  public async deleteLevelById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        const unities = await p.unit.findMany({
          where: {
            idLevel: {
              in: ids,
            },
          },
          select: {
            id: true,
          },
        });

        if (unities.length > 0) {
          // Eliminacion de relacion Level y Unit
          await UnitRepository.deleteUnitByIdCascade(
            unities.map((u) => u.id),
            prisma
          );
        }

        // Eliminacion de realacion Student y Level
        await p.levelStudent.deleteMany({
          where: {
            levelId: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Teacher y Level
        await p.levelTeacher.deleteMany({
          where: {
            levelId: {
              in: ids,
            },
          },
        });

        const exams = await p.examLevel.findMany({
          where: {
            idLevel: {
              in: ids,
            },
          },
        });

        if (exams.length > 0) {
          {
            // Eliminacion de relacion ExamLevel y Level
            await ExamLevelRepository.deleteExamLevelByIdCascade(
              exams.map((e) => e.id),
              prisma
            );
          }
        }

        // Finalmente, eliminar el Level
        await p.level.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la Level con ID ${ids}:`, error);
      throw error;
    }
  }
}

export default new LevelRepository();
