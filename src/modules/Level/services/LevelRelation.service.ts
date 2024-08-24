import { transformSubscriptionData } from "../Dto/LevelDto";
import { LevelRelationRepository } from "../Repositories";

class LevelRelationService {
  async findAllSuscriptionByIdLevel(idLevel: number) {
    try {
      const suscriptions =
        await LevelRelationRepository.findAllSuscriptionByIdLevel(idLevel);

      const suscriptionsDto = suscriptions.map((suscription) => {
        return transformSubscriptionData(suscription);
      });
      return suscriptionsDto;
    } catch (error) {
      throw new Error(`Error al buscar todos los Levels: ${error}`);
    }
  }

  async findTypeLevelsByIdLevel(idLevel: number) {
    try {
      const level = await LevelRelationRepository.findTypeLevelsByIdLevel(
        idLevel
      );
      if (!level) {
        throw new Error(`No se encontró el Level con ID: ${idLevel}`);
      }
      return level;
    } catch (error) {
      throw new Error(`Error al buscar el Level con ID ${idLevel}: ${error}`);
    }
  }
}

export default new LevelRelationService();
