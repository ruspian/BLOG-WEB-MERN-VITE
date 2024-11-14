import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// fungsi pendaftaran
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

// fungsi masuk dengan email dan pass
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

// fungsi masuk dengan google
export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET_KEY
      );
      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilPicture: googlePhotoUrl,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      const { password, ...rest } = newUser._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
