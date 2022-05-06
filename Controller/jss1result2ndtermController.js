import asyncHandler from "express-async-handler";
import Year from "../models/yearModel.js";
import Term from "../models/termModel.js";
import Resultcategory from "../models/resultcategoryModel.js";
import Jss1result2ndterm from "../models/jss1result2ndtermModel.js";

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public
//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

const getJss1result2ndterm = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Jss1result2ndterm.countDocuments({ ...keyword });

  const jss1results2ndterm = await Jss1result2ndterm.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ jss1results2ndterm, page, pages: Math.ceil(count / pageSize) });
});

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

// const getJss1result = asyncHandler(async (req, res) => {
//   const jss1results = await Jss1result.find({});
//   res.json({ jss1results: jss1results, hasError: false });
// });

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

const getJss1result2ndtermById = asyncHandler(async (req, res) => {
  const jss1result2ndterm = await Jss1result2ndterm.findById(req.params.id);

  if (jss1result2ndterm) {
    res.json(jss1result2ndterm);
    // res.json({ jss1result: jss1result, hasError: false });
  } else {
    res.status(404).json({ message: "jss1result2ndterm not found" });
  }
});
//////

//
//@desc Delete a vendor
//@route DELETE/api/vendors/:id
//@acess Fetch Public

const deleteJss1result2ndterm = asyncHandler(async (req, res) => {
  const jss1result2ndterm = await Jss1result2ndterm.findById(req.params.id);

  if (jss1result2ndterm) {
    await jss1result2ndterm.remove();
    res.json({ message: "Your result has been removed" });
  } else {
    res.status(404).json({ message: "Jss1result2ndterm not found" });
  }
});

//@desc Create a jss1result
//@route POST/api/jss1result/:id
//@acess Private/ Admin

const createjss1result2ndterm = asyncHandler(async (req, res) => {
  const jss1result2ndterm = new Jss1result2ndterm({
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
  const createdJss1resut2ndterm = await jss1result2ndterm.save();
  res.status(201).json({
    createdJss1resut2ndterm: createdJss1resut2ndterm,
    hasError: false,
  });
});

//@desc Update a vendor
//@route PUT/api/vendors/:id
//@acess Private/ Admin

const updateJss1result2ndterm = asyncHandler(async (req, res) => {
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

  const jss1result2ndterm = await Jss1result2ndterm.findById(req.params.id);

  if (jss1result2ndterm) {
    jss1result2ndterm.name = name;
    jss1result2ndterm.registrationNumber = registrationNumber;
    jss1result2ndterm.classes = classes;
    jss1result2ndterm.image = image;
    jss1result2ndterm.term = term;
    jss1result2ndterm.year = year;
    jss1result2ndterm.CRK = CRK;
    jss1result2ndterm.english = english;
    jss1result2ndterm.mathematics = mathematics;
    jss1result2ndterm.basicScience = basicScience;
    jss1result2ndterm.healthScience = healthScience;
    jss1result2ndterm.igboLanguage = igboLanguage;
    jss1result2ndterm.grade = grade;
    jss1result2ndterm.TotalScore = TotalScore;
    jss1result2ndterm.TotalAverage = TotalAverage;
    jss1result2ndterm.Position = Position;
    jss1result2ndterm.comment = comment;
    const updatedJss1result2ndterm = await jss1result.save();
    res.json({
      updatedJss1result2ndterm: updatedJss1result2ndterm,
      hasError: false,
    });
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

const createResult2ndterm = asyncHandler(async (req, res) => {
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

  const jss1result2ndtermExits = await Jss1result2ndterm.findOne({
    registrationNumber,
  });
  if (jss1result2ndtermExits) {
    res.status(400);
    throw new Error("Jss1result already exists");
  }
  const jss1result2ndterm = await Jss1result2ndterm.create({
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
  if (jss1result2ndterm) {
    res.status(201).json({
      name: jss1result2ndterm.name,
      registrationNumber: jss1result2ndterm.registrationNumber,
      classes: jss1result2ndterm.classes,

      term: jss1result2ndterm.term,
      image: jss1result2ndterm.image,
      year: jss1result2ndterm.year,
      CRK: jss1result2ndterm.CRK,
      english: jss1result2ndterm.english,
      TotalAverage: jss1result2ndterm.TotalAverage,
      TotalScore: jss1result2ndterm.TotalScore,
      Position: jss1result2ndterm.Position,
      mathematics: jss1result2ndterm.mathematics,
      basicScience: jss1result2ndterm.basicScience,
      healthScience: jss1result2ndterm.healthScience,
      igboLanguage: jss1result2ndterm.igboLanguage,
      grade: jss1result2ndterm.grade,
      comment: jss1result2ndterm.comment,
    });
  } else {
    res.status(400);
    throw new Error("Invalid result data");
  }
});

/////
const postResultjss12ndterm = asyncHandler(async (req, res) => {
  const jss1result2ndterm = new Jss1result2ndterm({
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

  const createdJss1result2ndterm = await jss1result2ndterm.save();
  if (createdJss1result2ndterm) {
    res.json({
      hasError: false,
      message: "jss1result2ndterm created successfully",
      createdJss1result2ndterm,
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
const getJss1result2ndtermByYear = asyncHandler(async (req, res) => {
  let jss1results2ndterm;
  if (req.params.cat == "Top") {
    jss1results2ndterm = await Jss1result2ndterm.find({})
      .sort({ rating: -1 })
      .limit(30);
  } else if (req.params.cat == "Latest") {
    jss1results2ndterm = await Jss1result2ndterm.find({})
      .sort({ createdAt: -1 })
      .limit(30);
  } else {
    jss1results2ndterm = await Jss1result2ndterm.find({
      year: req.params.cat,
    }).limit(30);
  }

  res.json({
    hasError: false,
    jss1results2ndterm,
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

export {
  getJss1result2ndterm,
  getJss1result2ndtermById,
  deleteJss1result2ndterm,
  createjss1result2ndterm,
  updateJss1result2ndterm,
  postResultjss12ndterm,
  createResult2ndterm,
  getJss1result2ndtermByYear,
  getByYear,
};
