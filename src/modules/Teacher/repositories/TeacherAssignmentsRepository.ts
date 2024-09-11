import { prisma } from "../../../prisma";

class TeacherAssignmentsRepository {
  private async assignEntityToTeacher(
    entityType: "level" | "unit" | "course" | "module",
    idTeacher: number,
    idEntity: number
  ) {
    try {
      let entity: any;
      switch (entityType) {
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

      const updatedTeacher = await prisma.teacher.update({
        where: { id: idTeacher },
        data: {
          [`${entityType}s`]: {
            connectOrCreate: {
              where: {
                [`${entityType}Id_teacherId`]: {
                  [`${entityType}Id`]: idEntity,
                  teacherId: idTeacher,
                },
              },
              create: {
                [`${entityType}Id`]: idEntity,
              },
            },
          },
        },
        include: {
          [`${entityType}s`]: {
            include: {
              [entityType]: {
                select: {
                  title: true,
                  description: true,
                  id: true,
                },
              },
            },
          },
        },
      });

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar ${entityType} al Teacher con ID ${idTeacher}: ${error}`
      );
    }
  }

  // Métodos específicos para asignación de entidades
  assignLevelToTeacher(idTeacher: number, idLevel: number) {
    return this.assignEntityToTeacher("level", idTeacher, idLevel);
  }

  assignUnitToTeacher(idTeacher: number, idUnit: number) {
    return this.assignEntityToTeacher("unit", idTeacher, idUnit);
  }

  assignCourseToTeacher(idTeacher: number, idCourse: number) {
    return this.assignEntityToTeacher("course", idTeacher, idCourse);
  }

  assignModuleToTeacher(idTeacher: number, idModule: number) {
    return this.assignEntityToTeacher("module", idTeacher, idModule);
  }
}

export default new TeacherAssignmentsRepository();
