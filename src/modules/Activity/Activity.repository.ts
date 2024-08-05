import { Activity } from "@prisma/client";
import { prisma } from "../../../prisma";

class ActivityRepository {
    async create(data: Activity) {
        try {
            const activity = await prisma.activity.create({
                data
            });

            return activity
        } catch (error) {
            throw new Error(`Error al crear el activity: ${error}`);
        }
    }

    async findOne(id: number) {
        try {
            const activity = await prisma.activity.findUnique({ where: { id } });
            return activity
        } catch (error) {
            throw new Error(`Error al buscar el activity: ${error}`);
        }
    }

    async findAll() {
        try {
            const activities = await prisma.activity.findMany()
            return activities
        } catch (error) {
            throw new Error(`Error al buscar los activity: ${error}`);
        }
    }

    async update(id: number, data: Activity) {
        try {
            const activity = await prisma.activity.update({ where: { id }, data });
            return activity
        } catch (error) {
            throw new Error(`Error al actualizar el activity: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const activity = await prisma.activity.delete({ where: { id } });
            return activity
        } catch (error) {
            throw new Error(`Error al eliminar el activity: ${error}`);
        }
    }

}

export default new ActivityRepository()