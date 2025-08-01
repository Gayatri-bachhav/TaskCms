import express from 'express';
import { getServices, addServices, updateServices, deleteServices  } from '../controllers/servicesController.js';

const router = express.Router();

router.get('/', getServices);
router.post('/', addServices);
router.put('/:id', updateServices);
router.delete('/:id', deleteServices);

export default router;
