import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Training",
    },
    {
      id: 4,
      link: "shop gear",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#F8B971] bg-[#1F1F1F] z-20 ">
      <div>
        <h2 className="text-xl md:text-4xl font-signature hover:text-[#F25D47] ml-2 text-[#F8B971] cursor-pointer">
          GitFit
        </h2>
      </div>
      <ul className="hidden md:flex gap-10 ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize text-lg hover:text-[#F25D47] hover:scale-95 duration-200 text"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-2 md:gap-5">
        <NavLink to="/login">
          <button className="border p-2 md:p-3 md:px-6 border-[#F25D47] hover:border-[#F8B971] hover:scale-105 duration-300 rounded-xl text-xs md:text-md hover:text-[#F25D47]">
            Sign In
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="border p-3 md:p-4 border-[#F25D47] hover:scale-105 hover:border-[#F8B971] duration-300 rounded-xl text-xs md:text-md hover:text-[#F25D47]">
            Become a Member
          </button>
        </NavLink>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <>
          <ul className="ml-[33%] flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#3b3a3a] z-10 text-[#F8B971]">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize py-4 text-2xl mr-[33%]"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-2 md:gap-5 mr-[33%]">
              <button className="border p-3 md:p-3 md:px-6 border-[#F25D47] hover:border-[#F8B971] hover:scale-105 duration-300 rounded-xl text-md md:text-md hover:text-[#F25D47]">
                Sign In
              </button>
              <button className="border p-3 md:p-4 border-[#F25D47] hover:scale-105 hover:border-[#F8B971] duration-300 rounded-xl text-md md:text-md hover:text-[#F25D47]">
                Become a Member
              </button>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBar;
