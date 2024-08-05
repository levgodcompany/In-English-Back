import { Level } from "@prisma/client";
import { prisma } from "../../../prisma";

class LevelRepository {

    async findOne(id: number) {
        try {
            const level = await prisma.level.findUnique({ where: { id } });
            if (!level) {
                throw new Error(`No se encontró el Level con ID: ${id}`);
            }
            return level;
        } catch (error) {
            throw new Error(`Error al buscar el Level con ID ${id}: ${error}`);
        }
    }

    async findAll() {
        try {
            const teachers = await prisma.level.findMany();
            if (teachers.length === 0) {
                throw new Error("No se encontraron Teachers");
            }
            return teachers;
        } catch (error) {
            throw new Error(`Error al buscar todos los Teachers: ${error}`);
        }
    }

    async create(data: Level) {
        try {
            data.title = data.title.toLocaleLowerCase();
            const existingLevel = await prisma.level.findFirst({ where: { title: data.title } });
            if (existingLevel) {
                throw new Error(`Ya existe un Level con el titulo ${data.title}`);
            }
            const newLevel = await prisma.level.create({ data });
            return newLevel;
        } catch (error) {
            throw new Error(`Error al crear el Level: ${error}`);
        }
    }

    async update(id: number, data: Partial<Level>) {
        try {
            const updatedLevel = await prisma.level.update({
                where: { id },
                data
            });
            return updatedLevel;
        } catch (error) {
            throw new Error(`Error al actualizar el Level con ID ${id}: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const deletedLevel = await prisma.level.delete({ where: { id } });
            return deletedLevel;
        } catch (error) {
            throw new Error(`Error al eliminar el Level con ID ${id}: ${error}`);
        }
    }


    private async assignEntityToLevel(entityType: 'unit' | 'activity', idTeacher: number, idEntity: number) {
        try {
            let entity: any;
            switch (entityType) {
                case 'activity':
                    entity = await prisma.activity.findUnique({ where: { id: idEntity } });
                    break;
                case 'unit':
                    entity = await prisma.unit.findUnique({ where: { id: idEntity } });
                    break;
                default:
                    throw new Error('Tipo de entidad desconocido');
            }
            if (!entity) {
                throw new Error(`No se encontró el ${entityType} con ID ${idEntity}`);
            }

            await this.findOne(idTeacher);

            const updatedTeacher = await prisma.teacher.update({
                where: { id: idTeacher },
                data: {
                    [`${entityType}s`]: {
                        connectOrCreate: {
                            where: {
                                [`${entityType}Id_teacherId`]: {
                                    [`${entityType}Id`]: idEntity,
                                    teacherId: idTeacher
                                }
                            },
                            create: {
                                [`${entityType}Id`]: idEntity
                            }
                        }
                    }
                },
                include: {
                    [`${entityType}s`]: {
                        include: {
                            [entityType]: {
                                select: {
                                    title: true,
                                    description: true,
                                    id: true
                                }
                            }
                        }
                    }
                }
            });

            return updatedTeacher;
        } catch (error) {
            throw new Error(`Error al asignar ${entityType} al Teacher con ID ${idTeacher}: ${error}`);
        }
    }

    // Métodos específicos para asignación de entidades
    assignActivityToLevel(idLevel: number, idAcivity: number) {
        return this.assignEntityToLevel('activity', idLevel, idAcivity);
    }

    assignUnitToLevel(idLevel: number, idUnit: number) {
        return this.assignEntityToLevel('unit', idLevel, idUnit);
    }

}

export default new LevelRepository();