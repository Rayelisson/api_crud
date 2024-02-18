import { Router } from "express";
import {
  create,
  findAll,
  topNews,
  findById,
} from "../controller/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/:id", findById);

export default router;