import { Unit } from "@prisma/client";
import { prisma } from "../../../prisma";

class UnitRepository {

    async create(data: Unit) {
        try {
            const unit = await prisma.unit.create({
                data
            });

            return unit
        } catch (error) {
            throw new Error(`Error al crear la unidad: ${error}`);
        }
    }

    async findOne(id: number) {
        try {
            const unit = await prisma.unit.findUnique({ 
                where: { id },
                include: {
                    courses: true,
                    teachers: true
                }
             });
            return unit
        } catch (error) {
            throw new Error(`Error al buscar la unidad: ${error}`);
        }
    }

    async findAll() {
        try {
            const unit = await prisma.unit.findMany()
            return unit
        } catch (error) {
            throw new Error(`Error al buscar las unidad: ${error}`);
        }
    }

    async findAllByIdLevel(idLevel: number) {
        try {
            const unities = await prisma.unit.findMany({
                where: {idLevel: idLevel}
            })
            return unities
        } catch (error) {
            throw new Error(`Error al buscar las unidad: ${error}`);
        }
    }

    async update(id: number, data: Unit) {
        try {
            const unit = await prisma.unit.update({ where: { id }, data });
            return unit
        } catch (error) {
            throw new Error(`Error al actualizar la unidad: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const unit = await prisma.unit.delete({ where: { id } });
            return unit
        } catch (error) {
            throw new Error(`Error al eliminar la unidad: ${error}`);
        }
    }


    // Métodos específicos para asignación de entidades
    async assignActivityToUnit(idUnit: number, idAcivity: number) {
        try {
            const updatedUnit = await prisma.unit.update({
                where: { id: idUnit },
                data: {
                    activities: {
                        connectOrCreate: {
                            where: {
                                unitId_activityId: {
                                    activityId: idAcivity,
                                    unitId: idUnit
                                }
                            },
                            create: {
                                activityId: idAcivity
                            }
                        }
                    }
                }
            });

            return updatedUnit;
        } catch (error) {
            throw new Error(`Error al associar el Unit con Activity: ${error}`);
        }
    }


    async removeActivityToUnit(idUnit: number, idAcivity: number) {
        try {
            await prisma.unitActivity.delete({
                where: {
                    unitId_activityId: {
                        activityId: idAcivity,
                        unitId: idUnit
                    }
                }
            })
        } catch (error) {
            throw new Error(`Error al remover la Unit de la Activity: ${error}`);
        }
    }

}

export default new UnitRepository();