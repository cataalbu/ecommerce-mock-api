import * as mongoose from 'mongoose';
import { config } from 'dotenv';
config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};
