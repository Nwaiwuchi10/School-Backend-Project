import asyncHandler from "express-async-handler";
import Classes from "../models/classesModel.js";

import Student from "../models/studentModel.js";

//@desc Fetch all vendors
//@route Get/api/vendors
//@acess Fetch Public

const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

// //@desc Fetch all vendors
// //@route Get/api/vendors
// //@acess Fetch Public

// const getStudents = asyncHandler(async (req, res) => {
//   const pageSize = 20;
//   const page = Number(req.query.pageNumber) || 1;

//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};

//   const count = await Student.countDocuments({ ...keyword });

//   const students = await Student.find({ ...keyword })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1));
//   res.json({ students, page, pages: Math.ceil(count / pageSize) });
// });

//@desc Fetch single vendor
//@route Get/api/vendor/:category
//@acess Fetch Public

const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});
//@desc Fetch single vendor
//@route Get/api/vendors/category
//@acess Fetch Public
const getStudentsByClasses = asyncHandler(async (req, res) => {
  let students;
  if (req.params.cat == "Top") {
    students = await Student.find({}).sort({ rating: -1 }).limit(30);
  } else if (req.params.cat == "Latest") {
    students = await Student.find({}).sort({ createdAt: -1 }).limit(30);
  } else {
    students = await Student.find({ classes: req.params.cat }).limit(30);
  }

  res.json({
    hasError: false,
    students,
    message: "Students found",
  });
});

const getClasses = asyncHandler(async (req, res) => {
  const classes = await Classes.find({});

  res.json({
    hasError: false,
    classes: classes,
  });
});

const postClasses = asyncHandler(async (req, res) => {
  const classes = new Classes({
    name: req.body.name,
  });

  const createdClasses = await classes.save();
  if (createdClasses) {
    res.json({
      hasError: false,
      message: "classes created successfully",
      createdClasses,
    });
  } else {
    res.json({
      hasError: true,
      message: "Error try again",
    });
  }
});

export {
  getStudents,
  getStudentById,
  getStudentsByClasses,
  getClasses,
  postClasses,
};
