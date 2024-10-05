const { About } = require('../models');

// Create a new university with associated about section, approvals, and jobs/internships
exports.createAboutUniversity = async (req, res) => {
  try {
    const { universityId,description,courseName,fees,duration } = req.body; // abouts, approvals, jobsInternships are arrays

    const university = await About.create({
        universityId,
        description,
        courseName,
        fees,
        duration

    }, {
    });

    res.status(201).json(university);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create university' });
  }
};

// Get university and associated about, approvals, and jobs/internships details
exports.getAboutUniversity = async (req, res) => {
    try {
        console.log("sadasdsd");
      const universities = await About.findAll({
      });
      res.status(200).json(universities);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to fetch universities' });
    }
  };
  
  // Get a single university by ID
exports.getAboutUniversityById = async (req, res) => {
    try {
      const { id } = req.params;
      const university = await About.findByPk(id, {
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
exports.updateAboutUniversity = async (req, res) => {
    try {
      const { id } = req.params;
      const {  universityId,description,courseName,fees,duration } = req.body;
  
      const university = await About.findByPk(id);
      if (!university) {
        return res.status(404).json({ error: 'University not found' });
      }
  
      // Update the university's fields
      await university.update({ universityId,description,courseName,fees,duration });
  
      // Update associated About, Approval, Emi, AdmissionProcess records
    //   if (abouts) {
    //     await About.bulkCreate(abouts, { updateOnDuplicate: ['description'], individualHooks: true });
    //   }
  
      res.status(200).json(university);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update university' });
    }
  };

  // Delete a university by ID
exports.deleteAboutUniversity = async (req, res) => {
    try {
      const { id } = req.params;
  
      const university = await About.findByPk(id);
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
  