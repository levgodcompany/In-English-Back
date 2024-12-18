import { prisma } from "../../../prisma";

class CategoryTypeLevelRepository {
  private table = prisma.categoryTypeLevel;
  // Crear una nueva relación entre Category y TypeLevel
  async create(categoryId: number, typeLevelId: number) {
    try {
      const relation = await this.table.create({
        data: {
          idCategory: categoryId,
          idTypeLevel: typeLevelId,
        },
      });
      console.log("Relación creada:", relation);
      return relation;
    } catch (error) {
      console.error("Error creando la relación:", error);
      throw error;
    }
  }

  // Obtener todas las relaciones con información de Category y TypeLevel
  async getAll() {
    try {
      const relations = await this.table.findMany({
        include: {
          category: true,
          typeLevel: true,
        },
      });
      console.log("Relaciones encontradas:", relations);
      return relations;
    } catch (error) {
      console.error("Error obteniendo las relaciones:", error);
      throw error;
    }
  }

  // Actualizar una relación existente
  async update(
    oldCategoryId: number,
    oldTypeLevelId: number,
    newCategoryId: number,
    newTypeLevelId: number
  ) {
    try {
      const updatedRelation = await this.table.update({
        where: {
          idCategory_idTypeLevel: {
            idCategory: oldCategoryId,
            idTypeLevel: oldTypeLevelId,
          },
        },
        data: {
          idCategory: newCategoryId,
          idTypeLevel: newTypeLevelId,
        },
      });
      console.log("Relación actualizada:", updatedRelation);
      return updatedRelation;
    } catch (error) {
      console.error("Error actualizando la relación:", error);
      throw error;
    }
  }

  // Eliminar una relación entre Category y TypeLevel
  async delete(categoryId: number, typeLevelId: number) {
    try {
      const deletedRelation = await this.table.delete({
        where: {
          idCategory_idTypeLevel: {
            idCategory: categoryId,
            idTypeLevel: typeLevelId,
          },
        },
      });
      console.log("Relación eliminada:", deletedRelation);
      return deletedRelation;
    } catch (error) {
      console.error("Error eliminando la relación:", error);
      throw error;
    }
  }
}

// Exportar la clase como módulo
export default new CategoryTypeLevelRepository();
