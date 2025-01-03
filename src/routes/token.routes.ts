import express from "express";
import {
  createToken,
  getTokenById,
  getAllTokens,
  updateToken,
  deleteToken,
} from "../controllers/token.controller";

const router = express.Router();

router.post("/", createToken);
router.get("/:id", getTokenById);
router.get("/", getAllTokens);
router.put("/:id", updateToken);
router.delete("/:id", deleteToken);

export default router;