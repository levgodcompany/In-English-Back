import { StudentSuscription } from "@prisma/client";
import StudentSuscriptionRepository from "./StudentSuscription.repository";

class StudentSuscriptionServices {
  async create(data: StudentSuscription) {
    try {
      return await StudentSuscriptionRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear un studentSuscription: ${error}`);
    }
  }

  async findAll() {
    try {
      return await StudentSuscriptionRepository.findAll();
    } catch (error) {
      throw new Error(
        `Error al buscar todas los studentSuscriptions: ${error}`
      );
    }
  }

  async findOne(idStudent: number, idSuscription: number) {
    try {
      return await StudentSuscriptionRepository.findOne(
        idStudent,
        idSuscription
      );
    } catch (error) {
      throw new Error(`Error al buscar un studentSuscription: ${error}`);
    }
  }

  async findByIdStudent(idStudent: number) {
    try {
      const student = await StudentSuscriptionRepository.findByIdStudent(
        idStudent
      );
      if (student.length === 0) {
        return null;
      }

      student.find((student) => student.status.status === 100);
    } catch (error) {
      throw new Error(`Error al buscar un studentSuscription: ${error}`);
    }
  }
}

export default new StudentSuscriptionServices();
