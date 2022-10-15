const MONGO_URL =
  "mongodb+srv://aminbetter:sat896406292B@nextjscrud.xk6og5n.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
