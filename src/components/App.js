import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import "./app.css";
import About from "./About";
import Training from "./Training";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
