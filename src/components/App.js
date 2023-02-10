import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
