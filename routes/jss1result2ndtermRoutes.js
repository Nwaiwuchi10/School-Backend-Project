import express from "express";

const router = express.Router();

import {
  getJss1result2ndterm,

  // createResult,
  // updateJss1result,
  getJss1result2ndtermByYear,
  getByYear,
  postResultjss12ndterm,
  getJss1result2ndtermById,
} from "../Controller/jss1result2ndtermController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getJss1result2ndterm).post(postResultjss12ndterm);

router
  .route("/:id")
  .get(getJss1result2ndtermById)
  .put(protect, postResultjss12ndterm);

router.get("/year", getByYear);

router.get("/year/:cat", getJss1result2ndtermByYear);

export default router;
