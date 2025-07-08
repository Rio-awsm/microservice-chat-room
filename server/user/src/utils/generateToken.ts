import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET as string;

export const generateToken = (user: any) => {
  return jwt.sign({ user }, jwtSecret, { expiresIn: "15d" });
};
