// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";

import asyncHandler from "express-async-handler";
// import User from "../models/userModel.js";

// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // req.user = await User.findById(decoded.id);
      req.staffuser = await Staffuser.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      throw res.json({
        hasError: true,
        message: "Not authorized, token failed",
      });
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.staffuser && req.staffuser.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
