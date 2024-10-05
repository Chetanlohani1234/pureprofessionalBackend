// AllCourses.js
import React, { useEffect, useState } from "react";
import { UilEdit, UilTrash } from "@iconscout/react-unicons";
import "./AllCourses.css"; // Make sure to style your table
import { useNavigate } from "react-router-dom"; 

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8000/course/get');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        const response = await fetch(`http://localhost:8000/course/delete/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchCourses(); // Refresh the list after deletion
        } else {
          console.error("Failed to delete course:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  const handleCourse = async () => {
    navigate("/add-cms");
  }

  return (
    <div className="all-courses-container">
      <h2>All Courses</h2>
      <button className="courseBtn" onClick={handleCourse} >Add Course</button>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Fees</th>
            <th>Prerequisites</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.duration} weeks</td>
              <td>${course.fees}</td>
              <td>{course.prerequisites}</td>
              <td>
                {/* <UilEdit onClick={() => console.log("Edit course", course.id)} /> */}
                <UilEdit onClick={() => navigate(`/edit-cms/${course.id}`)} />
                <UilTrash onClick={() => handleDelete(course.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCourse;
