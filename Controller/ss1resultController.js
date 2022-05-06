import asyncHandler from "express-async-handler";
import Resultcategory from "../models/resultcategoryModel.js";

import Ss1result from "../models/Ss1resultModel.js";

//@desc Fetch all ss1results
//@route Get/api/ss1results
//@acess Fetch Public

const getSs1result = asyncHandler(async (req, res) => {
  const ss1results = await Ss1result.find({});
  res.json({ ss1results: ss1results, hasError: false });
});

//@desc Fetch single vendor
//@route Get/api/vendor/:category
//@acess Fetch Public

const getSs1resultById = asyncHandler(async (req, res) => {
  const ss1result = await Ss1result.findById(req.params.id);

  if (ss1result) {
    res.json(ss1result);
    // res.json({ ss1result: ss1result, hasError: false });
  } else {
    res.status(404).json({ message: "Ss1result not found" });
  }
});
//
//@desc Delete a vendor
//@route DELETE/api/vendors/:id
//@acess Fetch Public

const deleteSs1result = asyncHandler(async (req, res) => {
  const ss1result = await Ss1result.findById(req.params.id);

  if (ss1result) {
    await ss1result.remove();
    res.json({ message: "Your result has been removed" });
  } else {
    res.status(404).json({ message: "Jss1result not found" });
  }
});

//@desc Create a jss1result
//@route POST/api/jss1result/:id
//@acess Private/ Admin

const createSs1result = asyncHandler(async (req, res) => {
  const ss1result = new Ss1result({
    name: "Sample name",
    CRK: "Subject name",
    option: "Subject name",
    // user: req.user._id,
    staffuser: req.staffuser._id,
    Government: "Subject name",
    english: "Sample handle",
    Biology: "Subject name",
    Physics: "Subject name",
    Economics: "Subject name",
    CRK: "Subject name",
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
  const createdSs1resut = await ss1result.save();
  res.status(201).json({ createdSs1resut: createdSs1resut, hasError: false });
});

//@desc Update a vendor
//@route PUT/api/vendors/:id
//@acess Private/ Admin

const updateSs1result = asyncHandler(async (req, res) => {
  const {
    name,
    registrationNumber,
    classes,
    term,
    image,
    option,
    year,
    CRK,
    english,
    mathematics,
    Physics,
    Chemistry,
    Government,
    Economics,

    Biology,
    igboLanguage,
    grade,
    comment,
  } = req.body;

  const ss1result = await Ss1result.findById(req.params.id);

  if (ss1result) {
    ss1result.name = name;
    ss1result.registrationNumber = registrationNumber;
    ss1result.classes = classes;
    ss1result.image = image;
    ss1result.term = term;
    ss1result.year = year;
    ss1result.CRK = CRK;
    ss1result.option = option;
    ss1result.english = english;
    ss1result.mathematics = mathematics;
    ss1result.Economics = Economics;
    ss1result.Government = Government;
    ss1result.Chemistry = Chemistry;
    ss1result.Biology = Biology;
    ss1result.Physics = Physics;
    ss1result.igboLanguage = igboLanguage;
    ss1result.grade = grade;
    ss1result.comment = comment;
    const updatedSs1result = await ss1result.save();
    res.json(updatedSs1result);
  } else {
    res.status(404);
    throw new Error("Ss1result not found");
  }
});

// else {
//   res.status(404);
//   throw new Error("Ss1result not found");
// }
// //@desc Create new review
// //@route POST/api/vendors/:id/reviews
// //@acess Private

// const createVendorReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body;

//   const vendor = await Vendor.findById(req.params.id);

//   if (vendor) {
//     const alreadyReviewed = vendor.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString()
//     );
//     if (alreadyReviewed) {
//       res.status(400);
//       throw new Error("Vendor already reviewed");
//     }
//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };
//     vendor.reviews.push(review);
//     vendor.numReviews = product.reviews.length;

//     vendor.rating =
//       vendor.reviews.reduce((acc, item) => item.rating + acc, 0) /
//       vendor.reviews.length;

//     await vendor.save();
//     res.status(201).json({ message: "Review added" });
//   } else {
//     res.status(404);
//     throw new Error("Vendor not found");
//   }
// });

// //@desc Get top rated vendors
// //@route GET/api/vendors/top
// //@acess Public

// const getTopVendors = asyncHandler(async (req, res) => {
//   const vendors = await Vendor.find({}).sort({ rating: -1 }).limit(3);
//   res.json(vendors);
// });
// //@desc Fetch single vendor
// //@route Get/api/vendors/category
// //@acess Fetch Public
// const getVendorsByCartegory = asyncHandler(async (req, res) => {
//   let vendors;
//   if (req.params.cat == "Top") {
//     vendors = await Vendor.find({}).sort({ rating: -1 }).limit(30);
//   } else if (req.params.cat == "Latest") {
//     vendors = await Vendor.find({}).sort({ createdAt: -1 }).limit(30);
//   } else {
//     vendors = await Vendor.find({ category: req.params.cat }).limit(30);
//   }

//   res.json({
//     hasError: false,
//     vendors,
//     message: "vendors found",
//   });
// });

// const getCategories = asyncHandler(async (req, res) => {
//   const categories = await Category.find({});

//   res.json({
//     hasError: false,
//     categories: categories,
//   });
// });

// const postCategories = asyncHandler(async (req, res) => {
//   const category = new Category({
//     name: req.body.name,
//   });

//   const createdCatgory = await category.save();
//   if (createdCatgory) {
//     res.json({
//       hasError: false,
//       message: "category created successfully",
//       createdCatgory,
//     });
//   } else {
//     res.json({
//       hasError: true,
//       message: "Error try again",
//     });
//   }
// });

export {
  getSs1result,
  getSs1resultById,
  deleteSs1result,
  createSs1result,
  updateSs1result,
  //   getVendors,
  //   getVendorById,
  //   createVendorReview,
  //   createVendor,
  //   deleteVendor,
  //   getTopVendors,
  //   updateVendor,
  //   getCategories,
  //   postCategories,
  //   getVendorsByCartegory,
};
