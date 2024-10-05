const express = require('express');
const router = express.Router();
const aboutUniversityController = require('../controllers/aboutUniversityController');

// Route to create a university
router.post('/add', aboutUniversityController.createAboutUniversity);

// Route to get all universities with their about section
router.get('/get', aboutUniversityController.getAboutUniversity);

// Get a single university by ID
router.get('/getById/:id', aboutUniversityController.getAboutUniversityById);

// Update a university by ID
router.put('/update/:id', aboutUniversityController.updateAboutUniversity);

// Delete a university by ID
router.delete('/delete/:id', aboutUniversityController.deleteAboutUniversity);
module.exports = router;
