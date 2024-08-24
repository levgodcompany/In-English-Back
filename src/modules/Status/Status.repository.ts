import { Status } from "@prisma/client";
import { prisma } from "../../../prisma";

class StatusRepository {
  async create(data: Status) {
    try {
      return await prisma.status.create({ data });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findAll() {
    try {
      return await prisma.status.findMany();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new StatusRepository();
