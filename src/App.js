import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Catagory from "./Pages/Catagory/Catagory";
import Course from "./Pages/Course/Course";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import url from "./env";

export const UserContext = React.createContext();
export const UserdataContest = React.createContext();
function App() {
  const [userID, setUserID] = useState(
    document.cookie.trim().split("udemy-clone-signin=")[1]
  );
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (userID) {
      fetch(`${url}/getuser/userID=${userID.trim()}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setUserData(res);
        })
        .catch((error) => console.error(error));
    }
  }, [userID]);

  return (
    <div className="App">
      <UserContext.Provider value={{ userID, setUserID }}>
        <UserdataContest.Provider value={{ userData, setUserData }}>
          <Router>
            <Navbar />
            <Routes>
              {/* This is the route of the home page of the website */}
              <Route path="/" element={<Home />} />
              {/* This is the route of the Catagory page of the website. When user clicks on any catagory
           All courses of that catagory in a new page will showup
          */}
              <Route path="/catagory/:catagory" element={<Catagory />} />
              {/* This is the course page of the website. When user clicks on a course a course card a new page
           with all details about that course will show up.
          */}
              <Route path="/courses/:course" element={<Course />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </UserdataContest.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
