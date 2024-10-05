import React, { useState } from "react";
import "./AddCourse.css";

const AddCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    description: "",
    duration: "",
    fees: "",
    prerequisites: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({
      ...courseDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/course/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseDetails),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Course added successfully:", result);
        // Optionally, reset form fields
        setCourseDetails({
          name: "",
          description: "",
          duration: "",
          fees: "",
          prerequisites: "",
        });
      } else {
        console.error("Failed to add course:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="add-course-container">
      <h2>Add Course Details</h2>
      <form className="add-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            name="name"
            value={courseDetails.name}
            onChange={handleChange}
            required
            placeholder="Enter course name"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={courseDetails.description}
            onChange={handleChange}
            required
            placeholder="Enter course description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Duration (weeks):</label>
          <input
            type="number"
            name="duration"
            value={courseDetails.duration}
            onChange={handleChange}
            required
            placeholder="Enter duration"
          />
        </div>

        <div className="form-group">
          <label>Fees:</label>
          <input
            type="number"
            name="fees"
            value={courseDetails.fees}
            onChange={handleChange}
            required
            placeholder="Enter course fees"
          />
        </div>

        <div className="form-group">
          <label>Prerequisites:</label>
          <input
            type="text"
            name="prerequisites"
            value={courseDetails.prerequisites}
            onChange={handleChange}
            required
            placeholder="Enter course prerequisites"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
