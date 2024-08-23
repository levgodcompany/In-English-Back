import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
import { transformLevelData, transformSubscriptionData } from "../Dto/LandingDto";
import LandingRepository from "../Repository/Landing.repository";

class LandingService {
  async findAllLevels() {
    try {
      const levels = await LandingRepository.findAllLevels();
      
      return transformLevelData(levels)
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllTeacher() {
    try {
      const teachers = await LandingRepository.findAllTeacher();
      
      return teachers;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllSuscriptionByIdLevel(idLevel: number) {
    try {
      const suscriptions = await LandingRepository.findAllSuscriptionByIdLevel(
        idLevel
      );

      const suscriptionsDto = suscriptions.map((suscription) => {
        return transformSubscriptionData(suscription);
      });
      return suscriptionsDto;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllCohortsByIdLevel(idLevel: number) {
    try {
      const levels = await LandingRepository.findAllCohortsByIdLevel(idLevel);
      return levels;
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new LandingService();
