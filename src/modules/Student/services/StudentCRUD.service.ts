import { Student } from "@prisma/client";
import { StudentCRUDRepository } from "../repositories";
import { StudentInfoBasic } from "../StudentDtos";
import { HttpStatus, NotFoundError } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

class StudentCRUD {
  async findOne(id: number) {
    const student = await StudentCRUDRepository.findOne(id);
    if (!student) {
      throw new CustomError(
        `No se encontro el Student ${id}`,
        HttpStatus.NOT_FOUND
      );
    }

    return student;
  }

  async findOneByEmail(email: string) {
    const student = await StudentCRUDRepository.findOneByEmail(email);
    if (!student) {
      throw new CustomError(
        `No se encontro el Student con el email ${email}`,
        HttpStatus.NOT_FOUND
      );
    }

    return student;
  }

  async findAll() {
    try {
      const students = await StudentCRUDRepository.findAll();
      return students;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllInfoBasic() {
    try {
      const students = await StudentCRUDRepository.findAll();
      return students.map((student) => {
        const info: StudentInfoBasic = {
          id: student.id,
          fullName: `${student.name} ${student.lastName}`,
        };
        return info;
      });
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: Student) {
    try {
      const student = await StudentCRUDRepository.create(data);
      return student;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Student) {
    return await StudentCRUDRepository.update(id, data);
  }

  async delete(id: number) {
    return StudentCRUDRepository.delete(id);
  }
}

export default new StudentCRUD();
