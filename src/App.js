import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Catagory from "./Pages/Catagory/Catagory";
import Course from "./Pages/Course/Course";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {/* This is the route of the home page of the website */}
          <Route path="/" element={<Home />} />
          {/* This is the route of the Catagory page of the website. When user clicks on any catagory
           All courses of that catagory in a new page will showup
          */}
          <Route path="/:catagory" element={<Catagory />} />
          {/* This is the course page of the website. When user clicks on a course a course card a new page
           with all details about that course will show up.
          */}
          <Route path="/:course" element={<Course />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
