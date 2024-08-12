import { Router } from "express";
import { StudentSuscriptionController } from "./controllers";

const router = Router();

router.post("/", StudentSuscriptionController.create);
router.get("/", StudentSuscriptionController.findAll);
router.get("/:idStudent/:idSuscription", StudentSuscriptionController.findOne);

export default router;
