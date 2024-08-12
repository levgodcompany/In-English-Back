import { Student } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { ICrudRepository } from "../../../utilities";

class StudentCRUD implements ICrudRepository<Student> {
  async findOne(id: number) {
    try {
      const student = await prisma.student.findUnique({
        where: { id },
        include: {
          examSubmissionLevel: true,
          examSubmissionUnit: true,
          levels: {
            include: {
              level: {
                select: { title: true, description: true, order: true },
              },
            },
          },
          modules: {
            include: {
              module: {
                select: { title: true, description: true, teachers: true },
              },
            },
          },
          courses: {
            include: {
              course: {
                select: {
                  idUnit: true,
                  title: true,
                  description: true,
                  teachers: true,
                },
              },
            },
          },
          units: {
            include: {
              unit: {
                select: {
                  idLevel: true,
                  title: true,
                  description: true,
                  teachers: true,
                },
              },
            },
          },
        },
      });
      return student;
    } catch (error) {
      throw new Error(`Error al buscar el Student: ${error}`);
    }
  }

  async findAll() {
    try {
      const students = await prisma.student.findMany();
      return students;
    } catch (error) {
      throw new Error(`Error al buscar todos los Student: ${error}`);
    }
  }

  async create(data: Student) {
    try {
      const student = await prisma.student.create({ data });
      return student;
    } catch (error) {
      throw new Error(`Error al crear un Student: ${error}`);
    }
  }

  async update(id: number, data: Student) {
    try {
      const student = await prisma.student.update({ where: { id }, data });
      return student;
    } catch (error) {
      throw new Error(`Error al actualizar un Student: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deleteStudent = await prisma.student.delete({ where: { id } });
      return deleteStudent;
    } catch (error) {
      throw new Error(`Error al eliminar un Student: ${error}`);
    }
  }
}

export default new StudentCRUD();
