import React, { useEffect, useState } from "react";
import heroImg from "../assets/heroPageModel.png";
import { NavLink } from "react-router-dom";
import About from "./About";

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (props.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [props.isLoggedIn, props.setIsLoggedIn]);
  return (
    <>
      <div className="bg-slate-900 flex flex-col md:flex-row gap-11 h-screen w-screen pt-4">
        <div className="flex md:w-auto mt-[4%] flex-col items-center ">
          <h1 className="text-4xl md:text-9xl text-[#6ED8B4] font-bold capitalize mb-[2%] mt-10 md:mt-3">
            GitFit fitness club
          </h1>
          <h2 className="md:text-4xl text-lg text-[#E3FFA8] font-bold capitalize mb-[2%] ml-6 md:ml-0">
            Ignite Your Inner Fire and Conquer Your Fitness Goals
          </h2>
          <h4 className="text-gray-400 font-bold text-md md:text-lg mb-[3%] w-auto md:w-[50%] mx-6 md:mx-0">
            Are you ready to unleash your inner badass and dominate your fitness
            journey like a true champion? It's time to ignite your inner fire
            and take control of your health and wellbeing with the help of
            GitFit. Sign up today and join the revolution of fitness warriors
            who are transforming their bodies and their lives.
          </h4>
          {!isLoggedIn ? (
            <div className="flex flex-row gap-4 items-center">
              <NavLink to="/login">
                <button className="border p-3 md:p-4 md:px-6 border-[#6ED8B4] hover:border-[#E3FFA8] text-[#E3FFA8] font-bold duration-300 rounded-xl text-xs md:text-lg hover:text-[#6ED8B4]">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="border p-3 md:p-4 border-[#6ED8B4] font-bold hover:border-[#E3FFA8] text-[#E3FFA8] duration-300 rounded-xl text-xs md:text-lg hover:text-[#6ED8B4]">
                  Become a Member
                </button>
              </NavLink>
            </div>
          ) : null}
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
