import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Tidak Boleh Kosong"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email Tidak Boleh Kosong"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Tidak Boleh Kosong"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
