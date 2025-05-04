import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

import { router as notificationRouter } from './notificationRoutes'; 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/notifications', notificationRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
