import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
      link: "routines",
    },
    {
      id: 4,
      link: "contact",
    },
    {
      id: 5,
      link: "Log In",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#F8B971] bg-[#1F1F1F] fixed cursor-pointer z-10">
      <div>
        <h2 className="text-4xl font-signature ml-2 text-[#F8B971]">GitFit</h2>
      </div>
      <ul className="hidden md:flex navItems">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize text-sm hover:text-[#F25D47] hover:scale-95 duration-200 text-[#F8B971]"
            >
            <Link to={link} smooth duration={500}>
              <span className="px-1 text-[#F25D47]">{id}.</span> 
              {link}
            </Link>
          </li>
        ))}
      </ul>
        <button className="border p-4 border-[#F25D47] hover:scale-105 rounded">Become a Member</button>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#1F1F1F] text-[#F8B971]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-4xl"
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
        </ul>
      )}
    </div>
  );
};

export default NavBar;