import React, { useState } from "react";
import { fetchRegister } from "../api/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const handleRegister = async(e) => {
  e.preventDefault()
  setUsername("");
  setPassword("");
  try {
    const register = await fetchRegister(
      username,
      password,
      );
      if(register.success){
        // localStorage.setItem('token', )
        console.log(register);
      }
    } catch (error) {
      console.error(error);
    }
  
};
  return (
    <form onSubmit={handleRegister}>
      <label>
        <input
          className=""
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          className=""
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button>Sign Up!</button>
    </form>
  );
};

export default Register;
