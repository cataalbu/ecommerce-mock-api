import express from 'express';
import { config } from 'dotenv';
config();
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: [
      'https://csr-scraping-website.whitecatdev.com',
      'https://ssr-scraping-website.whitecatdev.com',
      'http://localhost:3000',
      'http://localhost:5173',
    ],
  })
);

import mongoose from 'mongoose';
import { connectDB } from './config/dbConnection.js';
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import { router } from './routes/index.js';
app.use('/api', router);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log('Server started on PORT ', process.env.PORT);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
