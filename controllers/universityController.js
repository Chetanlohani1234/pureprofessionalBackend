const { University, About, Approval,Emi, AdmissionProcess } = require('../models');
const { sequelize } = require('../models'); // Make sure to import sequelize
// Create a new university with associated about section, approvals, and jobs/internships
// exports.createUniversity = async (req, res) => {
//   try {
//     const { name, logo, abouts, approvals,emis, admissionProcess } = req.body; // abouts, approvals, jobsInternships are arrays

//     const university = await University.create({
//       name,
//       logo,
//       Abouts: abouts, // Create associated about sections
//       Approvals: approvals, // Create associated approvals
//       Emis : emis,
//       AdmissionProcesses: admissionProcess,
//     }, {
//       include: [About, Approval,Emi,AdmissionProcess] // Include associated models
//     });

//     res.status(201).json(university);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create university' });
//   }
// };

// Create a new university with associated about sections, approvals, EMIs, and admission processes
// exports.createUniversity = async (req, res) => {
//   try {
//     const { name, logo, abouts, approvals, emis, admissionProcess } = req.body; // abouts, approvals, emis, admissionProcess are arrays
//     console.log('Received data:', req.body);
//     // Validate input
//     // if (!name) {
//     //   return res.status(400).json({ message: 'Name is required' });
//     // }

//     // Create the university entry
//     const university = await University.create({
//       name,
//       logo,
//     });

//     // Create associated about sections
//     if (abouts && abouts.length > 0) {
//       await Promise.all(abouts.map(async (about) => {
//         await About.create({
//           universityId: university.id,
//           description: about.description,
//           courseName: about.courseName,
//           fees: about.fees,
//           duration: about.duration,
//         });
//       }));
//     }

//     // Create associated approvals
//     if (approvals && approvals.length > 0) {
//       await Promise.all(approvals.map(async (approval) => {
//         await Approval.create({
//           universityId: university.id,
//           documentPath: approval.documentPath,
//         });
//       }));
//     }

//     // Create associated EMIs
//     if (emis && emis.length > 0) {
//       await Promise.all(emis.map(async (emi) => {
//         await Emi.create({
//           universityId: university.id,
//           emiAmount: emi.emiAmount,
//           tenure: emi.tenure,
//           installmentsInMonth: emi.installmentsInMonth,
//           totalInterest: emi.totalInterest,
//         });
//       }));
//     }

//     // Create associated admission processes
//     if (admissionProcess && admissionProcess.length > 0) {
//       await Promise.all(admissionProcess.map(async (process) => {
//         const admissionEntry = await AdmissionProcess.create({
//           universityId: university.id,
//           description: process.description,
//         });

//         // If there are steps associated with the admission process
//         if (process.steps && process.steps.length > 0) {
//           await Promise.all(process.steps.map(async (step) => {
//             await AdmissionStep.create({
//               admissionProcessId: admissionEntry.id,
//               step,
//             });
//           }));
//         }
//       }));
//     }

//     res.status(201).json(university);
//   } catch (error) {
//     console.error('Error creating university:', error); // More specific error log
//     res.status(500).json({ error: 'Failed to create university', details: error.message });
//   }
// };

// exports.createUniversity = async (req, res) => {
//   const { name, logo, Abouts, Approvals, Emis, admissionProcess } = req.body;

//   // if (!name || !logo) {
//   //     return res.status(400).json({ message: 'Name and logo are required' });
//   // }

//   try {
//       const university = await University.create({ name, logo });

//       // Insert Abouts
//       if (Abouts) {
//           await About.bulkCreate(
//               Abouts.map((about) => ({ ...about }))
//           );
//       }

//       // Insert Approvals
//       if (Approvals) {
//           await Approval.bulkCreate(
//               Approvals.map((approval) => ({ ...approval}))
//           );
//       }

//       // Insert Emis
//       if (Emis) {
//           await Emi.create({ ...Emis});
//       }

// if (admissionProcess && Array.isArray(admissionProcess)) {
//   await AdmissionProcess.bulkCreate(
//       admissionProcess.map((process) => ({ ...process }))
//   );
// }


//       res.status(201).json(university);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error inserting data' });
//   }
// };


// exports.createUniversity = async (req, res) => {
//   console.log(req.body); // Log the request data for debugging

//   const { Abouts, Approvals, Emis, admissionProcess } = req.body;

//   try {
//      // const university = await University.create({ name, logo });

//     //   if (!name || !logo) {
//     //     return res.status(400).json({ message: 'Name and logo are required' });
//     // }
    
//     if (Abouts && Array.isArray(Abouts)) {
//         Abouts.forEach(about => {
//             if (!about.description || !about.courseName || !about.fees || !about.duration) {
//                 return res.status(400).json({ message: 'All About fields must be provided' });
//             }
//         });
//     }
    
//     if (Approvals && Array.isArray(Approvals)) {
//         Approvals.forEach(approval => {
//             if (!approval.img) {
//                 return res.status(400).json({ message: 'Approval images must be provided' });
//             }
//         });
//     }
    
