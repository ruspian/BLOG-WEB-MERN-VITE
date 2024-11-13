import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";
import "dotenv/config";

// RPdBb3VB0K3FW9nh
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database berhasil terhubung");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

// route user
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
