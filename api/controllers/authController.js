import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  //   validasi user name
  if (!username || username === "") {
    return res.status(400).json({
      message: "Username Belum Diisi",
    });
  }

  //   validasi email
  if (!email || email === "") {
    return res.status(400).json({
      message: "Email Belum Diisi",
    });
  }

  //   validasi password
  if (!password || password === "") {
    return res.status(400).json({
      message: "Password Belum Diisi",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(200).json({ message: "Akun Anda berhasil dibuat" });
  } catch (error) {
    res.status(400).json({
      message: "Email Atau Username Sudah Digunakan!",
    });
  }
};