//     if (Emis) {
//         if (!Emis.description || !Emis.courseName || !Emis.loanAmount || !Emis.tenure) {
//             return res.status(400).json({ message: 'All EMI fields must be provided' });
//         }
//     }
    
//     if (admissionProcess && Array.isArray(admissionProcess)) {
//         admissionProcess.forEach(process => {
//             if (!process.description || !process.steps) {
//                 return res.status(400).json({ message: 'All admission process fields must be provided' });
//             }
//         });
//     }
    

   
//       res.status(201).json(university);
//   } catch (error) {
//       console.error("Error inserting data:", error);
//       res.status(500).json({ message: 'Error inserting data', error: error.message });
//   }
// };

exports.createUniversity = async (req, res) => {
  console.log(req.body); // Log the request data for debugging

  const { Abouts, Approvals, Emis, admissionProcess } = req.body;

  try {
    // Insert Abouts data
    if (Abouts && Array.isArray(Abouts)) {
      for (const about of Abouts) {
        if (!about.description || !about.courseName || !about.fees || !about.duration) {
          return res.status(400).json({ message: 'All About fields must be provided' });
        }

        // Replace this with your database query to insert 'about' data into Abouts table
        await About.create({
          universityId: about.universityId,
          description: about.description,
          courseName: about.courseName,
          fees: about.fees,
          duration: about.duration,
        });
      }
    }

    // Insert Approvals data
    if (Approvals && Array.isArray(Approvals)) {
      for (const approval of Approvals) {
        if (!approval.img) {
          return res.status(400).json({ message: 'Approval images must be provided' });
        }

        // Replace this with your database query to insert 'approval' data into Approvals table
        await Approval.create({
          universityId: approval.universityId,
          img: approval.img, // Assuming you're handling file uploads somewhere else
        });
      }
    }

    // Insert EMI data
    if (Emis) {
      if (!Emis.description || !Emis.courseName || !Emis.loanAmount || !Emis.tenure) {
        return res.status(400).json({ message: 'All EMI fields must be provided' });
      }

      // Replace this with your database query to insert 'emi' data into Emis table
      await Emi.create({
        universityId: Emis.universityId,
        description: Emis.description,
        courseName: Emis.courseName,
        fees: Emis.fees,
        loanAmount: Emis.loanAmount,
        tenure: Emis.tenure,
        installmentInMonth: Emis.installmentInMonth,
        totalInterest: Emis.totalInterest,
      });
    }

    // Insert admission process data
    if (admissionProcess && Array.isArray(admissionProcess)) {
      for (const process of admissionProcess) {
        if (!process.description || !process.steps) {
          return res.status(400).json({ message: 'All admission process fields must be provided' });
        }

        // Replace this with your database query to insert 'process' data into AdmissionProcess table
        await AdmissionProcess.create({
          universityId: process.universityId,
          description: process.description,
          steps: process.steps, // Assuming 'steps' is an array, you may need to handle it accordingly in the DB
        });
      }
    }

    // Send success response
    res.status(201).json({ message: 'Data added successfully' });

  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: 'Error inserting data', error: error.message });
  }
};




// Get university and associated about, approvals, and jobs/internships details
exports.getUniversities = async (req, res) => {
  try {
      console.log("Fetching universities...");
      const universities = await University.findAll({
          include: [
              { model: About, as: 'abouts' }, // Use the correct alias
              { model: Approval, as: 'approvals' }, // Use the correct alias
              { model: Emi, as: 'emis' }, // Use the correct alias
              { model: AdmissionProcess, as: 'admissionProcesses' } // Use the correct alias
          ]
      });
      res.status(200).json(universities);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch universities' });
  }
};



  // Get a single university by ID
exports.getUniversityById = async (req, res) => {
    try {
      const { id } = req.params;
      const university = await University.findByPk(id, {
        include: [
          { model: About, as: 'Abouts' }, 
          { model: Approval, as: 'Approvals' },
          { model: Emi, as: 'Emis' },
          { model: AdmissionProcess, as: 'AdmissionProcesses' }
        ]
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
exports.updateUniversity = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, logo, abouts, approvals, emis, admissionProcess } = req.body;
  
      const university = await University.findByPk(id);
      if (!university) {
        return res.status(404).json({ error: 'University not found' });
      }
  
      // Update the university's fields
      await university.update({ name, logo });
  
      // Update associated About, Approval, Emi, AdmissionProcess records
      if (abouts) {
        await About.bulkCreate(abouts, { updateOnDuplicate: ['description'], individualHooks: true });
      }
      if (approvals) {
        await Approval.bulkCreate(approvals, { updateOnDuplicate: ['status'], individualHooks: true });
      }
      if (emis) {
        await Emi.bulkCreate(emis, { updateOnDuplicate: ['courseName', 'loanAmount'], individualHooks: true });
      }
      if (admissionProcess) {
        await AdmissionProcess.bulkCreate(admissionProcess, { updateOnDuplicate: ['description', 'steps'], individualHooks: true });
      }
  
      res.status(200).json(university);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update university' });
    }
  };

  // Delete a university by ID
exports.deleteUniversity = async (req, res) => {
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
  