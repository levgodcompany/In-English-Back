import { TypeLevelRelationsRepository } from "../Repository";

class TypeLevelRelationsService {
  async assigLevel(idLevel: number, idTypeLevel: number) {
    try {
      const update = await TypeLevelRelationsRepository.assigLevel(
        idLevel,
        idTypeLevel
      );
      return update;
    } catch (error) {
      throw error;
    }
  }

  async remove(idLevel: number, idTypeLevel: number) {
    try {
      await TypeLevelRelationsRepository.remove(idLevel, idTypeLevel);
    } catch (error) {
      throw error;
    }
  }
}

export default new TypeLevelRelationsService();
