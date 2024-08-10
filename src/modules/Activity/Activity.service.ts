import { Activity } from "@prisma/client";
import ActivityRepository from "./Activity.repository"

class ActivityServices {
    async create(data: Activity) {
        try {
            return await ActivityRepository.create(data);
        } catch (error) {
            throw new Error(`Error al crear el activity: ${error}`);
        }
    }

    async findOne(id: number) {
        try {
            return await ActivityRepository.findOne(id);
        } catch (error) {
            throw new Error(`Error al buscar el activity: ${error}`);
        }
    }

    async findAll() {
        try {
            return await ActivityRepository.findAll()
        } catch (error) {
            throw new Error(`Error al buscar los activity: ${error}`);
        }
    }

    async update(id: number, data: Activity) {
        try {
            const activity = await ActivityRepository.update(id, data);
            return activity
        } catch (error) {
            throw new Error(`Error al actualizar el activity: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const activity = await ActivityRepository.delete(id);
            return activity
        } catch (error) {
            throw new Error(`Error al eliminar el activity: ${error}`);
        }
    }

}

export default new ActivityServices()