import { prisma } from "../../../../prisma";
import { LevelService } from "../../Level/services";
import UnitRepository from "../../Unit/repositories/Unit.repository";
import { StudentEntityAssignmentRepository } from "../repositories";

class StudentEntityAssignment {
  // Métodos específicos para asignación de entidades
  async assignLevelToStudent(idStudent: number, idLevel: number) {
    const level = await LevelService.findOne(idLevel);

    if (!level) {
      return `No se encontro el Level con el ID: ${idLevel}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }

    return await StudentEntityAssignmentRepository.assignLevelToStudent(
      idStudent,
      idLevel
    );
  }

  async assignUnitToStudent(idStudent: number, idUnit: number) {
    const unit = await UnitRepository.findOne(idUnit);

    if (!unit) {
      return `No se encontro el Unit con el ID: ${idUnit}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
      include: { levels: true },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }
    const levelIndex = student.levels.findIndex(
      (level) => level.levelId == unit.idLevel
    );
    if (levelIndex == -1) {
      return `No esta matriculado al nivel`;
    }

    return await StudentEntityAssignmentRepository.assignUnitToStudent(
      idStudent,
      idUnit
    );
  }

  async assignCourseToStudent(idStudent: number, idCourse: number) {
    const course = await prisma.course.findUnique({ where: { id: idCourse } });

    if (!course) {
      return `No se encontro el Course con el ID: ${idCourse}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
      include: { units: true },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }

    const unitIndex = student.units.findIndex(
      (unit) => unit.unitId == course.idUnit
    );

    if (unitIndex === -1) {
      return `No se puede asignar esta Course, no esta asignado a la Unit`;
    }

    return await StudentEntityAssignmentRepository.assignCourseToStudent(
      idStudent,
      idCourse
    );
  }

  async assignModuleToStudent(idStudent: number, idModule: number) {
    const module = await prisma.module.findUnique({ where: { id: idModule } });

    if (!module) {
      return `No se encontro el Module con el ID: ${idModule}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }

    return await StudentEntityAssignmentRepository.assignModuleToStudent(
      idStudent,
      idModule
    );
  }

  // Metodos especificos para remover entidades
  async removeLevelToStudent(idStudent: number, idLevel: number) {
    const level = await prisma.level.findUnique({ where: { id: idLevel } });

    if (!level) {
      return `No se encontro el Level con el ID: ${idLevel}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }

    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idLevel
    );
  }

  async removeUnitToStudent(idStudent: number, idUnit: number) {
    const unit = await prisma.unit.findUnique({ where: { id: idUnit } });

    if (!unit) {
      return `No se encontro el Unit con el ID: ${idUnit}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }
    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idUnit
    );
  }

  async removeCourseToStudent(idStudent: number, idCourse: number) {
    const course = await prisma.course.findUnique({ where: { id: idCourse } });

    if (!course) {
      return `No se encontro el Course con el ID: ${idCourse}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }

    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idCourse
    );
  }

  async removeModuleToStudent(idStudent: number, idModule: number) {
    const module = await prisma.module.findUnique({ where: { id: idModule } });

    if (!module) {
      return `No se encontro el Module con el ID: ${idModule}`;
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      return `No se encontro el Student con el ID: ${idStudent}`;
    }
    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idModule
    );
  }

  async removeLevelFromStudent(idStudent: number, idLevel: number) {
    return StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idLevel
    );
  }
}

export default new StudentEntityAssignment();
