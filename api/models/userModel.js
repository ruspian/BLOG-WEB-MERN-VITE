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
    profilPicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw1qiTVrcotrkjRtbeu4Go52&ust=1731650320199000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCID7m6OS24kDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
