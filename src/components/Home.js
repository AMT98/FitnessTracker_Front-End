import React from "react";
import heroImg from "../assets/heroPageModel.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-[#000000] flex flex-col md:flex-row gap-11 h-screen w-screen">
        <div className="flex md:ml-[14%] md:w-45% w-6/12 ml-[7%] mt-[4%] flex-col items-center">
          <h1 className="text-4xl md:text-8xl text-[#6ED8B4] font-bold capitalize mb-[5%]">
            GitFit fitness club
          </h1>
          <h2 className="md:text-4xl text-lg text-[#E3FFA8] font-bold capitalize mb-[3%]">
            Ignite Your Inner Fire and Conquer Your Fitness Goals
          </h2>
          <h4 className="text-[#E3FFA8] text-md md:text-lg mb-[3%]">
            Are you ready to unleash your inner badass and dominate your fitness
            journey like a true champion? It's time to ignite your inner fire
            and take control of your health and wellbeing with the help of
            GitFit.
            <br></br>So what are you waiting for? It's time to unleash your
            inner beast and start taking control of your fitness journey like a
            true badass. Sign up today and join the revolution of fitness
            warriors who are transforming their bodies and their lives.
          </h4>
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
        </div>
        <div>
          <img src={heroImg} alt="heroImg" className="hidden md:block" />
        </div>
      </div>
    </>
  );
};

export default Home;
