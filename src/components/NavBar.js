import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [nav, setNav] = useState(false);

  const handleLogOut = () => {
    props.setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (!props.token) {
      const storedToken = localStorage.getItem("token");
      props.setToken(storedToken);
      props.setIsLoggedIn(false);
    }
  }, [props.isLoggedIn, props.token]);
  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "routines",
      path: "/routines",
    },
    {
      id: 3,
      link: "activities",
      path: "/activities",
    },
    {
      id: 4,
      link: "shop gear",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#E3FFA8] bg-[#0F0F0F] z-40 sticky ">
      <div>
        <h2 className="text-xl md:text-4xl font-signature hover:text-[#6ED8B4] ml-2 text-[#E3FFA8] cursor-pointer">
          GitFit
        </h2>
      </div>
      <ul className="hidden md:flex gap-10 ">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize text-lg hover:text-[#6ED8B4] hover:scale-95 duration-200 text"
          >
            <NavLink to={path} duration={500}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-2 md:gap-5">
        <NavLink to="/login">
          {!props.isLoggedIn ? (
            <button className="border p-3 md:p-4 md:px-6 border-[#6ED8B4] hover:border-[#E3FFA8] hover:scale-105 duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
              Sign In
            </button>
          ) : (
            <button
              onClick={handleLogOut}
              className="border p-3 md:p-4 md:px-6 border-[#6ED8B4] hover:border-[#E3FFA8] hover:scale-105 duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]"
            >
              Sign Out
            </button>
          )}
        </NavLink>
        {!props.isLoggedIn && (
          <NavLink to="/register">
            <button className="border p-3 md:p-4 border-[#6ED8B4] hover:scale-105 hover:border-[#E3FFA8] duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
              Become a Member
            </button>
          </NavLink>
        )}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <>
          <ul className="ml-[33%] flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#3b3a3a] z-10 text-[#E3FFA8] overflow-">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize py-4 text-2xl mr-[33%]"
              >
                <Link onClick={() => setNav(!nav)} to={link} duration={500}>
                  {link}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-2 md:gap-5 mr-[33%]">
              <NavLink to="/login">
                <button className="border py-3 px-11 md:p-4 border-[#6ED8B4] hover:scale-105 hover:border-[#E3FFA8] duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="border p-3 md:p-4 border-[#6ED8B4] hover:scale-105 hover:border-[#E3FFA8] duration-300 rounded-xl text-xs md:text-md hover:text-[#6ED8B4]">
                  Become a Member
                </button>
              </NavLink>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBar;
