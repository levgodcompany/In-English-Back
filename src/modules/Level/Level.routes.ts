import { Router } from "express";
import LevelController from "./Level.controller";

const router = Router();

router.post("/", LevelController.create)
router.get("/", LevelController.findAll)

export default router