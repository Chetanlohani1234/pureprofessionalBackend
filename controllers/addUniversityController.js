const { University } = require('../models');

//Create a new university with associated about section, approvals, and jobs/internships
exports.createAddUniversity = async (req, res) => {
  try {
    const { name, logo } = req.body; // abouts, approvals, jobsInternships are arrays

    const university = await University.create({
      name,
      logo
    }, {
    });

    res.status(201).json(university);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create university' });
  }
};


// Get university and associated about, approvals, and jobs/internships details
exports.getAddUniversities = async (req, res) => {
    try {
        console.log("sadasdsd");
      const universities = await University.findAll({
      });
      res.status(200).json(universities);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to fetch universities' });
    }
  };
  
  // Get a single university by ID
exports.getAddUniversityById = async (req, res) => {
    try {
      const { id } = req.params;
      const university = await University.findByPk(id, {

      });
  
      if (!university) {
        return res.status(404).json({ error: 'University not found' });
      }
  
      res.status(200).json(university);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch university' });
    }
  };

  // Update a university by ID
exports.updateAddUniversity = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, logo} = req.body;
  
      const university = await University.findByPk(id);
      if (!university) {
        return res.status(404).json({ error: 'University not found' });
      }
  
      // Update the university's fields
      await university.update({ name, logo });
      res.status(200).json(university);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update university' });
    }
  };

  // Delete a university by ID
exports.deleteAddUniversity = async (req, res) => {
    try {
      const { id } = req.params;
  
      const university = await University.findByPk(id);
      if (!university) {
        return res.status(404).json({ error: 'University not found' });
      }
  
      // Delete the university and all associated records
      await university.destroy();
  
      res.status(200).json({ message: 'University deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete university' });
    }
  };
  