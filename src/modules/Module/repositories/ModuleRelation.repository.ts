import { prisma } from "../../../../prisma";

class ModuleRelationRepository {

  async delete(id: number) {
    try {
      const module = await prisma.module.delete({ where: { id } });
      return module;
    } catch (error) {
      throw new Error(`Error al eliminar el module: ${error}`);
    }
  }
}

export default new ModuleRelationRepository();
