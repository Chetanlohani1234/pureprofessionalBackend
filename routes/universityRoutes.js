const express = require('express');
const router = express.Router();
const universityController = require('../controllers/universityController');


const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // specify the directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // unique filename
    },
  });
  
  const uploads = multer({ storage: storage });
// Route to create a university
router.post('/add',uploads.array('approvals'), universityController.createUniversity);

// Route to get all universities with their about section
router.get('/get', universityController.getUniversities);

// Get a single university by ID
router.get('/getById/:id', universityController.getUniversityById);

// Update a university by ID
router.put('/update/:id', universityController.updateUniversity);

// Delete a university by ID
router.delete('/delete/:id', universityController.deleteUniversity);
module.exports = router;
