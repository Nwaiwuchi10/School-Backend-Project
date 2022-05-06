import express from "express";

const router = express.Router();

import {
  getSs1result,
  getSs1resultById,
  createSs1result,
  updateSs1result,

  //   getClasses,
  //   getStudentById,
  //   getStudents,
  //   getStudentsByClasses,
  //   postClasses,
} from "../Controller/ss1resultController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getSs1result).post(createSs1result);

router.route("/:id").get(getSs1resultById).put(updateSs1result);

// router.get("/classes", getClasses);
// router.post("/classes", postClasses);
// router.get("/classes/:cat", getStudentsByClasses);
export default router;
