import asyncHandler from "express-async-handler";
import Year from "../models/yearModel.js";
import Term from "../models/termModel.js";
import Resultcategory from "../models/resultcategoryModel.js";
import Jss1result from "../models/jss1resultModel.js";

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

const getJss1result = asyncHandler(async (req, res) => {
  const jss1results = await Jss1result.find({});
  res.json({ jss1results: jss1results, hasError: false });
});

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

// const getJss1resultByregNumber = asyncHandler(async (req, res) => {
//   const jss1result = await Jss1result.findByregistrationNumber({
//     registrationNumber: registrationNumber,
//   });
//   if (jss1result) {
//     res.json(jss1result);
//   } else {
//     res.status(404).json({ message: "Student result not found" });
//   }
//   // res.json({ jss1results: jss1results, hasError: false });
// });

//@desc Fetch single vendor
//@route Get/api/vendor/:category
//@acess Fetch Public

const getJss1resultById = asyncHandler(async (req, res) => {
  const jss1result = await Jss1result.findById(req.params.id);

  if (jss1result) {
    res.json(jss1result);
    // res.json({ jss1result: jss1result, hasError: false });
  } else {
    res.status(404).json({ message: "Vendor not found" });
  }
});
//
//@desc Delete a vendor
//@route DELETE/api/vendors/:id
//@acess Fetch Public

const deleteJss1result = asyncHandler(async (req, res) => {
  const jss1result = await Jss1result.findById(req.params.id);

  if (jss1result) {
    await jss1result.remove();
    res.json({ message: "Your result has been removed" });
  } else {
    res.status(404).json({ message: "Jss1result not found" });
  }
});

//@desc Create a jss1result
//@route POST/api/jss1result/:id
//@acess Private/ Admin

const createjss1result = asyncHandler(async (req, res) => {
  const jss1result = new Jss1result({
    name: "Sample name",
    CRK: "Subject name",
    // user: req.user._id,
    // staffuser: req.staffuser._id,
    basicScience: "Subject name",
    english: "Sample handle",
    TotalScore: "Sample TotalScore",
    TotalAverage: "Sample TotalAverage",
    Position: "Sample Position",
    healthScience: "Subject name",
    igboLanguage: "Subject name",
    mathematics: "Subject name",
    registrationNumber: "Sample regNumber",
    image: "/images/sample.jpg",
    classes: "Sample class",
    comment: "Sample comment",
    grade: "Sample grade",
    term: "Sample term",
    year: "Sample year",
  });
  const createdJss1resut = await jss1result.save();
  res.status(201).json({ createdJss1resut: createdJss1resut, hasError: false });
});

//@desc Update a vendor
//@route PUT/api/vendors/:id
//@acess Private/ Admin

const updateJss1result = asyncHandler(async (req, res) => {
  const {
    name,
    registrationNumber,
    classes,
    term,
    TotalScore,
    TotalAverage,
    Position,
    image,
    year,
    CRK,
    english,
    mathematics,
    basicScience,
    healthScience,
    igboLanguage,
    grade,
    comment,
  } = req.body;

  const jss1result = await Jss1result.findById(req.params.id);

  if (jss1result) {
    jss1result.name = name;
    jss1result.registrationNumber = registrationNumber;
    jss1result.classes = classes;
    jss1result.image = image;
    jss1result.term = term;
    jss1result.year = year;
    jss1result.CRK = CRK;
    jss1result.english = english;
    jss1result.mathematics = mathematics;
    jss1result.basicScience = basicScience;
    jss1result.healthScience = healthScience;
    jss1result.igboLanguage = igboLanguage;
    jss1result.grade = grade;
    jss1result.TotalScore = TotalScore;
    jss1result.TotalAverage = TotalAverage;
    jss1result.Position = Position;
    jss1result.comment = comment;
    const updatedJss1result = await jss1result.save();
    res.json({ updatedJss1result: updatedJss1result, hasError: false });
  } else {
    res.status(404);
    throw new Error("Jss1result not found");
  }
});

// //@desc Create new review
// //@route POST/api/vendors/:id/reviews
// //@acess Private
//@desc Create a new booking
//@route Post/api/books
//@acess Fetch Public

