import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";
import chatRoutes from "./routes/chat.routes.js";

dotenv.config();
connectToDB()

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", chatRoutes)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});