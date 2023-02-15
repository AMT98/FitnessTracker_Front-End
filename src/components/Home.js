import React from "react";
import heroImg from "../assets/heroPageModel.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-[#000000] flex flex-col md:flex-row gap-11 h-screen w-screen">
        <div>
          <h1 className="text-6xl text-[#6ED8B4] font-bold capitalize">
            GitFit fitness club
          </h1>
          <h2 className="text-3xl text-[#E3FFA8] font-bold capitalize">
            Sweat, Sleep & Repeat
          </h2>
          <h4 className="text-[#E3FFA8]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolor
            corrupti atque aspernatur reprehenderit quidem. Id?
          </h4>
          <div className="flex flex-row gap-4 ">
            <NavLink to="/login">
              <button className="border p-3 md:p-4 md:px-6 border-[#6ED8B4] hover:border-[#E3FFA8] text-[#E3FFA8] font-bold duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
                Sign In
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="border p-3 md:p-4 border-[#6ED8B4] font-bold hover:border-[#E3FFA8] text-[#E3FFA8] duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
                Become a Member
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
      <div
        name="contact"
        className="w-full h-screen bg-[#222222] p-4 text-[#E3FFA8]"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <p className="text-4xl mb-4  font-bold ">Any questions?</p>
              <h1 className="text-xl mb-4  font-bold ">
                Please fill out all sections
              </h1>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
              />
              <input
                required
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
              />
              <textarea
                required
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
              ></textarea>

              <button className="text-[#0A192F] font-bold bg-gradient-to-r border-[#E3FFA8] border from-[#E3FFA8] to-[#bac3e0be] 0 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
