import express from "express";

const router = express.Router();

import { createResultcheck } from "../Controller/resultcheckerController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(createResultcheck);

export default router;
