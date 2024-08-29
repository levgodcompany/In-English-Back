import { Level } from "@prisma/client";
import { LevelInfoBasic } from "../LevelDto";
import { LevelRepository } from "../Repositories";
import ModuleService from "../../Module/services/Module.service";
import { CustomError } from "../../../utilities/Errors";
import { HttpStatus } from "../../../utilities";

class LevelService {
  async create(data: Level) {
    try {
      return LevelRepository.create(data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return LevelRepository.findAll();
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllInfoBasic() {
    try {
      const levles = await LevelRepository.findAll();
      return levles.map((level) => {
        const info: LevelInfoBasic = {
          id: level.id,
          title: level.title,
        };
        return info;
      });
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return LevelRepository.findOne(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllTeacherByIdLevel(id: number) {
    // try {
    const teachersLevel = await LevelRepository.findAllTeacherByIdLevel(id);
    if (!teachersLevel) {
      return []
    }
    const res = teachersLevel.cohortTeachers.map((ct) => {
      // ct.teacher.
      return {
        id: ct.teacher.id,
        fullName: `${ct.teacher.name} ${ct.teacher.lastName}`,
        imgUrl: ct.teacher.imgUrl,
      };
    });

    return res;

    // } catch (error) {
    //   throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  }

  async findOneAll(id: number) {
    try {
      return LevelRepository.findOneAll(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: Level) {
    try {
      return LevelRepository.update(id, data);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number) {
    try {
      return LevelRepository.deleteLevelWithRelations(id);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new LevelService();
