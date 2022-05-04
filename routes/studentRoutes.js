import express from "express";

const router = express.Router();

import {
  getClasses,
  getStudentById,
  getStudents,
  getStudentsByClasses,
  postClasses,
} from "../Controller/studentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getStudents);
router.route("/:id").get(getStudentById);

router.get("/classes", getClasses);
router.post("/classes", postClasses);
router.get("/classes/:cat", getStudentsByClasses);
export default router;
