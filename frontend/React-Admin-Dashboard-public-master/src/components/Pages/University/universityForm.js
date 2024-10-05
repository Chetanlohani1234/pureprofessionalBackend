// import React, { useState } from "react";
// import "./UniversityForm.css"; // Import your styles here
// import Tab from "../tab"; // Ensure you have the Tab component from the previous implementation

// const UniversityForm = () => {
//   const [universityDetails, setUniversityDetails] = useState({
//     name: "",
//     logo: "",
//     about: "",
//     duration: "",
//     fees: "",
//     prerequisites: "",
//     emi: "",
//     approvals: [],
//     admissionProcess: {
//       description: "",
//       steps: [""],
//     },
//   });

//   const [selectedTab, setSelectedTab] = useState("general"); // State to manage selected tab
//   const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUniversityDetails({
//       ...universityDetails,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUniversityDetails({ ...universityDetails, logo: file });
//     }
//   };

//   const handleMultipleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       approvals: files,
//     }));
//   };

//   const handleAdmissionStepChange = (index, value) => {
//     const newSteps = [...universityDetails.admissionProcess.steps];
//     newSteps[index] = value;
//     setUniversityDetails({
//       ...universityDetails,
//       admissionProcess: {
//         ...universityDetails.admissionProcess,
//         steps: newSteps,
//       },
//     });
//   };

//   const addAdmissionStep = () => {
//     setUniversityDetails({
//       ...universityDetails,
//       admissionProcess: {
//         ...universityDetails.admissionProcess,
//         steps: [...universityDetails.admissionProcess.steps, ""],
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Show submitted data (you can also call an API here)
//     setSubmittedData(universityDetails);
//     console.log("University Details Submitted:", universityDetails);
//   };

//   const tabs = [
//     { id: "general", label: "University Info" },
//     { id: "about", label: "About" },
//     { id: "emi", label: "EMI Section" },
//     { id: "approvals", label: "Approvals" },
//     { id: "admission", label: "Admission Process" },
//   ];

//   return (
//     <div className="university-form-container">
//       <h2>University Details Form</h2>
//       <Tab tabs={tabs} selectedTab={selectedTab} onSelect={setSelectedTab} />

//       <form className="university-form" onSubmit={handleSubmit}>
//         {selectedTab === "general" && (
//           <>
//             <div className="form-group">
//               <label>University Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={universityDetails.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter university name"
//               />
//             </div>

//             <div className="form-group">
//               <label>University Logo:</label>
//               <input
//                 type="file"
//                 name="logo"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "about" && (
//           <>
//             <div className="form-group">
//               <label>About the University:</label>
//               <textarea
//                 name="about"
//                 value={universityDetails.about}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter about information"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Duration (weeks):</label>
//               <input
//                 type="number"
//                 name="duration"
//                 value={universityDetails.duration}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter duration"
//               />
//             </div>

//             <div className="form-group">
//               <label>Fees:</label>
//               <input
//                 type="number"
//                 name="fees"
//                 value={universityDetails.fees}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter course fees"
//               />
//             </div>

