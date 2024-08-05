import { ActivitySubmission } from "@prisma/client";
import { prisma } from "../../../prisma";

class ActivitySubmissionRepository {
    async create(data: ActivitySubmission) {
        try {
            const activitySubmission = await prisma.activitySubmission.create({
                data
            });

            return activitySubmission
        } catch (error) {
            throw new Error(`Error al crear el activitySubmission: ${error}`);
        }
    }

    async findOne(id: number) {
        try {
            const activitySubmission = await prisma.activitySubmission.findUnique({ where: { id } });
            return activitySubmission
        } catch (error) {
            throw new Error(`Error al buscar el activity: ${error}`);
        }
    }

    async findAll() {
        try {
            const activitySubmission = await prisma.activitySubmission.findMany()
            return activitySubmission
        } catch (error) {
            throw new Error(`Error al buscar los activitySubmission: ${error}`);
        }
    }

    async update(id: number, data: ActivitySubmission) {
        try {
            const activitySubmission = await prisma.activitySubmission.update({ where: { id }, data });
            return activitySubmission
        } catch (error) {
            throw new Error(`Error al actualizar el activitySubmission: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const activitySubmission = await prisma.activitySubmission.delete({ where: { id } });
            return activitySubmission
        } catch (error) {
            throw new Error(`Error al eliminar el activitySubmission: ${error}`);
        }
    }
}

export default new ActivitySubmissionRepository();