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
      <form onSubmit={handleRegister} className="h-screen bg-black">
        <div className=" w-4/12 ml-[33%] flex flex-col p-6 items-center ">
          <h1 className="text-[#F8B971] text-4xl font-bold mb-6">Sign up</h1>
          <label className="text-4xl font-bold mb-2 text-[#F25D47]">
            Username
            <input
              className=" flex flex-col text-2xl border rounded-xl"
              type="text"
              placeholder="Username*"
              maxLength="10"
              required
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>

          <label
          className="text-4xl font-bold mt-6 text-[#F25D47]">
            Password
            <input
              className="flex flex-col text-2xl border rounded-xl"
              type="password"
              placeholder="Password*"
              maxLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>

          <button className="text-xl font-bold m-11 border rounded-full p-3 bg-white">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
