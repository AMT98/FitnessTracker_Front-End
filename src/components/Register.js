import React, { useState } from "react";
import { fetchRegister } from "../api/api";
import videoBg from "../assets/bgvideo.mp4";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const register = await fetchRegister(username, password);
      if (register.success) {
        console.log(register);
      }
      localStorage.setItem("token", register.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  };
  return (
    <>
      <form onSubmit={handleRegister} className="h-screen w-screen bg-black">
        <div className=" absolute h-screen top-[100px] flex flex-col items-center justify-center ml-[23%] md:ml-[40%] z-10">
          <h1 className="text-[#E3FFA8] capitalize text-6xl font-bold mb-6">
            Sign up
          </h1>
          <label>
            <input
              className=" flex flex-col text-xl border rounded-xl py-4 px-2 bg-black text-white border-[#6ED8B4] "
              type="text"
              placeholder="Username*"
              maxLength="10"
              required
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>

          <label className="mt-3">
            <input
              className="flex flex-col text-xl border rounded-xl py-4 px-2 bg-black text-white border-[#6ED8B4]"
              type="password"
              placeholder="Password*"
              maxLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>

          <button className="text-xl font-bold m-11 border rounded-full p-3 text-[#E3FFA8] hover:text-[#6ED8B4] border-[#6ED8B4] ">
            Register
          </button>
        </div>
        <div className=" absolute top-0 left-0 w-full bg-[#0000003a]"></div>
        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </form>
    </>
  );
};

export default Register;