const createResult = asyncHandler(async (req, res) => {
  const {
    name,
    registrationNumber,
    classes,
    term,
    image,
    year,
    CRK,
    TotalScore,
    TotalAverage,
    Position,
    english,
    mathematics,
    basicScience,
    healthScience,
    igboLanguage,
    grade,
    comment,
  } = req.body;

  const jss1resultExits = await Jss1result.findOne({ registrationNumber });
  if (jss1resultExits) {
    res.status(400);
    throw new Error("Jss1result already exists");
  }
  const jss1result = await Jss1result.create({
    name,
    registrationNumber,
    classes,
    term,
    image,
    year,
    CRK,
    english,
    mathematics,
    basicScience,
    healthScience,
    igboLanguage,
    grade,
    TotalScore,
    TotalAverage,
    Position,
    comment,
  });
  if (jss1result) {
    res.status(201).json({
      name: jss1result.name,
      registrationNumber: jss1result.registrationNumber,
      classes: jss1result.classes,

      term: jss1result.term,
      image: jss1result.image,
      year: jss1result.year,
      CRK: jss1result.CRK,
      english: jss1result.english,
      TotalAverage: jss1result.TotalAverage,
      TotalScore: jss1result.TotalScore,
      Position: jss1result.Position,
      mathematics: jss1result.mathematics,
      basicScience: jss1result.basicScience,
      healthScience: jss1result.healthScience,
      igboLanguage: jss1result.igboLanguage,
      grade: jss1result.grade,
      comment: jss1result.comment,
    });
  } else {
    res.status(400);
    throw new Error("Invalid result data");
  }
});

/////
const postResultjss1 = asyncHandler(async (req, res) => {
  const jss1result = new Jss1result({
    name: req.body.name,
    registrationNumber: req.body.registrationNumber,
    classes: req.body.classes,
    term: req.body.term,
    image: req.body.image,
    year: req.body.year,
    CRK: req.body.CRK,
    english: req.body.english,
    mathematics: req.body.mathematics,
    basicScience: req.body.basicScience,
    healthScience: req.body.healthScience,
    igboLanguage: req.body.igboLanguage,
    grade: req.body.grade,
    TotalScore: req.body.TotalScore,
    TotalAverage: req.body.TotalAverage,
    Position: req.body.Position,
    comment: req.body.comment,
  });

  const createdJss1resut = await jss1result.save();
  if (createdJss1resut) {
    res.json({
      hasError: false,
      message: "jss1result created successfully",
      createdJss1resut,
    });
  } else {
    res.json({
      hasError: true,
      message: "Error try again",
    });
  }
});

//@desc Fetch single vendor
//@route Get/api/vendors/category
//@acess Fetch Public
const getJss1resultByYear = asyncHandler(async (req, res) => {
  let jss1results;
  if (req.params.cat == "Top") {
    jss1results = await Jss1result.find({}).sort({ rating: -1 }).limit(30);
  } else if (req.params.cat == "Latest") {
    jss1results = await Jss1result.find({}).sort({ createdAt: -1 }).limit(30);
  } else {
    jss1results = await Jss1result.find({
      year: req.params.cat,
    }).limit(30);
  }

  res.json({
    hasError: false,
    jss1results,
    message: "Result found",
  });
});

////
const getByYear = asyncHandler(async (req, res) => {
  const year = await Year.find({});

  res.json({
    hasError: false,
    year: year,
  });
});

/////
const getResultByTerm = asyncHandler(async (req, res) => {
  let jss1results;
  if (req.params.cat == "Top") {
    jss1results = await Jss1result.find({}).sort({ rating: -1 }).limit(30);
  } else if (req.params.cat == "Latest") {
    jss1results = await Jss1result.find({}).sort({ createdAt: -1 }).limit(30);
  } else {
    jss1results = await Jss1result.find({
      term: req.params.cat,
    }).limit(30);
  }

  res.json({
    hasError: false,
    jss1results,
    message: "Result found",
  });
});

////
const getByTerm = asyncHandler(async (req, res) => {
  const term = await Term.find({});

  res.json({
    hasError: false,
    term: term,
  });
});
/////
const getResultByCategory = asyncHandler(async (req, res) => {
  let jss1results;
  if (req.params.cat == "Top") {
    jss1results = await Jss1result.find({}).sort({ rating: -1 }).limit(30);
  } else if (req.params.cat == "Latest") {
    jss1results = await Jss1result.find({}).sort({ createdAt: -1 }).limit(30);
  } else {
    jss1results = await Jss1result.find({
      term: req.params.cat,
      year: req.params.cat,
      registrationNumber: req.params.cat,
      classes: req.params.cat,
    }).limit(30);
  }

  res.json({
    hasError: false,
    jss1results,
    message: "Result found",
  });
});

////
const getByCategory = asyncHandler(async (req, res) => {
  const resultcategory = await Resultcategory.find({});

  res.json({
    hasError: false,
    resultcategory: resultcategory,
  });
});
export {
  getJss1result,
  getJss1resultById,
  deleteJss1result,
  createjss1result,
  updateJss1result,
  postResultjss1,
  createResult,
  getJss1resultByYear,
  getByYear,
  getByCategory,
  getResultByTerm,
  getByTerm,
  getResultByCategory,
};
