import { PrismaClient, Unit } from "@prisma/client";
import { prisma } from "../../../prisma";
import { ICrudRepository } from "../../../utilities";
import CourseCrudRepository from "../../Course/repositories/CourseCrud.repository";
import { p } from "../../../utilities/CrudRepository";

class UnitRepository implements ICrudRepository<Unit> {
  async create(data: Unit) {
    try {
      const u = prisma.unit;
      const unit = await prisma.unit.create({
        data,
      });

      return unit;
    } catch (error) {
      throw new Error(`Error al crear la unidad: ${error}`);
    }
  }

  async findOne(id: number) {
    try {
      const unit = await prisma.unit.findUnique({
        where: { id },
        include: {
          courses: true,
          teachers: true,
        },
      });
      return unit;
    } catch (error) {
      throw new Error(`Error al buscar la unidad: ${error}`);
    }
  }

  async findAll() {
    try {
      const unit = await prisma.unit.findMany();
      return unit;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async findAllByIdLevel(idLevel: number) {
    try {
      const unities = await prisma.unit.findMany({
        where: { idLevel: idLevel },
      });
      return unities;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }
  

  async findAllUnitByIdLevelAndByIdStudent(idLevel: number, idStudent: number, idCohort: number) {
    try {
      console.log(idLevel, idStudent, idCohort)
      type result = {
        id: number;
        title: string;
        description: string;
        order: number;
        idLevel: number;
        enabled: boolean;
      };
      const unities = await prisma.$queryRaw<result[]>`
      select 
	      u.*,
        cu.enabled
	    from public."Students" s
      inner join public."CohortStudent" cs ON cs."idStudent" = s.id
      inner join public."Cohorts" ct ON ct.id = cs."idCohort"
      inner join public."CohortUnit" cu ON cu."idCohort" = ct.id
      inner join public."Unities" u ON u.id = cu."idUnit"
      where u."idLevel"= ${idLevel} and s.id = ${idStudent} and ct.id = ${idCohort} ;
      `;
 
      return unities;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async findAllTeacherByIdUnit(idUnit: number) {
    try {
      const unities = await prisma.unit.findMany({
        where: { id: idUnit },
        include: {
          teachers: {
            include: {
              teacher: {
                select: {
                  id: true,
                  imgUrl: true,
                  name: true,
                  lastName: true,
                },
              },
            },
          },
        },
      });
      return unities;
    } catch (error) {
      throw new Error(`Error al buscar las unidad: ${error}`);
    }
  }

  async update(id: number, data: Unit) {
    try {
      const unit = await prisma.unit.update({ where: { id }, data });
      return unit;
    } catch (error) {
      throw new Error(`Error al actualizar la unidad: ${error}`);
    }
  }

  /**
   * @deprecated
   */
  async delete(id: number) {
    try {
      const unit = await prisma.unit.delete({ where: { id } });
      return unit;
    } catch (error) {
      throw new Error(`Error al eliminar la unidad: ${error}`);
    }
  }

  public async deleteUnityWithRelations(unityId: number): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Obtener todos los cursos relacionados con la unidad
        const courses = await p.course.findMany({
          where: {
            idUnit: unityId,
          },
          select: {
            id: true,
          },
        });

        console.log("-----------------------");
        console.log("coures", courses.length);
        console.log("-----------------------");
        if (courses.length > 0) {
          await CourseCrudRepository.deleteCoursesById(
            courses.map((c) => c.id)
          );
        }

        // Eliminacion de realacion ExamUnit y Unit
        await p.examUnit.deleteMany({
          where: {
            idUnit: unityId,
          },
        });

        // Eliminacion de realacion Student y Unit
        await p.unitStudent.deleteMany({
          where: {
            unitId: unityId,
          },
        });

        // Eliminacion de realacion Teacher y Unit
        await p.unitTeacher.deleteMany({
          where: {
            unitId: unityId,
          },
        });

        // Eliminacion de realacion Cohort y Unit
        await p.cohortUnit.deleteMany({
          where: {
            idUnit: unityId,
          },
        });

        // Finalmente, eliminar la unidad
        await p.unit.delete({
          where: {
            id: unityId,
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la unidad con ID ${unityId}:`, error);
      throw error;
    }
  }

  public async deleteUnitById(ids: number[]): Promise<void> {
    try {
      await prisma.$transaction(async (p) => {
        // Obtener todos los cursos relacionados con la unidad
        // Obtener todos los cursos relacionados con la unidad
        const courses = await p.course.findMany({
          where: {
            idUnit: {
              in: ids,
            },
          },
          select: {
            id: true,
          },
        });

        console.log("-----------------------");
        console.log("coures", courses.length);
        console.log("-----------------------");
        if (courses.length > 0) {
          await CourseCrudRepository.deleteCoursesById(
            courses.map((c) => c.id)
          );
        }

        // Eliminacion de realacion ExamUnit y Unit
        await p.examUnit.deleteMany({
          where: {
            idUnit: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Student y Unit
        await p.unitStudent.deleteMany({
          where: {
            unitId: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Teacher y Unit
        await p.unitTeacher.deleteMany({
          where: {
            unitId: {
              in: ids,
            },
          },
        });

        // Eliminacion de realacion Cohort y Unit
        await p.cohortUnit.deleteMany({
          where: {
            idUnit: {
              in: ids,
            },
          },
        });

        // Finalmente, eliminar la unidad
        await p.unit.deleteMany({
          where: {
            id: {
              in: ids,
            },
          },
        });
      });
    } catch (error) {
      console.error(`Error eliminando la unidad con ID ${ids}:`, error);
      throw error;
    }
  }

  public async deleteUnityWithRelationsCascade(
    unityId: number,
    p: p
  ): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
      // Obtener todos los cursos relacionados con la unidad
      const courses = await p.course.findMany({
        where: {
          idUnit: unityId,
        },
        select: {
          id: true,
        },
      });

      console.log("-----------------------");
      console.log("coures", courses.length);
      console.log("-----------------------");
      if (courses.length > 0) {
        await CourseCrudRepository.deleteCoursesById(courses.map((c) => c.id));
      }

      // Eliminacion de realacion ExamUnit y Unit
      await p.examUnit.deleteMany({
        where: {
          idUnit: unityId,
        },
      });

      // Eliminacion de realacion Student y Unit
      await p.unitStudent.deleteMany({
        where: {
          unitId: unityId,
        },
      });

      // Eliminacion de realacion Teacher y Unit
      await p.unitTeacher.deleteMany({
        where: {
          unitId: unityId,
        },
      });

      // Eliminacion de realacion Cohort y Unit
      await p.cohortUnit.deleteMany({
        where: {
          idUnit: unityId,
        },
      });

      // Finalmente, eliminar la unidad
      await p.unit.delete({
        where: {
          id: unityId,
        },
      });
      // });
    } catch (error) {
      console.error(`Error eliminando la unidad con ID ${unityId}:`, error);
      throw error;
    }
  }

  public async deleteUnitByIdCascade(ids: number[], p: p): Promise<void> {
    try {
      // await prismaInstance.$transaction(async (p) => {
      // Obtener todos los cursos relacionados con la unidad
      // Obtener todos los cursos relacionados con la unidad
      const courses = await p.course.findMany({
        where: {
          idUnit: {
            in: ids,
          },
        },
        select: {
          id: true,
        },
      });

      if (courses.length > 0) {
        await CourseCrudRepository.deleteCoursesByIdCascade(
          courses.map((c) => c.id),
          p
        );
      }

      // Eliminacion de realacion ExamUnit y Unit
      await p.examUnit.deleteMany({
        where: {
          idUnit: {
            in: ids,
          },
        },
      });

      // Eliminacion de realacion Student y Unit
      await p.unitStudent.deleteMany({
        where: {
          unitId: {
            in: ids,
          },
        },
      });

      // Eliminacion de realacion Teacher y Unit
      await p.unitTeacher.deleteMany({
        where: {
          unitId: {
            in: ids,
          },
        },
      });

      // Eliminacion de realacion Cohort y Unit
      await p.cohortUnit.deleteMany({
        where: {
          idUnit: {
            in: ids,
          },
        },
      });

      // Finalmente, eliminar la unidad
      await p.unit.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
      console.log("-----------------------");
      console.log("UNIDAD ELIMINADO");
      console.log("-----------------------");
      // });
    } catch (error) {
      console.error(`Error eliminando la unidad con ID ${ids}:`, error);
      throw error;
    }
  }
}

export default new UnitRepository();
