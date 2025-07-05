import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";

dotenv.config();
connectToDB();

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
