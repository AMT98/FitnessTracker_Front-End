import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import "./app.css";
import About from "./About";
import Training from "./Training";
import Company from "./Company";
import Policy from "./Policy";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let storedtoken = localStorage.getItem("token");
    setToken(storedtoken);
  }, []);
  return (
    <>
      <Router>
        <NavBar 
        token = {token}/>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/careers" element={<Company />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </div>
        </Footer>
      </Router>
    </>
  );
};

export default App;
