import React from "react";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";

const App = () => {
  return (
    <div className="app">
      {/* navBar */}
      <NavBar />
      <div>
        <Home />
        <Login />
        <Register />
      </div>
      {/* footer */}
    </div>
  );
};

export default App;
