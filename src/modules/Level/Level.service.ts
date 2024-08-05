import { Level } from "@prisma/client";
import { prisma } from "../../../prisma";

class LevelService {
    async create(data: Level) {
        try {
            const level = await prisma.level.create({data})
            return level
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async findAll() {
        try {
            const levels = await prisma.level.findMany({
                include: {
                    students: {
                        include: {
                            student: {
                                select: {
                                    id: true,
                                    name: true,
                                    lastName: true,
                                    email: true,
                                    birthDate: true
                                }
                            }
                        }
                    }
                }
            });
            return levels
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

export default new LevelService()