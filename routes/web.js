import express from 'express';
import CourseController from '../controllers/courseController.js';

const router = express.Router();
router.get('/',CourseController.getAllDoc);
router.get('/add',CourseController.addDoc);
router.post('/create',CourseController.createDoc);
router.get('/edit/:id',CourseController.editDoc);
router.post('/update/:id',CourseController.updateById);
router.get('/delete/:id',CourseController.deleteById);

export default router;