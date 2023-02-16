import React from "react";
import { useState, useEffect } from "react";
import { fetchPublicRoutines, createRoutine } from "../api/api";

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
    <div>
      <h1>Routines</h1>
      <ul className="flex flex-row h-screen w-screen gap-6 flex-wrap">
        {routines.map((routine) => (
          <li
            key={routine.id}
            className="flex flex-col border rounded-xl items-center p-6 font-bold bg-[#45FFBC] w-[20%] h-[35%]"
          >
            <h1 className="capitalize mb-[20px]">{routine.name}</h1>
            <h3 className="capitalize text-[#7D924B]">{routine.goal}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routines;
