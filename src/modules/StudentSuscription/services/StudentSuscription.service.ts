import { StudentSuscription } from "@prisma/client";
import { StudentSuscriptionRepository } from "../repositories";
import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

class StudentSuscriptionServices {
  async create(data: StudentSuscription) {
    try {
      return await StudentSuscriptionRepository.create(data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await StudentSuscriptionRepository.findAll();
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(idStudent: number, idSuscription: number) {
    try {
      return await StudentSuscriptionRepository.findOne(
        idStudent,
        idSuscription
      );
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new StudentSuscriptionServices();
