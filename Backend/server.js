import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoute.js';
import aboutRoutes from './routes/aboutRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
