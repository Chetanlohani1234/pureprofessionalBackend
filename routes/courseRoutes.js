// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// CRUD operations for courses
router.post('/add', courseController.createCourse);          // Create course
router.get('/get', courseController.getAllCourses);          // Get all courses
router.get('/getById/:id', courseController.getCourse);          // Get single course by id
router.put('/update/:id', courseController.updateCourse);       // Update course by id
router.delete('/delete/:id', courseController.deleteCourse);    // Delete course by id

module.exports = router;
