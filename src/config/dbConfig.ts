import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB connected");
      process.exit();
    });

    connection.on("error", () => {
      console.error("DB not connected!");
    });
  } catch (error) {
    console.error("somthing wnt wrong!");
    console.log(error);
    process.exit();
  }
};
