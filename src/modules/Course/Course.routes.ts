import { Router } from "express";
import { courseController } from "./Course.controller";

const router = Router();

router.post("/", courseController.create)
router.get("/", courseController.findAll)

export default router