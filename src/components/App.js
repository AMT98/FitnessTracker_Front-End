import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
