import { Activity } from "@prisma/client";
import { Request, Response } from "express";
import ActivityService from "./Activity.service";

class ActivityController {
    async create(req: Request, res: Response): Promise<void> {
        try {
          const body: Activity = req.body;
          body.order = Number(body.order);
          const course = await ActivityService.create(body);
          res.json(course);
        } catch (error) {
          console.log(error);
          res.json(error);
        }
      }
    
      async findAll(_req: Request, res: Response): Promise<void> {
        try {
          const courses = await ActivityService.findAll();
          res.json(courses);
        } catch (error) {
          console.log(error);
          res.json(error);
        }
      }

      async findOne(req: Request, res: Response): Promise<void> {
        try {
            const {idBenefit} = req.params
            const benefits = await ActivityService.findOne(Number(idBenefit));
            res.json(benefits)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const body: Activity = req.body
            const {idBenefit} = req.params
            const benefits = await ActivityService.update(Number(idBenefit), body);
            res.json(benefits)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const {idBenefit} = req.params
            const benefits = await ActivityService.delete(Number(idBenefit));
            res.json(benefits)
        } catch (error) {
            res.json(error)
        }
    }
    
}