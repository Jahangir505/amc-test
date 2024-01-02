import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Mongo connection successful");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // You might want to throw the error or handle it according to your needs
    // throw new Error("Error connecting to MongoDB");
  }
};

export default connect;
