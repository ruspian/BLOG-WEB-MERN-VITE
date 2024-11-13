import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //   validasi user name
  if (!username || username === "") {
    return next(errorHandler(400, "Mohon isi kolom username!"));
  }

  if (!email || email === "") {
    return next(errorHandler(400, "Mohon isi kolom email!"));
  }

  if (!password || password === "") {
    return next(errorHandler(400, "Mohon isi kolom password!"));
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashPassword });

    await newUser.save();
    res.status(200).json({ message: "Akun Anda berhasil dibuat" });
  } catch (error) {
    next(error);
  }
};
