// import React, { useEffect, useState } from "react";
// import './allUniversity.css'; // Import the CSS for styling
// import { useNavigate } from "react-router-dom"; 
// import { UilEdit, UilTrash } from "@iconscout/react-unicons";

// const AllUniversity = () => {
//     const [universities, setUniversities] = useState([]);
//     const [selectedUniversity, setSelectedUniversity] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     // Fetch university data from API
//     useEffect(() => {
//         const fetchUniversities = async () => {
//             try {
//                 const response = await fetch("http://localhost:8000/university/get");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch universities");
//                 }
//                 const data = await response.json();
//                 setUniversities(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUniversities();
//     }, []);

//     console.log("Data",universities?.abouts?.length);

//     const toggleDetails = (universityId) => {
//         setSelectedUniversity(selectedUniversity === universityId ? null : universityId);
//     };

//     if (loading) {
//         return <div className="loading">Loading universities...</div>;
//     }

//     if (error) {
//         return <div className="error">Error: {error}</div>;
//     }

//     const handleUniversity = async () => {
//         navigate("/add-university");
//       }

//       const handleDelete = async (id) => {
//         if (window.confirm("Are you sure you want to delete this course?")) {
//           try {
//             const response = await fetch(`http://localhost:8000/university/delete/${id}`, {
//               method: 'DELETE',
//             });
    
//             if (response.ok) {
//              // fetchCourses(); // Refresh the list after deletion
//             } else {
//               console.error("Failed to delete course:", response.statusText);
//             }
//           } catch (error) {
//             console.error("Error deleting course:", error);
//           }
//         }
//       };

//     return (
//      <div>
//          <h2>All University</h2>
//          <button className="courseBtn" onClick={handleUniversity} >Add University</button>
//         <div className="universities-container">
//             {universities.map((university) => (
//                 <div 
//                     key={university.id} 
//                     className={`university-card ${selectedUniversity === university.id ? "expanded" : ""}`}
//                 >
//                     <img src={university.logo} alt={`${university.name} logo`} className="university-logo" />
//                     <h2>{university.name}</h2>
//                     <button className="details-toggle-btn" onClick={() => toggleDetails(university.id)}>
//                         {selectedUniversity === university.id ? "Hide Details" : "View Details"}
//                     </button>
//                     <div className="icon-container">
//                         <UilEdit onClick={() => navigate(`/edit-cms/${university.id}`)} className="icon edit-icon" />
//                         <UilTrash onClick={() => handleDelete(university.id)} className="icon trash-icon" />
//                     </div>
                    
//                     <div className={`details-container ${selectedUniversity === university.id ? "show" : ""}`}>
//                         {/* Abouts Section */}
//                         <div className="detail-section">
//                             <h3>Courses</h3>
//                             {university.Abouts && university.Abouts.length > 0 ? (
//                                 university.Abouts.map((about, index) => (
//                                     <div key={index} className="about-info">
//                                         <p><strong>Course Name:</strong> {about.courseName}</p>
//                                         <p><strong>Description:</strong> {about.description}</p>
//                                         <p><strong>Fees:</strong> {about.fees}</p>
//                                         <p><strong>Duration:</strong> {about.duration}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No courses available.</p>
//                             )}
//                         </div>

//                         {/* EMI Details Section */}
//                         <div className="detail-section">
//                             <h3>EMI Details</h3>
//                             {university.Emis?.length > 0 ? (
//                                 university.Emis.map((emi, index) => (
//                                     <div key={index} className="emi-info">
//                                         <p><strong>Course:</strong> {emi.courseName}</p>
//                                         <p><strong>Fees:</strong> {emi.fees}</p>
//                                         <p><strong>Loan Amount:</strong> {emi.loanAmount}</p>
//                                         <p><strong>Installment per Month:</strong> {emi.installmentInMonth}</p>
//                                         <p><strong>Total Interest:</strong> {emi.totalInterest}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No EMI details available.</p>
//                             )}
//                         </div>

//                         {/* Approvals Section */}
//                         <div className="detail-section">
//                             <h3>Approvals</h3>
//                             {university.Approvals?.length > 0 ? (
//                                 university.Approvals.map((approval, index) => (
//                                     <div key={index} className="approval-info">
//                                         {approval.img.split(',').map((image, i) => (
//                                             <img key={i} src={image.replace(/[\[\]\"]/g, '')} alt={`Approval ${i + 1}`} className="approval-image" />
//                                         ))}
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No approval information available.</p>
//                             )}
//                         </div>

//                         {/* Admission Process Section */}
//                         <div className="detail-section">
//                             <h3>Admission Process</h3>
//                             {university.AdmissionProcesses?.length > 0 ? (
//                                 university.AdmissionProcesses.map((process, index) => (
//                                     <div key={index} className="admission-info">
//                                         <p><strong>Description:</strong> {process.description}</p>
//                                         <ul>
//                                             {JSON.parse(process.steps).map((step, i) => (
//                                                 <li key={i}>{step}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No admission process available.</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div> 

