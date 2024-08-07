import { Status } from "@prisma/client";
import { Request, Response } from "express";
import StatusService from "./Status.service";

class StatusController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: Status = req.body;
            const newStatus = await StatusService.create(body);
            res.json(newStatus)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const status = await StatusService.findAll();
            res.json(status)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new StatusController();