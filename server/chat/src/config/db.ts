import mongoose from "mongoose";

const connectToDB = async () => {
  const url = process.env.MONGO_URI;

  if (!url) {
    throw new Error("MONGO URI is not defined in ENV");
  }

  try {
    await mongoose.connect(url, {
      dbName: "ChatAppMicroservice",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectToDB;
