import { prisma } from "../../../prisma";

class ModuleRelationRepository {
  async delete(id: number) {
    try {
      const module = await prisma.module.delete({ where: { id } });
      return module;
    } catch (error) {
      throw new Error(`Error al eliminar el module: ${error}`);
    }
  }

  async findAllStudentToModule(idStudent: number) {
    try {
      const module = await prisma.moduleStudent.findMany({
        where: {
          studentId: idStudent,
        },
      });
      return module;
    } catch (error) {
      throw new Error(
        `Error al buscar todos los completados del modulo con el IDStudent(${idStudent}) : ${error}`
      );
    }
  }

  async assigStudentToModule(idStudent: number, idModule: number) {
    try {
      const module = await prisma.moduleStudent.create({
        data: {
          studentId: idStudent,
          moduleId: idModule,
        },
      });
      return module;
    } catch (error) {
      throw new Error(`Error al completar el modulo: ${error}`);
    }
  }

  async moduleTeacher() {}
}

export default new ModuleRelationRepository();
