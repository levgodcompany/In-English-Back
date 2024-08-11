import { Cohort } from "@prisma/client";
import { prisma } from "../../../prisma";

class CohortRepository {
  async findOne(id: number) {
    try {
      const cohort = await prisma.cohort.findUnique({ where: { id } });
      return cohort;
    } catch (error) {
      throw new Error(`Error al buscar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const cohorts = await prisma.cohort.findMany();

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async findAllCohortUnitByIdCohort(idCohort: number) {
    try {
      const cohorts = await prisma.cohortUnit.findMany({
        where: {
          idCohort,
        },
        include: {
          cohort: {
            select: {
              title: true,
              id: true,
            },
          },
          unities: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortCourseByIdCohort(idCohort: number) {
    try {
      const cohorts = await prisma.cohortCourse.findMany({
        where: {
          idCohort,
        },
        include: {
          cohort: {
            select: {
              title: true,
              id: true,
            },
          },
          courses: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortModuleByIdCohort(idCohort: number) {
    try {
      const cohorts = await prisma.cohortModule.findMany({
        where: {
          idCohort,
        },
        include: {
          cohort: {
            select: {
              title: true,
              id: true,
            },
          },
          modules: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortTeacherByIdCohort(idCohort: number) {
    try {
      const cohorts = await prisma.cohortTeacher.findMany({
        where: {
          idCohort,
        },
        include: {
          cohort: {
            select: {
              title: true,
              id: true,
            },
          },
          teacher: {
            select: {
              email: true,
              name: true,
              lastName: true,
              id: true,
            },
          },
        },
      });

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortStudentByIdCohort(idCohort: number) {
    try {
      const cohorts = await prisma.cohortStudent.findMany({
        where: {
          idCohort,
        },
        include: {
          cohort: {
            select: {
              title: true,
              id: true,
            },
          },
          student: {
            select: {
              id: true,
              name: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async create(data: Cohort) {
    try {
      const newCohort = await prisma.cohort.create({ data });
      return newCohort;
    } catch (error) {
      throw new Error(`Error al crear el cohort: ${error}`);
    }
  }

  async update(id: number, data: Partial<Cohort>) {
    try {
      const updatedCohort = await prisma.cohort.update({
        where: { id },
        data,
      });
      return updatedCohort;
    } catch (error) {
      throw new Error(`Error al actualizar el cohort con ID ${id}: ${error}`);
    }
  }

  async delete(idCohort: number) {
    try {
      // Eliminar las relaciones de CohortStudent
      await prisma.cohortStudent.deleteMany({
        where: {
          idCohort,
        },
      });

      // Eliminar las relaciones de CohortTeacher
      await prisma.cohortTeacher.deleteMany({
        where: { idCohort },
      });

      // Eliminar las relaciones de CohortUnit
      await prisma.cohortUnit.deleteMany({
        where: { idCohort },
      });

      // Eliminar las relaciones de CohortCourse
      await prisma.cohortCourse.deleteMany({
        where: { idCohort },
      });

      // Eliminar las relaciones de CohortModule
      await prisma.cohortModule.deleteMany({
        where: { idCohort },
      });
      const deletedCohort = await prisma.cohort.delete({
        where: { id: idCohort },
      });
      return deletedCohort;
    } catch (error) {
      throw new Error(
        `Error al eliminar el cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  // Métodos específicos para asignación de entidades
  async assignTeacherToCohort(idCohort: number, idTeacher: number) {
    try {
      const updatedTeacher = await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortTeachers: {
            connectOrCreate: {
              where: {
                idTeacher_idCohort: {
                  idCohort,
                  idTeacher,
                },
              },
              create: {
                idTeacher,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Teacher con el ID ${idTeacher} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignStudentToCohort(idCohort: number, idStudent: number) {
    try {
      const updatedTeacher = await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortStudents: {
            connectOrCreate: {
              where: {
                idStudent_idCohort: {
                  idCohort,
                  idStudent,
                },
              },
              create: {
                idStudent,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Student con el ID ${idStudent} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignUnitToCohort(idCohort: number, idUnit: number) {
    try {
      const updatedTeacher = await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortUnities: {
            connectOrCreate: {
              where: {
                idUnit_idCohort: {
                  idCohort,
                  idUnit,
                },
              },
              create: {
                idUnit,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Unit con el ID ${idUnit} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignCourseToCohort(idCohort: number, idCourse: number) {
    try {
      const updatedTeacher = await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortCourses: {
            connectOrCreate: {
              where: {
                idCourse_idCohort: {
                  idCohort,
                  idCourse,
                },
              },
              create: {
                idCourse,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Course con el ID ${idCohort} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignModuleToCohort(idCohort: number, idModule: number) {
    try {
      const updatedTeacher = await prisma.cohort.update({
        where: { id: idCohort },
        data: {
          cohortModules: {
            connectOrCreate: {
              where: {
                idModule_idCohort: {
                  idCohort,
                  idModule,
                },
              },
              create: {
                idModule,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Module con el ID ${idModule} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }
}

export default new CohortRepository();
