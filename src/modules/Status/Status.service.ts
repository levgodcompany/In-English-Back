import { Status } from "@prisma/client";
import StatusRepository from "./Status.repository";

class StatusService {
  async create(data: Status) {
    try {
      return await StatusRepository.create(data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findAll() {
    try {
      return await StatusRepository.findAll();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new StatusService();
