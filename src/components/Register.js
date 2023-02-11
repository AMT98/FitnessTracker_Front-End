import React, { useState } from "react";
import { fetchRegister } from "../api/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const register = await fetchRegister(username, password);
      if (register.success) {
        // localStorage.setItem('token', )
        console.log(register);
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleRegister} className="h-full bg-black text-white">
        <h1>Sign up</h1>
        <label>
          <input
            className=""
            type="text"
            placeholder="Username*"
            maxLength="10"
            required
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>

        <label>
          <input
            className=""
            type="password"
            placeholder="Password*"
            maxLength="8"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>

        <button className="inputBtn">Sign up</button>
      </form>
    </>
  );
};

export default Register;
