import { PrismaClient } from "@prisma/client/extension";
import { prisma } from "../../prisma";

export const findById = async (modelName: string, id: number, select?: any)=> {
    const model = prisma[modelName as keyof PrismaClient];
    return await model.findUnique({
      where: {
        id
      },
      ...select ? { select } : {}
    });
  }