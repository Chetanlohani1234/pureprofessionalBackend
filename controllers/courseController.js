// controllers/courseController.js

const { Course } = require('../models');

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { name, description, duration, fees, prerequisites } = req.body;
    const course = await Course.create({ name, description, duration, fees, prerequisites });
    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create course' });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Get a single course
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      return res.status(200).json(course);
    }
    return res.status(404).json({ error: 'Course not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch course' });
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      const { name, description, duration, fees, prerequisites } = req.body;
      await course.update({ name, description, duration, fees, prerequisites });
      return res.status(200).json(course);
    }
    return res.status(404).json({ error: 'Course not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update course' });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      await course.destroy();
      return res.status(200).json({ message: 'Course deleted' });
    }
    return res.status(404).json({ error: 'Course not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete course' });
  }
};
