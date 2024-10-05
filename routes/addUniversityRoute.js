const express = require('express');
const router = express.Router();
const addUniversityController = require('../controllers/addUniversityController');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// Route to create a university
router.post('/add',upload.single('logo'), addUniversityController.createAddUniversity);

// Route to get all universities with their about section
router.get('/get', addUniversityController.getAddUniversities);

// Get a single university by ID
router.get('/getById/:id', addUniversityController.getAddUniversityById);

// Update a university by ID
router.put('/update/:id', addUniversityController.updateAddUniversity);

// Delete a university by ID
router.delete('/delete/:id', addUniversityController.deleteAddUniversity);
module.exports = router;
