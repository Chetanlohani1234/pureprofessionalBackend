// EditCourse.js
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./AddCourse.css";

const EditCourse = () => {
    const { id: courseId } = useParams(); 
    const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    description: "",
    duration: "",
    fees: "",
    prerequisites: "",
  });

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId]);

  
  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/course/getById/${courseId}`);
      const data = await response.json();
      setCourseDetails(data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

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
      const response = await fetch(`http://localhost:8000/course/update/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseDetails),
      });

      if (response.ok) {
        console.log("Course updated successfully");
        navigate('/all-cms');
        // Redirect to AllCourses or show success message
      } else {
        console.error("Failed to update course:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="add-course-container">
      <h2>Edit Course Details</h2>
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
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
