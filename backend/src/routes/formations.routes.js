import { Router } from "express";
import { formations } from "../controllers/formations.controller.js";

const router = Router();
router.get("/", formations);
export default router;
