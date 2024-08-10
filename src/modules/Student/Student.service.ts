import { prisma } from "../../../prisma/index";
import { Student } from "@prisma/client";
import StudentRepository from "./Student.repository";
import UnitService from "../Unit/Unit.service";
import UnitRepository from "../Unit/Unit.repository";
import LevelService from "../Level/Level.service";

class StudentService {
  async findOne(id: number) {
    const student = await StudentRepository.findOne(id);
    if (!student) {
      return `No se encontro el Student ${id}`;
    }

    return student;
  }

  // Metodo para obtener todos los Students
  async findAll(){
    try {
      const students = await StudentRepository.findAll();
      return students;
    } catch (error) {
      throw new Error("" + error);
    }
  }

  async findAllAndLevels() {
    try {
      const students = await StudentRepository.findAllAndLevels();
      return students;
    } catch (error) {
      throw new Error("" + error);
    }
  }

  async create(data: Student) {
    try {
      const student = await StudentRepository.create(data);
      return student;
    } catch (error) {
      throw new Error("" + error);
    }
  }

  async update(id: number, data: Student) {
    return await StudentRepository.update(id, data);
  }

  async delete(id: number) {
    return StudentRepository.delete(id);
  }

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

    return await StudentRepository.assignLevelToStudent(idStudent, idLevel);
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

    return await StudentRepository.assignUnitToStudent(idStudent, idUnit);
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

    return await StudentRepository.assignCourseToStudent(idStudent, idCourse);
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

    return await StudentRepository.assignModuleToStudent(idStudent, idModule);
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

    return await StudentRepository.removeLevelToStudent(idStudent, idLevel);
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
    return await StudentRepository.removeLevelToStudent(idStudent, idUnit);
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

    return await StudentRepository.removeLevelToStudent(idStudent, idCourse);
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
    return await StudentRepository.removeLevelToStudent(idStudent, idModule);
  }

  async addCourseToStudent(idStudent: number, idCourse: number) {
    const course = await prisma.level.findUnique({ where: { id: idCourse } });

    if (!course) {
      throw new Error("Curso no encontrado");
    }

    const student = await prisma.student.findUnique({
      where: { id: idStudent },
    });

    if (!student) {
      throw new Error("Estudiente no encontrado");
    }

    const updateStudent = await prisma.student.update({
      where: {
        id: idStudent,
      },
      data: {
        levels: {
          create: {
            levelId: idCourse,
          },
        },
      },
      include: {
        courses: true,
      },
    });

    return updateStudent;
  }

  async removeLevelFromStudent(idStudent: number, idLevel: number) {
    return StudentRepository.removeLevelToStudent(idStudent, idLevel);
  }
}

export const studentService = new StudentService();
