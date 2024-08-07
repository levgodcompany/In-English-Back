import { StudentSuscription } from "@prisma/client";
import { Request, Response } from "express";
import StudentSuscriptionService from "./StudentSuscription.service";

class StudentSuscriptionController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: StudentSuscription = req.body;
            const newStudentSuscript = await StudentSuscriptionService.create(body);
            res.json(newStudentSuscript)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const studentSuscriptions = await StudentSuscriptionService.findAll();
            res.json(studentSuscriptions)
        } catch (error) {
            res.json(error)
        }
    }
    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const {idStudent, idSuscription} = req.params
            const studentSuscription = await StudentSuscriptionService.findOne(Number(idStudent), Number(idSuscription));
            res.json(studentSuscription)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new StudentSuscriptionController()