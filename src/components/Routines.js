import React from "react";
import { useState, useEffect } from "react";
import { fetchPublicRoutines, createRoutine } from "../api/api";

import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      const data = await fetchPublicRoutines();
      setRoutines(data);
    };
    fetchRoutines();
  }, []);

  return (
    <div className="bg-black">
      <h1 className="text-[#E3FFA8] text-4xl flex items-center justify-center mb-[2%]">
        Routines
      </h1>
      <ul className="flex flex-row h-screen w-screen gap-6 flex-wrap">
        {routines.map((routine) => (
          <li
            key={routine.id}
            className="flex flex-col border rounded-2xl p-6 font-bold border-[#E3FFA8] bg-[#45FFBC] w-[20%] h-[35%] shadow-lg  shadow-[#E3FFA8]"
          >
            <GiMuscleUp className="ml-[45%] mb-[15%]" size={30}/>
            <h1 className="uppercase mb-[20px]">
              {<MdFitnessCenter />} {routine.name}
            </h1>

            <FaHeartbeat />
            <h3 className="capitalize text-[#5d693f]">{routine.goal}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routines;
