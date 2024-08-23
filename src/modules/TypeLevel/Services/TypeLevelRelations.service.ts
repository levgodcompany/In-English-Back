import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(idLevel: number, idTypeLevel: number) {
    try {
      await TypeLevelRelationsRepository.remove(idLevel, idTypeLevel);
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new TypeLevelRelationsService();
