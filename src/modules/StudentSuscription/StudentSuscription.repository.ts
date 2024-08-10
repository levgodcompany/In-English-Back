import { StudentSuscription } from "@prisma/client";
import { prisma } from "../../../prisma";

class StudentSuscriptionRepository {
  async create(data: StudentSuscription) {
    try {
      return await prisma.studentSuscription.create({ data });
    } catch (error) {
      throw new Error(`Error al crear un studentSuscription: ${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.studentSuscription.findMany();
    } catch (error) {
      throw new Error(
        `Error al buscar todas los studentSuscriptions: ${error}`
      );
    }
  }

  async findOne(idStudent: number, idSuscription: number) {
    try {
      return await prisma.studentSuscription.findUnique({
        where: {
          idStudent_idSuscription: {
            idStudent,
            idSuscription,
          },
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar un studentSuscription: ${error}`);
    }
  }

  async findByIdStudent(idStudent: number) {
    try {
      return await prisma.studentSuscription.findMany({
        where: {
          idStudent,
        },
        include: {
          status: true,
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar un studentSuscription: ${error}`);
    }
  }
}

export default new StudentSuscriptionRepository();
