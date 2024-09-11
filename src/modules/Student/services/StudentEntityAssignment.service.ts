import { prisma } from "../../../prisma";
import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
import { LevelService } from "../../Level/services";
import UnitRepository from "../../Unit/repositories/Unit.repository";
import { StudentEntityAssignmentRepository } from "../repositories";

class StudentEntityAssignment {
  // Métodos específicos para asignación de entidades
  async assignLevelToStudent(idStudent: number, idLevel: number) {
    const level = await LevelService.findOne(idLevel);

    if (!level) {
      throw new CustomError(`No se encontro el Nivel con el ID: ${idLevel}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
    }

    return await StudentEntityAssignmentRepository.assignLevelToStudent(
      idStudent,
      idLevel
    );
  }

  async assignUnitToStudent(idStudent: number, idUnit: number) {
    const unit = await UnitRepository.findOne(idUnit);

    if (!unit) {
      throw new CustomError(`No se encontro la Unidad: ${idUnit}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
      include: { levels: true },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
    }
    const levelIndex = student.levels.findIndex(
      (level) => level.levelId == unit.idLevel
    );
    if (levelIndex == -1) {
      throw new CustomError(`No esta matriculado al nivel`, HttpStatus.GONE);
    }

    return await StudentEntityAssignmentRepository.assignUnitToStudent(
      idStudent,
      idUnit
    );
  }

  async assignCourseToStudent(idStudent: number, idCourse: number) {
    const course = await prisma.course.findUnique({ where: { id: idCourse } });

    if (!course) {
      throw new CustomError(`No se encontro el curso con el ID: ${idCourse}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
      include: { units: true },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);

    }

    const unitIndex = student.units.findIndex(
      (unit) => unit.unitId == course.idUnit
    );

    if (unitIndex === -1) {
      throw new CustomError(`No se puede asignar a este Curso, no se encuentra a la unidad que depende el curso`, HttpStatus.GONE);
    }

    return await StudentEntityAssignmentRepository.assignCourseToStudent(
      idStudent,
      idCourse
    );
  }

  async assignModuleToStudent(idStudent: number, idModule: number) {
    const module = await prisma.module.findUnique({ where: { id: idModule } });

    if (!module) {
      throw new CustomError(`No se encontro el Modulo con el ID: ${idModule}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
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
      throw new CustomError(`No se encontro el Nivel con el ID: ${idLevel}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
    }

    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idLevel
    );
  }

  async removeUnitToStudent(idStudent: number, idUnit: number) {
    const unit = await prisma.unit.findUnique({ where: { id: idUnit } });

    if (!unit) {
      throw new CustomError(`No se encontro la unidad con el ID: ${idUnit}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
    }
    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idUnit
    );
  }

  async removeCourseToStudent(idStudent: number, idCourse: number) {
    const course = await prisma.course.findUnique({ where: { id: idCourse } });

    if (!course) {
      throw new CustomError(`No se encontro el curso con el ID: ${idCourse}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
    }

    return await StudentEntityAssignmentRepository.removeLevelToStudent(
      idStudent,
      idCourse
    );
  }

  async removeModuleToStudent(idStudent: number, idModule: number) {
    const module = await prisma.module.findUnique({ where: { id: idModule } });

    if (!module) {
      throw new CustomError(`No se encontro el Modulo con el ID: ${idModule}`, HttpStatus.NOT_FOUND);
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new CustomError(`No se encontro el estudiante con el ID: ${idStudent}`, HttpStatus.NOT_FOUND);
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
