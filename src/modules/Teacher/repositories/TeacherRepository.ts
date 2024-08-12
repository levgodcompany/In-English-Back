import { Teacher } from "@prisma/client";
import { prisma } from "../../../../prisma";

class TeacherRepository {
  // Métodos CRUD para el Teacher

  async findOne(id: number) {
    try {
      const teacher = await prisma.teacher.findUnique({ where: { id } });
      if (!teacher) {
        throw new Error(`No se encontró el Teacher con ID: ${id}`);
      }
      return teacher;
    } catch (error) {
      throw new Error(`Error al buscar el Teacher con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const teachers = await prisma.teacher.findMany();
      if (teachers.length === 0) {
        throw new Error("No se encontraron Teachers");
      }
      return teachers;
    } catch (error) {
      throw new Error(`Error al buscar todos los Teachers: ${error}`);
    }
  }

  async create(data: Teacher) {
    try {
      data.email = data.email.toLowerCase();
      const existingTeacher = await prisma.teacher.findFirst({
        where: { email: data.email },
      });
      if (existingTeacher) {
        throw new Error(`Ya existe un Teacher con el email ${data.email}`);
      }
      const newTeacher = await prisma.teacher.create({ data });
      return newTeacher;
    } catch (error) {
      throw new Error(`Error al crear el Teacher: ${error}`);
    }
  }

  async update(id: number, data: Partial<Teacher>) {
    try {
      const updatedTeacher = await prisma.teacher.update({
        where: { id },
        data,
      });
      return updatedTeacher;
    } catch (error) {
      throw new Error(`Error al actualizar el Teacher con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedTeacher = await prisma.teacher.delete({ where: { id } });
      return deletedTeacher;
    } catch (error) {
      throw new Error(`Error al eliminar el Teacher con ID ${id}: ${error}`);
    }
  }
}

export default new TeacherRepository();
