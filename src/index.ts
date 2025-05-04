import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as notificationRouter } from './notificationRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/notifications', notificationRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
