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
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/login" element={<Login 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            />} />
            <Route path="/register" element={<Register />} />
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
