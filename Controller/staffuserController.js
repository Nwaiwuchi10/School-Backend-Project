import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateToken.js";
import Staffuser from "../models/staffuserModel.js";

//@desc Auth user & get token
//@route Post/api/users/login
//@acess Fetch Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const staffuser = await Staffuser.findOne({ email });

  if (staffuser && (await staffuser.matchPassword(password))) {
    res.json({
      _id: staffuser._id,
      name: staffuser.name,
      email: staffuser.email,
      isAdmin: staffuser.isAdmin,
      phoneNumber: staffuser.phoneNumber,
      formTeacher: staffuser.formTeacher,
      roles: staffuser.roles,
      hasError: false,
      subject: staffuser.subject,
      classes: staffuser.classes,
      token: generateToken(staffuser._id),
    });
  } else {
    res.json({
      error: "Invalid email or password",
      hasError: true,
    });
  }
});

//@desc Register a new user
//@route Post/api/users
//@acess Fetch Public

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    formTeacher,
    phoneNumber,
    roles,
    subject,
    classes,
  } = req.body;

  const staffuserExits = await Staffuser.findOne({ email });
  if (staffuserExits) {
    res.status(400);
    throw new Error("User already exists");
  }
  const staffuser = await Staffuser.create({
    classes,
    phoneNumber,
    roles,
    subject,
    name,
    email,
    formTeacher,
    password,
  });
  if (staffuser) {
    res.status(201).json({
      _id: staffuser._id,
      classes: staffuser.classes,
      formTeacher: staffuser.formTeacher,
      subject: staffuser.subject,
      roles: staffuser.roles,
      isAdmin: staffuser.isAdmin,
      phoneNumber: staffuser.phoneNumber,
      name: staffuser.name,
      email: staffuser.email,
      token: generateToken(staffuser._id),
      hasError: false,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };
