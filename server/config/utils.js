import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const STRIPE_KEY = process.env.STRIPE_KEY;

export {
    MONGODB_URI,
    PORT,
    JWT_SECRET,
    STRIPE_KEY,
  };