//             <div className="form-group">
//               <label>Prerequisites:</label>
//               <input
//                 type="text"
//                 name="prerequisites"
//                 value={universityDetails.prerequisites}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter course prerequisites"
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "emi" && (
//           <div className="form-group">
//             <label>Course Name:</label>
//             <input
//               type="text"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Course Name"
//             />

//             <label>Fees:</label>
//             <input
//               type="number"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Fees"
//             />

//             <label>Loan Amount:</label>
//             <input
//               type="number"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Loan amount"
//             />

//             <label>Tenure:</label>
//             <input
//               type="number"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Tenure"
//             />

//             <label>Installment In Month:</label>
//             <input
//               type="number"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Installment In Month"
//             />

//             <label>Total Interest:</label>
//             <input
//               type="number"
//               name="emi"
//               value={universityDetails.emi}
//               onChange={handleChange}
//               required
//               placeholder="Enter Total Interest"
//             />
//           </div>
//         )}

//         {selectedTab === "approvals" && (
//           <div className="form-group">
//             <label>Approvals (Upload multiple images):</label>
//             <input
//               type="file"
//               name="approvals"
//               accept="image/*"
//               multiple
//               onChange={handleMultipleFilesChange}
//               required
//             />
//           </div>
//         )}

//         {selectedTab === "admission" && (
//           <>
//             <div className="form-group">
//               <label>Admission Process Description:</label>
//               <textarea
//                 name="description"
//                 value={universityDetails.admissionProcess.description}
//                 onChange={(e) =>
//                   setUniversityDetails({
//                     ...universityDetails,
//                     admissionProcess: {
//                       ...universityDetails.admissionProcess,
//                       description: e.target.value,
//                     },
//                   })
//                 }
//                 required
//                 placeholder="Enter admission process description"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Steps:</label>
//               {universityDetails.admissionProcess.steps.map((step, index) => (
//                 <div key={index} className="form-group">
//                   <input
//                     type="text"
//                     value={step}
//                     onChange={(e) =>
//                       handleAdmissionStepChange(index, e.target.value)
//                     }
//                     placeholder={`Step ${index + 1}`}
//                     required
//                   />
//                 </div>
//               ))}
//               <button type="button" onClick={addAdmissionStep}>
//                 Add Step
//               </button>
//             </div>
//           </>
//         )}

//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>

//       {submittedData && (
//         <div className="submitted-data">
//           <h3>Submitted Data:</h3>
//           <pre>{JSON.stringify(submittedData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UniversityForm;


// import React, { useState } from "react";
// import "./UniversityForm.css"; // Import your styles here
// import Tab from "../tab"; // Ensure you have the Tab component from the previous implementation

// const UniversityForm = () => {
//   const [universityDetails, setUniversityDetails] = useState({
//     name: "",
//     logo: null, // Changed to null initially
//     about: "",
//     duration: "",
//     fees: "",
//     prerequisites: "",
//     emi: {
//       courseName: "",
//       fees: "",
//       loanAmount: "",
//       tenure: "",
//       installmentsInMonth: "",
//       totalInterest: "",
//     },
//     approvals: [], // Store uploaded documents
//     admissionProcess: {
//       description: "",
//       steps: [""],
//     },
//   });

//   const [selectedTab, setSelectedTab] = useState("general");
//   const [submittedData, setSubmittedData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUniversityDetails((prevState) => ({ ...prevState, logo: file }));
//     }
//   };

//   const handleMultipleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       approvals: files,
//     }));
//   };

//   const handleAdmissionStepChange = (index, value) => {
//     const newSteps = [...universityDetails.admissionProcess.steps];
//     newSteps[index] = value;
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       admissionProcess: {
//         ...prevState.admissionProcess,
//         steps: newSteps,
//       },
//     }));
//   };

//   const addAdmissionStep = () => {
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       admissionProcess: {
//         ...prevState.admissionProcess,
//         steps: [...prevState.admissionProcess.steps, ""],
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare the form data for submission
//     const formData = new FormData();
    
//     // Append fields to the FormData object
//     formData.append("name", universityDetails.name);
//     formData.append("logo", universityDetails.logo); // File upload for logo
//     formData.append("about", universityDetails.about);
//     formData.append("duration", universityDetails.duration);
//     formData.append("fees", universityDetails.fees);
//     formData.append("prerequisites", universityDetails.prerequisites);

//     // Append EMI details
//     formData.append("emi.courseName", universityDetails.emi.courseName);
//     formData.append("emi.fees", universityDetails.emi.fees);
//     formData.append("emi.loanAmount", universityDetails.emi.loanAmount);
//     formData.append("emi.tenure", universityDetails.emi.tenure);
//     formData.append("emi.installmentsInMonth", universityDetails.emi.installmentsInMonth);
//     formData.append("emi.totalInterest", universityDetails.emi.totalInterest);

//     // Append admission process details
//     formData.append("admissionProcess.description", universityDetails.admissionProcess.description);
//     universityDetails.admissionProcess.steps.forEach((step, index) => {
//       formData.append(`admissionProcess.steps[${index}]`, step);
//     });

//     // Append approvals files
//     universityDetails.approvals.forEach((file, index) => {
//       formData.append(`approvals[${index}]`, file);
//     });

//     // Call the API
//     try {
//       const response = await fetch("http://localhost:8000/university/add", {
//         method: "POST",
//         body: formData,
//       });

//       // Handle response
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Network response was not ok");
//       }

//       const data = await response.json();
//       setSubmittedData(data); // Update state with submitted data or response
//       setError(null); // Clear any previous errors
//       console.log("Success:", data);
//     } catch (error) {
//       setError(error.message); // Set the error message to display
//       console.error("Error submitting the form:", error);
//     }
//   };

//   const tabs = [
//     { id: "general", label: "University Info" },
//     { id: "about", label: "About" },
//     { id: "emi", label: "EMI Section" },
//     { id: "approvals", label: "Approvals" },
//     { id: "admission", label: "Admission Process" },
//   ];

//   return (
//     <div className="university-form-container">
//       <h2>University Details Form</h2>
//       <Tab tabs={tabs} selectedTab={selectedTab} onSelect={setSelectedTab} />

//       <form className="university-form" onSubmit={handleSubmit}>
//         {selectedTab === "general" && (
//           <>
//             <div className="form-group">
//               <label>University Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={universityDetails.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter university name"
//               />
//             </div>

//             <div className="form-group">
//               <label>University Logo:</label>
//               <input
//                 type="file"
//                 name="logo"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "about" && (
//           <>
//             <div className="form-group">
//               <label>About the University:</label>
//               <textarea
//                 name="about"
//                 value={universityDetails.about}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter about information"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Duration (weeks):</label>
//               <input
//                 type="number"
//                 name="duration"
//                 value={universityDetails.duration}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter duration"
//               />
//             </div>

//             <div className="form-group">
//               <label>Fees:</label>
//               <input
//                 type="number"
//                 name="fees"
//                 value={universityDetails.fees}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter course fees"
//               />
//             </div>

//             <div className="form-group">
//               <label>Prerequisites:</label>
//               <input
//                 type="text"
//                 name="prerequisites"
//                 value={universityDetails.prerequisites}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter course prerequisites"
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "emi" && (
//           <>
//             <div className="form-group">
//               <label>Course Name:</label>
//               <input
//                 type="text"
//                 name="courseName"
//                 value={universityDetails.emi.courseName}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, courseName: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Course Name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Fees:</label>
//               <input
//                 type="number"
//                 name="fees"
//                 value={universityDetails.emi.fees}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, fees: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Fees"
//               />
//             </div>

//             <div className="form-group">
//               <label>Loan Amount:</label>
//               <input
//                 type="number"
//                 name="loanAmount"
//                 value={universityDetails.emi.loanAmount}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, loanAmount: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Loan amount"
//               />
//             </div>

//             <div className="form-group">
//               <label>Tenure (months):</label>
//               <input
//                 type="number"
//                 name="tenure"
//                 value={universityDetails.emi.tenure}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, tenure: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Tenure"
//               />
//             </div>

//             <div className="form-group">
//               <label>Installments in Month:</label>
//               <input
//                 type="number"
//                 name="installmentsInMonth"
//                 value={universityDetails.emi.installmentsInMonth}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, installmentsInMonth: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Installments"
//               />
//             </div>

//             <div className="form-group">
//               <label>Total Interest:</label>
//               <input
//                 type="number"
//                 name="totalInterest"
//                 value={universityDetails.emi.totalInterest}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     emi: { ...prevState.emi, totalInterest: e.target.value },
//                   }))
//                 }
//                 required
//                 placeholder="Enter Total Interest"
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "approvals" && (
//           <>
//             <div className="form-group">
//               <label>Upload Approval Documents:</label>
//               <input
//                 type="file"
//                 multiple
//                 accept="application/pdf"
//                 onChange={handleMultipleFilesChange}
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "admission" && (
//           <>
//             <div className="form-group">
//               <label>Admission Process Description:</label>
//               <textarea
//                 name="description"
//                 value={universityDetails.admissionProcess.description}
//                 onChange={(e) =>
//                   setUniversityDetails((prevState) => ({
//                     ...prevState,
//                     admissionProcess: {
//                       ...prevState.admissionProcess,
//                       description: e.target.value,
//                     },
//                   }))
//                 }
//                 required
//                 placeholder="Enter admission process description"
//               ></textarea>
//             </div>

//             {universityDetails.admissionProcess.steps.map((step, index) => (
//               <div className="form-group" key={index}>
//                 <label>Step {index + 1}:</label>
//                 <input
//                   type="text"
//                   value={step}
//                   onChange={(e) => handleAdmissionStepChange(index, e.target.value)}
//                   placeholder={`Enter step ${index + 1}`}
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={addAdmissionStep}>
//               Add Another Step
//             </button>
//           </>
//         )}

//         <button type="submit" className="submit-button">Submit</button>
//       </form>

//       {submittedData && <div className="success-message">University added successfully!</div>}
//       {error && <div className="error-message">Error: {error}</div>}
//     </div>
//   );
// };

// export default UniversityForm;

// import React, { useState, useEffect } from "react";
// import "./UniversityForm.css"; // Import your styles here
// import Tab from "../tab"; // Ensure you have the Tab component

// const UniversityForm = () => {
//   const [id, setId] = useState(null);
//   const [universityDetails, setUniversityDetails] = useState({
//     name: "",
//     logo: null, // Updated logo to be null
//     Abouts: [{
//       universityId: "",
//       description: "",
//       courseName: "",
//       fees: "",
//       duration: "",
//     }],
//     Approvals: [{
//       universityId: "",
//       img: [],
//     }],
//     Emis: {
//       description: "",
//       courseName: "",
//       fees: "",
//       loanAmount: "",
//       tenure: "",
//       installmentInMonth: "",
//       totalInterest: "",
//       universityId: "",
//     },
//     admissionProcess: [{
//       universityId: "",
//       description: "",
//       steps: [""],
//     }],
//   });

//   const [selectedTab, setSelectedTab] = useState("general");
//   const [submittedData, setSubmittedData] = useState(null);
//   const [error, setError] = useState(null);

//   // Fetch the universities to set the university ID
//   useEffect(() => {
//     const fetchUniversities = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/addUniversity/get");
//         if (!response.ok) {
//           throw new Error("Failed to fetch universities");
//         }
//         const data = await response.json();
//         if (data.length > 0) {
//           const lastUniversity = data[data.length - 1];
//           setId(lastUniversity.id + 1);
//         }
//       } catch (error) {
//         console.error("Error fetching universities:", error);
//         setError("Failed to fetch university data");
//       }
//     };

//     fetchUniversities();
//   }, []);

//   // Update universityDetails whenever the ID is set
//   useEffect(() => {
//     if (id) {
//       setUniversityDetails((prevState) => ({
//         ...prevState,
//         Abouts: [{ ...prevState.Abouts[0], universityId: id }],
//         Approvals: [{ ...prevState.Approvals[0], universityId: id }],
//         Emis: { ...prevState.Emis, universityId: id },
//         admissionProcess: [{ ...prevState.admissionProcess[0], universityId: id }],
//       }));
//     }
//   }, [id]);

//   // Handle change for simple input fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle file input change for logo
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUniversityDetails((prevState) => ({ ...prevState, logo: file }));
//     }
//   };

//   // Handle multiple file inputs for Approvals images
//   const handleMultipleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       Approvals: [{ ...prevState.Approvals[0], img: files }],
//     }));
//   };

//   // Handle admission process steps
//   const handleAdmissionStepChange = (index, value) => {
//     const newSteps = [...universityDetails.admissionProcess[0].steps];
//     newSteps[index] = value;
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       admissionProcess: [{ ...prevState.admissionProcess[0], steps: newSteps }],
//     }));
//   };

//   const addAdmissionStep = () => {
//     setUniversityDetails((prevState) => ({
//       ...prevState,
//       admissionProcess: [{
//         ...prevState.admissionProcess[0],
//         steps: [...prevState.admissionProcess[0].steps, ""],
//       }],
//     }));
//   };

//   console.log("dsasds",universityDetails.logo);

//   // Handle form submission
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const formData = new FormData();
    
//   //   // Append name and logo
//   //   formData.append("name", universityDetails.name);
//   //   formData.append("logo", universityDetails.logo.name); // Append actual file

//   //   // Create and append the abouts array
//   //   const abouts = universityDetails.Abouts.map(about => ({
//   //     universityId: about.universityId,
//   //     description: about.description,
//   //     courseName: about.courseName,
//   //     duration: about.duration,
//   //     fees: about.fees,
//   //   }));
//   //   formData.append("abouts", JSON.stringify(abouts));

//   //   // Append the emis object
//   //   const emis = {
//   //     universityId: universityDetails.Emis.universityId,
//   //     description: universityDetails.Emis.description,
//   //     courseName: universityDetails.Emis.courseName,
//   //     fees: universityDetails.Emis.fees,
//   //     loanAmount: universityDetails.Emis.loanAmount,
//   //     tenure: universityDetails.Emis.tenure,
//   //     installmentsInMonth: universityDetails.Emis.installmentInMonth,
//   //     totalInterest: universityDetails.Emis.totalInterest,
//   //   };
//   //   formData.append("emis", JSON.stringify(emis));

//   //   // Append the approvals array with images
//   //   const approvals = universityDetails.Approvals.map(approval => ({
//   //     universityId: approval.universityId,
//   //     img: approval.img, // Assuming img is an array of files
//   //   }));
//   //   formData.append("approvals", JSON.stringify(approvals));

//   //   // Append admission process
//   //   const admissionProcess = universityDetails.admissionProcess?.map(process => ({
//   //     universityId: process.universityId,
//   //     description: process.description,
//   //     steps: process.steps, // Array of strings
//   //   }));
//   //   formData.append("admissionProcess", JSON.stringify(admissionProcess));

//   //   // Make API request
//   //   try {
//   //     const response = await fetch("http://localhost:8000/university/add", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.message || "Network response was not ok");
//   //     }

//   //     const data = await response.json();
//   //     setSubmittedData(data);
//   //     setError(null);
//   //     console.log("Success:", data);
//   //   } catch (error) {
//   //     setError(error.message);
//   //     console.error("Error submitting the form:", error);
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
    
//     formData.append("name", universityDetails.name);
//     formData.append("logo", universityDetails.logo.name); // Append actual file

//     // Append Abouts
//     if (universityDetails.Abouts) {
//         const abouts = universityDetails.Abouts.map(about => ({
//             universityId: about.universityId,
//             description: about.description,
//             courseName: about.courseName,
//             fees: about.fees,
//             duration: about.duration,
//         }));
//         formData.append("Abouts", JSON.stringify(abouts));
//     }

//     // Append Emis
//     if (universityDetails.Emis) {
//         const emis = {
//             universityId: universityDetails.Emis.universityId,
//             description: universityDetails.Emis.description,
//             courseName: universityDetails.Emis.courseName,
//             fees: universityDetails.Emis.fees,
//             loanAmount: universityDetails.Emis.loanAmount,
//             tenure: universityDetails.Emis.tenure,
//             installmentInMonth: universityDetails.Emis.installmentInMonth,
//             totalInterest: universityDetails.Emis.totalInterest,
//         };
//         formData.append("Emis", JSON.stringify(emis));
//     }

//     // Append Approvals
//     if (universityDetails.Approvals) {
//         const approvals = universityDetails.Approvals.map(approval => ({
//             universityId: approval.universityId,
//             img: approval.img, // Assuming img is an array of files
//         }));
//         formData.append("Approvals", JSON.stringify(approvals));
//     }

//     // Append Admission Processes
//     if (universityDetails.admissionProcess) {
//         const admissionProcesses = universityDetails.admissionProcess.map(process => ({
//             universityId: process.universityId,
//             description: process.description,
//             steps: process.steps,
//         }));
//         formData.append("admissionProcess", JSON.stringify(admissionProcesses));
//     }

//     // Make API request
//     try {
//         const response = await fetch("http://localhost:8000/university/add", {
//             method: "POST",
//             body: formData,
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Network response was not ok");
//         }

//         const data = await response.json();
//         setSubmittedData(data);
//         setError(null);
//         console.log("Success:", data);
//     } catch (error) {
//         setError(error.message);
//         console.error("Error submitting the form:", error);
//     }
// };


//   // Tab Configuration
//   const tabs = [
//     { id: "general", label: "University Info" },
//     { id: "about", label: "About" },
//     { id: "emi", label: "EMI Section" },
//     { id: "approvals", label: "Approvals" },
//     { id: "admission", label: "Admission Process" },
//   ];

//   return (
//     <div className="university-form-container">
//       <h2>University Details Form</h2>
//       <Tab tabs={tabs} selectedTab={selectedTab} onSelect={setSelectedTab} />

//       <form className="university-form" onSubmit={handleSubmit}>
//         {selectedTab === "general" && (
//           <>
//             <div className="form-group">
//               <label>University Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={universityDetails.name}
//                 onChange={(e) => setUniversityDetails({ ...universityDetails, name: e.target.value })}
//                 required
//                 placeholder="Enter university name"
//               />
//             </div>

//             <div className="form-group">
//               <label>University Logo:</label>
//               <input
//                 type="file"
//                 name="logo"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                // required
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "about" && (
//           <>
//             <div className="form-group">
//               <label>About the University:</label>
//               <textarea
//                 name="about"
//                 value={universityDetails.Abouts[0].description}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Abouts: [{ ...prevState.Abouts[0], description: e.target.value }],
//                 }))}
//                 required
//                 placeholder="Enter about information"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Course Name</label>
//               <input
//                 type="text"
//                 name="courseName"
//                 value={universityDetails.Abouts[0].courseName}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Abouts: [{ ...prevState.Abouts[0], courseName: e.target.value }],
//                 }))}
//                 required
//                 placeholder="Enter Course"
//               />
//             </div>

//             <div className="form-group">
//               <label>Duration (weeks):</label>
//               <input
//                 type="number"
//                 name="duration"
//                 value={universityDetails.Abouts[0].duration}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Abouts: [{ ...prevState.Abouts[0], duration: e.target.value }],
//                 }))}
//                 required
//                 placeholder="Enter duration"
//               />
//             </div>

//             <div className="form-group">
//               <label>Fees:</label>
//               <input
//                 type="number"
//                 name="fees"
//                 value={universityDetails.Abouts[0].fees}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Abouts: [{ ...prevState.Abouts[0], fees: e.target.value }],
//                 }))}
//                 required
//                 placeholder="Enter course fees"
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "emi" && (
//           <>
//             <div className="form-group">
//               <label>EMI Description:</label>
//               <textarea
//                 name="emiDescription"
//                 value={universityDetails.Emis.description}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, description: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter EMI description"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Course Name:</label>
//               <input
//                 type="text"
//                 name="emiCourseName"
//                 value={universityDetails.Emis.courseName}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, courseName: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter Course"
//               />
//             </div>

//             <div className="form-group">
//               <label>Fees:</label>
//               <input
//                 type="number"
//                 name="emiFees"
//                 value={universityDetails.Emis.fees}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, fees: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter Fees"
//               />
//             </div>

//             <div className="form-group">
//               <label>Loan Amount:</label>
//               <input
//                 type="number"
//                 name="loanAmount"
//                 value={universityDetails.Emis.loanAmount}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, loanAmount: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter loan amount"
//               />
//             </div>

//             <div className="form-group">
//               <label>Tenure (Months):</label>
//               <input
//                 type="number"
//                 name="tenure"
//                 value={universityDetails.Emis.tenure}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, tenure: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter tenure"
//               />
//             </div>

//             <div className="form-group">
//               <label>Installment per Month:</label>
//               <input
//                 type="number"
//                 name="installmentInMonth"
//                 value={universityDetails.Emis.installmentInMonth}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, installmentInMonth: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter installment amount"
//               />
//             </div>

//             <div className="form-group">
//               <label>Total Interest:</label>
//               <input
//                 type="number"
//                 name="totalInterest"
//                 value={universityDetails.Emis.totalInterest}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   Emis: { ...prevState.Emis, totalInterest: e.target.value },
//                 }))}
//                 required
//                 placeholder="Enter total interest"
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "approvals" && (
//           <>
//             <div className="form-group">
//               <label>Approval Images:</label>
//               <input
//                 type="file"
//                 name="approvals"
//                 accept="image/*"
//                 multiple
//                 onChange={handleMultipleFilesChange}
//                 //required
//               />
//             </div>
//           </>
//         )}

//         {selectedTab === "admission" && (
//           <>
//             <div className="form-group">
//               <label>Admission Process Description:</label>
//               <textarea
//                 name="admissionDescription"
//                 value={universityDetails.admissionProcess[0].description}
//                 onChange={(e) => setUniversityDetails((prevState) => ({
//                   ...prevState,
//                   admissionProcess: [{
//                     ...prevState.admissionProcess[0],
//                     description: e.target.value,
//                   }],
//                 }))}
//                 required
//                 placeholder="Enter admission process description"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Admission Steps:</label>
//               {universityDetails.admissionProcess[0].steps.map((step, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     value={step}
//                     onChange={(e) => handleAdmissionStepChange(index, e.target.value)}
//                     placeholder={`Step ${index + 1}`}
//                     required
//                   />
//                 </div>
//               ))}
//               <button type="button" onClick={addAdmissionStep}>
//                 Add Step
//               </button>
//             </div>
//           </>
//         )}

//         <button type="submit" className="submit-btn">
//           Submit
//         </button>

//         {error && <div className="error-message">{error}</div>}
//         {submittedData && (
//           <div className="success-message">
//             <h4>Form Submitted Successfully!</h4>
//             <pre>{JSON.stringify(submittedData, null, 2)}</pre>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default UniversityForm;

import React, { useState } from 'react';
import axios from 'axios';
import './UniversityForm.css';

const UniversityForm = () => {
  const [universityId, setUniversityId] = useState('');
  const [universityDetails, setUniversityDetails] = useState({
    name: '',
    logo: null,
    Abouts: [{ description: '', duration: '', fees: '', courseName: '' }],
    Emis: { description: '', courseName: '', fees: '', loanAmount: '', tenure: '', installmentInMonth: '', totalInterest: '' },
    Approvals: { img: [] },
    admissionProcess: [{ description: '', steps: [''] }]
  });
  const [selectedTab, setSelectedTab] = useState('general');
  const [error, setError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes for university info
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUniversityDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAboutChange = (index, e) => {
    const { name, value } = e.target;
    const newAbouts = [...universityDetails.Abouts];
    newAbouts[index][name] = value;
    setUniversityDetails((prevState) => ({
      ...prevState,
      Abouts: newAbouts
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUniversityDetails((prevState) => ({
      ...prevState,
      logo: file,
    }));
  };

  const handleMultipleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setUniversityDetails((prevState) => ({
      ...prevState,
      Approvals: { ...prevState.Approvals, documents: files },
    }));
  };

  const handleAdmissionStepChange = (index, value) => {
    const newSteps = [...universityDetails.admissionProcess[0].steps];
    newSteps[index] = value;
    setUniversityDetails((prevState) => ({
      ...prevState,
      admissionProcess: [{ ...prevState.admissionProcess[0], steps: newSteps }],
    }));
  };

  const addAdmissionStep = () => {
    setUniversityDetails((prevState) => ({
      ...prevState,
      admissionProcess: [{ ...prevState.admissionProcess[0], steps: [...prevState.admissionProcess[0].steps, ''] }],
    }));
  };

  // Handle first submission for university info
  const handleUniversityInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', universityDetails.name);
      formData.append('logo', universityDetails.logo.name);

      // Call API to generate university ID
      const response = await axios.post('http://localhost:8000/addUniversity/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Save the generated university ID
      setUniversityId(response.data.id);
      setError(null);
    } catch (error) {
      console.error('Error submitting university info:', error);
      setError('Failed to submit university info. Please try again.');
    }
  };

  // Handle second submission for all other tabs
  const handleOtherDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const otherFormData = {
        Abouts: universityDetails.Abouts.map(about => ({
          universityId,
          ...about
        })),
        Emis: {
          universityId,
          ...universityDetails.Emis
        },
        Approvals: {
          universityId,
          img: universityDetails.Approvals.documents.map(doc => doc.name)
        },
        admissionProcess: universityDetails.admissionProcess.map(process => ({
          universityId,
          ...process
        }))
      };

      // Submit all other data to the final API
      const finalResponse = await axios.post('http://localhost:8000/university/add', otherFormData);

      setSubmittedData(finalResponse.data);
      setError(null);
    } catch (error) {
      console.error('Error submitting other data:', error);
      setError('Failed to submit other data. Please try again.');
    }
  };

  return (
    <div className="university-form-container">
      <h2>Add University</h2>

      {/* First Submission Section */}
      <form onSubmit={handleUniversityInfoSubmit}>
        {selectedTab === 'general' && (
          <>
            <div className="form-group">
              <label>University Name:</label>
              <input
                type="text"
                name="name"
                value={universityDetails.name}
                onChange={handleInputChange}
                required
                placeholder="Enter university name"
              />
            </div>

            <div className="form-group">
              <label>Logo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit">Submit University Info</button>
          </>
        )}
      </form>

      {/* Second Submission Section for Other Tabs */}
      {universityId && (
        <form onSubmit={handleOtherDataSubmit}>
          <div className="tab-container">
            <button type="button" onClick={() => setSelectedTab('about')}>About</button>
            <button type="button" onClick={() => setSelectedTab('emi')}>EMI</button>
            <button type="button" onClick={() => setSelectedTab('approvals')}>Approvals</button>
            <button type="button" onClick={() => setSelectedTab('admission')}>Admission Process</button>
          </div>

          {selectedTab === 'about' && (
            <>
              <div className="form-group">
                <label>About the University:</label>
                <textarea
                  name="description"
                  value={universityDetails.Abouts[0].description}
                  onChange={(e) => handleAboutChange(0, e)}
                  required
                  placeholder="Enter about information"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  name="courseName"
                  value={universityDetails.Abouts[0].courseName}
                  onChange={(e) => handleAboutChange(0, e)}
                  required
                  placeholder="Enter Course"
                />
              </div>

              <div className="form-group">
                <label>Duration (weeks):</label>
                <input
                  type="number"
                  name="duration"
                  value={universityDetails.Abouts[0].duration}
                  onChange={(e) => handleAboutChange(0, e)}
                  required
                  placeholder="Enter duration"
                />
              </div>

              <div className="form-group">
                <label>Fees:</label>
                <input
                  type="number"
                  name="fees"
                  value={universityDetails.Abouts[0].fees}
                  onChange={(e) => handleAboutChange(0, e)}
                  required
                  placeholder="Enter course fees"
                />
              </div>
            </>
          )}

          {selectedTab === "emi" && (
            <>
              <div className="form-group">
                <label>EMI Description:</label>
                <textarea
                  name="description"
                  value={universityDetails.Emis.description}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        description: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter EMI description"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Course Name:</label>
                <input
                  type="text"
                  name="courseName"
                  value={universityDetails.Emis.courseName}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        courseName  : e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter course name"
                />
              </div>

              <div className="form-group">
                <label>Fees:</label>
                <input
                  type="number"
                  name="fees"
                  value={universityDetails.Emis.fees}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        fees: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter course fees"
                />
              </div>

              <div className="form-group">
                <label>Loan Amount:</label>
                <input
                  type="number"
                  name="loanAmount"
                  value={universityDetails.Emis.loanAmount}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        loanAmount: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter loan amount"
                />
              </div>

              <div className="form-group">
                <label>Tenure (months):</label>
                <input
                  type="number"
                  name="tenure"
                  value={universityDetails.Emis.tenure}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        tenure: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter tenure"
                />
              </div>

              <div className="form-group">
                <label>Installment in Month:</label>
                <input
                  type="number"
                  name="installmentInMonth"
                  value={universityDetails.Emis.installmentInMonth}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        installmentInMonth: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter installment amount"
                />
              </div>

              <div className="form-group">
                <label>Total Interest:</label>
                <input
                  type="number"
                  name="totalInterest"
                  value={universityDetails.Emis.totalInterest}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      Emis: {
                        ...prevState.Emis,
                        totalInterest: e.target.value,
                      },
                    }))
                  }
                  required
                  placeholder="Enter total interest"
                />
              </div>
            </>
          )}

          {selectedTab === 'approvals' && (
            <>
              <div className="form-group">
                <label>Documents:</label>
                <input
                  type="file"
                  multiple
                  onChange={handleMultipleFilesChange}
                  required
                />
              </div>
            </>
          )}

          {selectedTab === 'admission' && (
            <>
              <div className="form-group">
                <label>Admission Process Description:</label>
                <textarea
                  name="description"
                  value={universityDetails.admissionProcess[0].description}
                  onChange={(e) =>
                    setUniversityDetails((prevState) => ({
                      ...prevState,
                      admissionProcess: [
                        { ...prevState.admissionProcess[0], description: e.target.value },
                      ],
                    }))
                  }
                  required
                  placeholder="Enter description"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Admission Steps:</label>
                {universityDetails.admissionProcess[0].steps.map((step, index) => (
                  <input
                    key={index}
                    type="text"
                    value={step}
                    onChange={(e) => handleAdmissionStepChange(index, e.target.value)}
                    placeholder={`Enter step ${index + 1}`}
                    required
                  />
                ))}
              </div>

              <button type="button" onClick={addAdmissionStep}>
                Add Step
              </button>
            </>
          )}

          <button type="submit">Submit</button>
        </form>
      )}

      {error && <p className="error-message">{error}</p>}
      {submittedData && <p>Data successfully submitted!</p>}
    </div>
  );
};

export default UniversityForm;
