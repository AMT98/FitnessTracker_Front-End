import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import "./app.css";
import Activities from "./Activities";
import Routines from "./Routines"

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, token]);
  return (
    <>
      <Router>
        <NavBar
          token={token}
          setToken={setToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div>
          <Routes>
            <Route path="/login" element={<Login 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="/" element={<Home 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
