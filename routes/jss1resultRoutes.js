import express from "express";

const router = express.Router();

import {
  getJss1result,

  // createResult,
  // updateJss1result,
  getJss1resultByYear,
  getByYear,
  postResultjss1,
  getByTerm,
  getResultByTerm,
  getJss1resultById,
  getByCategory,
  getResultByCategory,

  //   getClasses,
  //   getStudentById,
  //   getStudents,
  //   getStudentsByClasses,
  //   postClasses,
} from "../Controller/jss1resultController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getJss1result).post(protect, postResultjss1);

router.route("/:id").get(getJss1resultById).put(protect, postResultjss1);

router.get("/year", getByTerm);
// router.post("/year", postClasses);
router.get("/year/:cat", getJss1resultByYear);

router.get("/term", getByYear);
// router.post("/year", postClasses);
router.get("/term/:cat", getResultByTerm);
router.get("/resultcategory/:cat", getResultByCategory);

router.get("/resultcategory", getByCategory);
export default router;
