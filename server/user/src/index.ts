import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createClient } from "redis";
import connectToDB from "./config/db.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
connectToDB();
connectRabbitMQ();

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch(console.error);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
