import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || email === "" || !password || password === "") {
    return next(errorHandler(400, "Email dan Password harus diisi"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(400, "User tidak ditemukan"));
    }

    // apakah sama password hasil hash dengan input password user
    const validPassword = await bcrypt.compareSync(
      password,
      validUser.password
    );

    if (!validPassword) {
      return next(
        errorHandler(
          400,
          "Maaf password yang anda masukkan salah, silahkan coba lagi!"
        )
      );
    }

    // buat token untuk user cookie
    const token = jwt.sign(
      {
        userId: validUser._id,
      },
      process.env.JWT_SECRET_KEY
    );

    // menyembunyikan data password dari response
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
