import { Router } from "express";
import StatusController from "./Status.controller";

const router = Router()

router.post("/", StatusController.create);
router.get("/", StatusController.findAll)

export default router;