import { Module, PrismaClient } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { p } from "../../../utilities/CrudRepository";

class ModuleRepository {
  async create(data: Module) {
    try {
      const module = await prisma.module.create({
        data,
      });

      return module;
    } catch (error) {
      throw new Error(`Error al crear el module: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      const module = await prisma.module.findUnique({ where: { id } });
      return module;
    } catch (error) {
      throw new Error(`Error al buscar el module: ${error}`);
    }
  }

  async findAll() {
    try {
      const modules = await prisma.module.findMany();
      return modules;
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async findAllByIdCourse(idCourse: number) {
    try {
      const modules = await prisma.module.findMany({
        where: {
          idCourse: idCourse,
        },
      });
      return modules;
    } catch (error) {
      throw new Error(`Error al buscar los modules: ${error}`);
    }
  }

  async update(id: number, data: Module) {
    try {
      const module = await prisma.module.update({ where: { id }, data });
      return module;
    } catch (error) {
      throw new Error(`Error al actualizar el module: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(id: number) {
    try {
      prisma.$transaction(async (p) => {
        // Eliminar relaciones de los módulos con estudiantes
        await p.moduleStudent.deleteMany({
          where: {
            moduleId: id,
          },
        });

        // Eliminar relaciones de los módulos con profesores
        await p.moduleTeacher.deleteMany({
          where: {
            moduleId: id,
          },
        });

        // Eliminar relaciones de cohortes con módulos
        await p.cohortModule.deleteMany({
          where: {
            idModule: id,
          },
        });

        // Finalmente, eliminar los módulos
        await p.module.deleteMany({
          where: {
            id: id,
          },
        });
      });
    } catch (error) {
      console.error("Error al eliminar los módulos:", error);
      throw new Error("No se pudieron eliminar los módulos.");
    }
  }

  async deleteModuleWithRelations(moduleId: number): Promise<void> {
    try {
      prisma.$transaction(async (p) => {
        // Eliminar relaciones de los módulos con estudiantes
        await p.moduleStudent.deleteMany({
          where: {
            moduleId,
          },
        });

        // Eliminar relaciones de los módulos con profesores
        await p.moduleTeacher.deleteMany({
          where: {
            moduleId,
          },
        });

        // Eliminar relaciones de cohortes con módulos
        await p.cohortModule.deleteMany({
          where: {
            idModule: moduleId,
          },
        });

        // Finalmente, eliminar los módulos
        await p.module.delete({
          where: {
            id: moduleId,
          },
        });
      });

      console.log("Módulos y sus relaciones eliminados con éxito");
    } catch (error) {
      console.error("Error al eliminar los módulos:", error);
      throw new Error("No se pudieron eliminar los módulos.");
    }
  }
  async deleteModulesByIds(ids: number[]): Promise<void> {
    try {
      if (ids.length > 0) {
        prisma.$transaction(async (p) => {
          // Eliminar relaciones de los módulos con estudiantes
          await p.moduleStudent.deleteMany({
            where: {
              moduleId: {
                in: ids,
              },
            },
          });

          // Eliminar relaciones de los módulos con profesores
          await p.moduleTeacher.deleteMany({
            where: {
              moduleId: {
                in: ids,
              },
            },
          });

          // Eliminar relaciones de cohortes con módulos
          await p.cohortModule.deleteMany({
            where: {
              idModule: {
                in: ids,
              },
            },
          });

          // Finalmente, eliminar los módulos
          await p.module.deleteMany({
            where: {
              id: {
                in: ids,
              },
            },
          });
        });
      }

      console.log("Módulos y sus relaciones eliminados con éxito");
    } catch (error) {
      console.error("Error al eliminar los módulos:", error);
      throw new Error("No se pudieron eliminar los módulos.");
    }
  }

  async deleteModuleWithRelationsCascade(moduleId: number, prismaInstance: PrismaClient): Promise<void> {
    try {
      prismaInstance.$transaction(async (p) => {
        // Eliminar relaciones de los módulos con estudiantes
        await p.moduleStudent.deleteMany({
          where: {
            moduleId,
          },
        });

        // Eliminar relaciones de los módulos con profesores
        await p.moduleTeacher.deleteMany({
          where: {
            moduleId,
          },
        });

        // Eliminar relaciones de cohortes con módulos
        await p.cohortModule.deleteMany({
          where: {
            idModule: moduleId,
          },
        });

        // Finalmente, eliminar los módulos
        await p.module.delete({
          where: {
            id: moduleId,
          },
        });
      });

      console.log("Módulos y sus relaciones eliminados con éxito");
    } catch (error) {
      console.error("Error al eliminar los módulos:", error);
      throw new Error("No se pudieron eliminar los módulos.");
    }
  }
  async deleteModulesByIdsCascade(ids: number[], p: p): Promise<void> {
    try {
      if (ids.length > 0) {
        // prismaInstance.$transaction(async (p) => {
          // Eliminar relaciones de los módulos con estudiantes
          await p.moduleStudent.deleteMany({
            where: {
              moduleId: {
                in: ids,
              },
            },
          });

          // Eliminar relaciones de los módulos con profesores
          await p.moduleTeacher.deleteMany({
            where: {
              moduleId: {
                in: ids,
              },
            },
          });

          // Eliminar relaciones de cohortes con módulos
          await p.cohortModule.deleteMany({
            where: {
              idModule: {
                in: ids,
              },
            },
          });

          // Finalmente, eliminar los módulos
          await p.module.deleteMany({
            where: {
              id: {
                in: ids,
              },
            },
          });
          console.log("-----------------------");
          console.log("MODULO ELIMINADO");
          console.log("-----------------------");
        // });
      }

      console.log("Módulos y sus relaciones eliminados con éxito");
    } catch (error) {
      console.error("Error al eliminar los módulos:", error);
      throw new Error("No se pudieron eliminar los módulos.");
    }
  }

}

export default new ModuleRepository();
