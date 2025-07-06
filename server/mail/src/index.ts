import dotenv from "dotenv";
import express from "express";
import { startSendOTPConsumer } from "./consumer.js";

dotenv.config();
startSendOTPConsumer()

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
