import dotenv from 'dotenv';
import express from 'express';
import config from './config/default';
import router from './routes';
import cors from 'cors';

import path from 'path';

// Load environment variables from .env file in the root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT: number = config.port;

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};


app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

