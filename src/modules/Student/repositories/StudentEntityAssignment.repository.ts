import { prisma } from "../../../../prisma";

class StudentEntityAssignment {
  private async assignEntityToStudent(
    entityType: "level" | "unit" | "course" | "module" | "activity",
    idStudent: number,
    idEntity: number
  ) {
    try {
      let entity: any;
      switch (entityType) {
        case "activity":
          entity = await prisma.examSubmissionLevel.findUnique({
            where: { id: idEntity },
          });
          break;
        case "level":
          entity = await prisma.level.findUnique({ where: { id: idEntity } });
          break;
        case "unit":
          entity = await prisma.unit.findUnique({ where: { id: idEntity } });
          break;
        case "course":
          entity = await prisma.course.findUnique({ where: { id: idEntity } });
          break;
        case "module":
          entity = await prisma.module.findUnique({ where: { id: idEntity } });
          break;
        default:
          throw new Error("Tipo de entidad desconocido");
      }
      if (!entity) {
        throw new Error(`No se encontró el ${entityType} con ID ${idEntity}`);
      }

      const updatedTeacher = await prisma.student.update({
        where: { id: idStudent },
        data: {
          [`${entityType}s`]: {
            connectOrCreate: {
              where: {
                [`${entityType}Id_studentId`]: {
                  [`${entityType}Id`]: idEntity,
                  studentId: idStudent,
                },
              },
              create: {
                [`${entityType}Id`]: idEntity,
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar ${entityType} al Teacher con ID ${idStudent}: ${error}`
      );
    }
  }

  private async removeEntityFromStudent(
    entityType: "level" | "unit" | "course" | "module" | "activity",
    idStudent: number,
    idEntity: number
  ) {
    try {
      switch (entityType) {
        case "level":
          await prisma.levelStudent.delete({
            where: {
              levelId_studentId: {
                levelId: idEntity,
                studentId: idStudent,
              },
            },
          });
          break;
        case "unit":
          await prisma.unitStudent.delete({
            where: {
              unitId_studentId: {
                unitId: idEntity,
                studentId: idStudent,
              },
            },
          });
          break;
        case "course":
          await prisma.courseStudent.delete({
            where: {
              courseId_studentId: {
                courseId: idEntity,
                studentId: idStudent,
              },
            },
          });
          break;
        case "module":
          await prisma.moduleStudent.delete({
            where: {
              moduleId_studentId: {
                moduleId: idEntity,
                studentId: idStudent,
              },
            },
          });
          break;
        default:
          throw new Error("Tipo de entidad desconocido");
      }
    } catch (error) {
      throw new Error(`Error al remover el Student del Level: ${error}`);
    }
  }

  // Métodos específicos para asignación de entidades
  async assignActivityToStudent(idStudent: number, idAcivity: number) {
    return this.assignEntityToStudent("activity", idStudent, idAcivity);
  }

  async assignLevelToStudent(idStudent: number, idLevel: number) {
    return this.assignEntityToStudent("level", idStudent, idLevel);
  }

  async assignUnitToStudent(idStudent: number, idUnit: number) {
    return this.assignEntityToStudent("unit", idStudent, idUnit);
  }

  async assignCourseToStudent(idStudent: number, idCourse: number) {
    return this.assignEntityToStudent("course", idStudent, idCourse);
  }

  async assignModuleToStudent(idStudent: number, idModule: number) {
    return this.assignEntityToStudent("module", idStudent, idModule);
  }

  // Metodos especificos para remover entidades
  async removeActivityToStudent(idStudent: number, idAcivity: number) {
    return this.removeEntityFromStudent("activity", idStudent, idAcivity);
  }

  async removeLevelToStudent(idStudent: number, idLevel: number) {
    return this.removeEntityFromStudent("level", idStudent, idLevel);
  }

  async removeUnitToStudent(idStudent: number, idUnit: number) {
    return this.removeEntityFromStudent("unit", idStudent, idUnit);
  }

  async removeCourseToStudent(idStudent: number, idCourse: number) {
    return this.removeEntityFromStudent("course", idStudent, idCourse);
  }

  async removeModuleToStudent(idStudent: number, idModule: number) {
    return this.removeEntityFromStudent("module", idStudent, idModule);
  }

  async removeCourseFromStudent(studentId: number, courseId: number) {
    return await prisma.student.update({
      where: { id: studentId },
      data: {
        courses: {
          disconnect: {
            courseId_studentId: {
              courseId: courseId,
              studentId: studentId,
            },
          },
        },
      },
    });
  }
}

export default new StudentEntityAssignment();
