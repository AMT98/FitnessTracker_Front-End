import React, { useState } from "react";
import { fetchLogin } from "../api/api";
import gymBG from "../assets/gym.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await fetchLogin(username, password);
      if (login.success) {
        setUsername("");
        setPassword("");
        localStorage.setItem("token", login.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin} className="h-screen w-screen bg-black">
        <div className=" absolute h-screen top-0 flex flex-col items-center justify-center ml-[23%] md:ml-[40%] ">
          <h1 className="text-[#F8B971] text-6xl font-bold mb-6">Log In</h1>
          <label>
            <input
              className=" flex flex-col text-xl border rounded-xl py-4 px-2 bg-black text-white "
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
              className="flex flex-col text-xl border rounded-xl py-4 px-2 bg-black text-white "
              type="password"
              placeholder="Password*"
              maxLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>

          <button className="text-xl font-bold m-11 border rounded-full p-3 bg-white hover:bg-black hover:text-white ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