//      </div>   

//     );
// };

// export default AllUniversity;


import React, { useEffect, useState } from "react";
import './allUniversity.css'; // Import the CSS for styling
import { useNavigate } from "react-router-dom"; 
import { UilEdit, UilTrash } from "@iconscout/react-unicons";

const AllUniversity = () => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch university data from API
    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await fetch("http://localhost:8000/university/get");
                if (!response.ok) {
                    throw new Error("Failed to fetch universities");
                }
                const data = await response.json();
                console.log("Fetched Data:", data); // Log the response data
                setUniversities(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, []);

    const toggleDetails = (universityId) => {
        setSelectedUniversity(selectedUniversity === universityId ? null : universityId);
    };

    if (loading) {
        return <div className="loading">Loading universities...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const handleUniversity = () => {
        navigate("/add-university");
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this university?")) {
            try {
                const response = await fetch(`http://localhost:8000/university/delete/${id}`, {
                    method: 'DELETE',
                });
    
                if (response.ok) {
                    // Update the state to remove the deleted university
                    setUniversities(universities.filter(university => university.id !== id));
                } else {
                    console.error("Failed to delete university:", response.statusText);
                }
            } catch (error) {
                console.error("Error deleting university:", error);
            }
        }
    };

    return (
        <div>
            <h2>All Universities</h2>
            <button className="courseBtn" onClick={handleUniversity}>Add University</button>
            <div className="universities-container">
                {universities.map((university) => (
                    <div 
                        key={university.id} 
                        className={`university-card ${selectedUniversity === university.id ? "expanded" : ""}`}
                    >
                        <img src={university.logo} alt={`${university.name} logo`} className="university-logo" />
                        <h2>{university.name}</h2>
                        <button className="details-toggle-btn" onClick={() => toggleDetails(university.id)}>
                            {selectedUniversity === university.id ? "Hide Details" : "View Details"}
                        </button>
                        <div className="icon-container">
                            {/* <UilEdit onClick={() => navigate(`/edit-cms/${university.id}`)} className="icon edit-icon" /> */}
                            <UilTrash onClick={() => handleDelete(university.id)} className="icon trash-icon" />
                        </div>
                        
                        <div className={`details-container ${selectedUniversity === university.id ? "show" : ""}`}>
                            {/* About Section */}
                            <div className="detail-section">
                                <h3>Courses</h3>
                                {university.abouts && university.abouts.length > 0 ? (
                                    university.abouts.map((about, index) => (
                                        <div key={index} className="about-info">
                                            <p><strong>Course Name:</strong> {about.courseName}</p>
                                            <p><strong>Description:</strong> {about.description}</p>
                                            <p><strong>Fees:</strong> {about.fees}</p>
                                            <p><strong>Duration:</strong> {about.duration}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No courses available.</p>
                                )}
                            </div>

                            {/* EMI Details Section */}
                            <div className="detail-section">
                                <h3>EMI Details</h3>
                                {university.emis?.length > 0 ? (
                                    university.emis.map((emi, index) => (
                                        <div key={index} className="emi-info">
                                            <p><strong>Course:</strong> {emi.courseName}</p>
                                            <p><strong>Fees:</strong> {emi.fees}</p>
                                            <p><strong>Loan Amount:</strong> {emi.loanAmount}</p>
                                            <p><strong>Installment per Month:</strong> {emi.installmentInMonth}</p>
                                            <p><strong>Total Interest:</strong> {emi.totalInterest}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No EMI details available.</p>
                                )}
                            </div>

                            {/* Approvals Section */}
                            <div className="detail-section">
                                <h3>Approvals</h3>
                                {university.approvals?.length > 0 ? (
                                    university.approvals.map((approval, index) => (
                                        <div key={index} className="approval-info">
                                            {JSON.parse(approval.img).map((image, i) => (
                                                <img key={i} src={image.replace(/[\[\]\"]/g, '')} alt={`Approval ${i + 1}`} className="approval-image" />
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <p>No approval information available.</p>
                                )}
                            </div>

                            {/* Admission Process Section */}
                            <div className="detail-section">
                                <h3>Admission Process</h3>
                                {university.admissionProcesses?.length > 0 ? (
                                    university.admissionProcesses.map((process, index) => (
                                        <div key={index} className="admission-info">
                                            <p><strong>Description:</strong> {process.description}</p>
                                            <ul>
                                                {JSON.parse(process.steps).map((step, i) => (
                                                    <li key={i}>{step}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>No admission process available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
        </div>   
    );
};

export default AllUniversity;
