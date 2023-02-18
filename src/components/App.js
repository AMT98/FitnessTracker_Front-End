import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import "./app.css";
import Company from "./Company";
import Policy from "./Policy";
import Activities from "./Activities";
import Routines from "./Routines";
import Loading from "./Loading";

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        {isLoading ? <Loading /> : null}
        <div className="overflow-x-hidden">
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  setIsLoggedIn={setIsLoggedIn}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route
              path="/activities"
              element={
                <Activities setIsLoading={setIsLoading} isLoading={isLoading} />
              }
            />
            <Route
              path="/routines"
              element={<Routines setIsLoading={setIsLoading} />}
            />
            <Route
              path="/"
              element={
                <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
          </Routes>
        </div>
        {/* <Footer>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/careers" element={<Company />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </div>
        </Footer> */}
      </Router>
    </>
  );
};

export default App;
