import { NextFunction, Request, Response } from "express";
import { CategoryTypeLevelService } from "../services";

class CategoryTypeLevelController {
  // Asignar un TypeLevel a una Category
  async assignTypeLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idCategory, idTypeLevel } = req.body;
      const relation = await CategoryTypeLevelService.assignTypeLevelToCategory(
        Number(idCategory),
        Number(idTypeLevel)
      );
      res.json(relation);
    } catch (error) {
      console.error("Error al asignar TypeLevel a Category:", error);
      next(error);
    }
  }

  // Obtener todas las categorías con sus TypeLevels asignados
  async findAllRelations(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const relations =
        await CategoryTypeLevelService.getCategoriesWithTypeLevels();
      res.json(relations);
    } catch (error) {
      console.error("Error al obtener las relaciones:", error);
      next(error);
    }
  }

  // Eliminar una relación entre Category y TypeLevel
  async deleteRelation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idCategory, idTypeLevel } = req.params;
      await CategoryTypeLevelService.removeTypeLevelFromCategory(
        Number(idCategory),
        Number(idTypeLevel)
      );
      res.json({ message: "Relación eliminada correctamente." });
    } catch (error) {
      console.error("Error al eliminar la relación:", error);
      next(error);
    }
  }
}

export default new CategoryTypeLevelController();
