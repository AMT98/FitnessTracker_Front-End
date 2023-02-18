import React, { useState } from "react";
import { fetchLogin } from "../api/api";
import gym from "../assets/gym.jpg";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("Please enter username & password");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await fetchLogin(username, password);
      if (login.error) {
        console.log(login.message);
        setErrorMsg(login.message);
      } else {
        props.setIsLoggedIn(true);
        setErrorMsg("");
        navigate("/");
      }
      localStorage.setItem("token", login.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleLogin}
        className="h-screen w-screen bg-black flex flex-col items-center justify-center"
      >
        <div className=" absolute h-screen top-0  flex flex-col items-center justify-center ">
          <h1 className="text-[#E3FFA8] text-6xl font-bold mb-6">Log In</h1>
          <div>
            <h1 className="text-red-600 text-sm font-bold  flex justify-center items-center realtive border border-transparent bg-black mb-2 p-2 rounded-xl">
              {errorMsg}
            </h1>
          </div>
          <label>
            <input
              className=" flex flex-col text-xl border rounded-xl py-4 px-2 text-white bg-black border-[#6ED8B4]"
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
              className="flex flex-col text-xl border rounded-xl py-4 px-2 text-white bg-black  border-[#6ED8B4]"
              type="password"
              placeholder="********"
              maxLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>

          <button className="text-xl font-bold m-11 border rounded-full p-3 text-[#6ED8B4] bg-[#0a0a0a] hover:scale-110 border-[#6ED8B4]">
            Submit
          </button>
        </div>
        <div className=" absolute top-0 left-0 w-full bg-[#0000003a]"></div>
        <img src={gym} alt="gymimage" className="w-full h-full object-cover" />
      </form>
    </>
  );
};

export default Login;
