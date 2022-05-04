import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateToken.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route Post/api/users/login
//@acess Fetch Public

const authUser = asyncHandler(async (req, res) => {
  const { registrationNumber, password } = req.body;

  const user = await User.findOne({ registrationNumber });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      registrationNumber: user.registrationNumber,

      hasError: false,

      token: generateToken(user._id),
    });
  } else {
    res.json({
      error: "Invalid registrationNumberor password",
      hasError: true,
    });
  }
});

//@desc Register a new user
//@route Post/api/users
//@acess Fetch Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, registrationNumber, password } = req.body;

  const userExits = await User.findOne({ registrationNumber });
  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    registrationNumber,
    name,

    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      registrationNumber: user.registrationNumber,
      name: user.name,

      token: generateToken(user._id),

      hasError: false,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };
