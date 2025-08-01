

import express from 'express';
import { addHome, getHome, updateHome, deleteHome } from '../controllers/homeController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/', getHome);
router.post('/', upload.single('image'), addHome);
router.put('/:id', upload.single('image'), updateHome);
router.delete('/:id', deleteHome);

export default router;
