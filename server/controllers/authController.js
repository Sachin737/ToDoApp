import { hashPassword, comparePassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";

import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

//  LOGIN CONTROLLER
const loginController = async (req, res) => {
  res.send({
    msg: "logged in!",
  });
};

// REGISTER CONTROLLER
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // VALIDATION
    if (!email || !password || !name) {
      throw Error("Please fill all fileds!");
    }
    if (!validator.isEmail(email)) {
      throw Error("Please provide valid email address");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password is weak!");
    }

    //  Check if any user already exists with this email
    const exists = await userModel.findOne({ email });
    if (exists) {
      throw Error("Email already registered!");
    }

    // hash of password using bcrypt
    const hash = await hashPassword(password);

    // creating new user
    const user = await userModel.create({
      name,
      email,
      password: hash,
    });

    // create jwt token
    const token = createToken(user._id);

    // sending response
    res.status(201).send({
      success: true,
      user,
      token,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  }
};

export { loginController, registerController };
