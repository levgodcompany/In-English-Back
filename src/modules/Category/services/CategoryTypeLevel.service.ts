import { CategoryTypeLevelRepository } from "../repository";

class CategoryTypeLevelService {
  // private categoryTypeLevelRepository = CategoryTypeLevelRepository;

  // Asignar un TypeLevel a una Category con validación
  async assignTypeLevelToCategory(categoryId: number, typeLevelId: number) {
    try {
      // Validar los parámetros (puedes agregar lógica aquí)
      if (!categoryId || !typeLevelId) {
        throw new Error("El idCategory y el idTypeLevel son obligatorios.");
      }

      // Usar el servicio de relaciones
      const relation = await CategoryTypeLevelRepository.create(
        categoryId,
        typeLevelId
      );
      console.log("TypeLevel asignado correctamente a Category:", relation);
      return relation;
    } catch (error) {
      console.error("Error al asignar TypeLevel a Category:", error);
      throw error;
    }
  }

  // Obtener todas las categorías con sus TypeLevels
  async getCategoriesWithTypeLevels() {
    try {
      const relations = await CategoryTypeLevelRepository.getAll();
      const formattedCategories = relations.map((relation) => ({
        categoryId: relation.idCategory,
        typeLevelId: relation.idTypeLevel,
        categoryTitle: relation.category.title,
        typeLevelTitle: relation.typeLevel.title,
      }));
      console.log("Categorías con TypeLevels asignados:", formattedCategories);
      return formattedCategories;
    } catch (error) {
      console.error("Error al obtener categorías con TypeLevels:", error);
      throw error;
    }
  }

  // Eliminar una relación entre Category y TypeLevel
  async removeTypeLevelFromCategory(categoryId: number, typeLevelId: number) {
    try {
      await CategoryTypeLevelRepository.delete(categoryId, typeLevelId);
      console.log(
        `Relación entre Category ${categoryId} y TypeLevel ${typeLevelId} eliminada correctamente.`
      );
    } catch (error) {
      console.error(
        "Error al eliminar la relación entre Category y TypeLevel:",
        error
      );
      throw error;
    }
  }
}

export default new CategoryTypeLevelService();
