import asyncHandler from "express-async-handler";

import Resultchecker from "../models/resultcheckerModel.js";

//@desc Create a new booking
//@route Post/api/books
//@acess Fetch Public

const createResultcheck = asyncHandler(async (req, res) => {
  const { registrationNumber, classes, term, year } = req.body;

  const resultchecker = await Resultchecker.create({
    registrationNumber,
    user: req.user._id,
    classes,
    term,
    year,
  });
  if (resultchecker) {
    res.status(201).json({
      registrationNumber: resultchecker.registrationNumber,
      hasError: false,
      classes: resultchecker.classes,
      term: resultchecker.term,
      year: resultchecker.year,
    });
  } else {
    res.status(400);
    throw new Error("Invalid result check data");
  }
});

export { createResultcheck };
