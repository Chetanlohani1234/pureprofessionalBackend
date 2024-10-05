// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainDash from './components/MainDash/MainDash';
// import AddCourse from './components/Pages/AddCourse';
// import RightSide from './components/RigtSide/RightSide';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="AppGlass">
//           <Sidebar />
//           <Routes>
//             <Route path="/" element={<MainDash />} /> {/* Main Dashboard route */}
//             <Route path="/add-cms" element={<AddCourse />} /> {/* Route for adding CMS */}
//           </Routes>
//           <RightSide />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MainDash from './components/MainDash/MainDash';
import AddCourse from './components/Pages/AddCourse';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import AllCourse from './components/Pages/AllCourse';
import EditCourse from './components/Pages/EditCourse';
import UniversityForm from './components/Pages/University/universityForm';
import AllUniversity from './components/Pages/University/allUniversity';

function App() {
  const location = useLocation(); // Get current route

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainDash />} /> {/* Main Dashboard route */}
          <Route path="/add-cms" element={<AddCourse />} /> {/* Route for adding CMS */}
          <Route path="/all-cms" element={<AllCourse/>}/>
          <Route path="/edit-cms/:id" element={<EditCourse/>}/>
          <Route path="/add-university" element={<UniversityForm/>}/>
          <Route path="/all-university" element={<AllUniversity/>}/>
        </Routes>
        {/* <RightSide/> */}
        {/* Render RightSide only if the current path is "/" */}
        {location.pathname === '/' && <RightSide />}
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
