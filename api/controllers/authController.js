import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //   validasi user name
  if (
    !username ||
    username === "" ||
    !email ||
    email === "" ||
    !password ||
    password === ""
  ) {
    return next(errorHandler(400, "Nama, Email, dan Password harus diisi"));
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, email, password: hashPassword });

    await newUser.save();
    res.status(200).json({ message: "Akun Anda berhasil dibuat" });
  } catch (error) {
    next(error);
  }
};
