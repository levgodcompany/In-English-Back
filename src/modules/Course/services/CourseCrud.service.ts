import { Course } from "@prisma/client";
import { CourseCRUDRepository } from "../repositories";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class CourseCrudService {
  async create(data: Course) {
    try {
      return CourseCRUDRepository.create(data);
    } catch (error) {
      throw new CustomError(
        `${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: number) {
    try {
      return CourseCRUDRepository.findOne(id);
    } catch (error) {
      throw new CustomError(
        `${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    try {
      return CourseCRUDRepository.findAll();
    } catch (error) {
      throw new CustomError(
        `${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: number, data: Course) {
    try {
      return CourseCRUDRepository.update(id, data);
    } catch (error) {
      throw new CustomError(
        `${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async delete(id: number) {
    try {
      return CourseCRUDRepository.deleteCourseWithRelations(id);
    } catch (error) {
      throw new CustomError(
        `${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export default new CourseCrudService();
