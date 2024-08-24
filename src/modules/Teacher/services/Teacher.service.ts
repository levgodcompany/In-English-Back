import { Teacher } from "@prisma/client";
import { TeacherRepository } from "../repositories";
import { TeacherInfoBasic } from "../TeacherDtos";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class TeacherService {
  // Métodos CRUD para el Teacher

  async findOne(id: number) {
    try {
      return TeacherRepository.findOne(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneByEmail(email: string) {
    try {
      return TeacherRepository.findOneByEmail(email);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return TeacherRepository.findAll();
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllInfoBasic() {
    try {
      const teachers = await TeacherRepository.findAll();

      return teachers.map((teacher) => {
        const info: TeacherInfoBasic = {
          id: teacher.id,
          fullName: `${teacher.name} ${teacher.lastName}`,
        };
        return info;
      });
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: Teacher) {
    try {
      return TeacherRepository.create(data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Partial<Teacher>) {
    try {
      return TeacherRepository.update(id, data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      return TeacherRepository.delete(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new TeacherService();
