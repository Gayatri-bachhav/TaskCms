import express from 'express';
import { getAbout, addAbout, updateAbout, deleteAbout  } from '../controllers/aboutController.js';


const router = express.Router();

router.get('/', getAbout);
router.post('/', addAbout);
router.put('/:id', updateAbout);
router.delete('/:id', deleteAbout);

export default router;
