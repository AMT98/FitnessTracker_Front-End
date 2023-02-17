import React from "react";
import { useState, useEffect } from "react";
import { fetchPublicRoutines, createRoutine, editRoutine } from "../api/api";

import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")

const [editName, setEditName] = useState("");
const [editGoal, setEditGoal] = useState("");
const [editIsPublic, setEditIsPublic] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRoutine = await createRoutine({
      isPublic: true,
      name: `${name}`,
      goal: `${goal}`,
    });
    setRoutines([...routines, newRoutine]);
    setName("");
    setGoal("");
  };

  const handleEditSubmit = async (event, routineId) => {
    event.preventDefault();
    const editedRoutine = await editRoutine(editName, editGoal, editIsPublic, routineId);
    
    const editedRoutines = routines.map((routine) => {
      if (routine.id === routineId) {
        return editedRoutine;
      }
      return routine;
    });
    setRoutines(editedRoutines);
    setEditName("");
    setEditGoal("");
    setEditIsPublic(false);
  };

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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Goal:
          <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Routine</button>
      </form>
      <ul className="flex flex-row h-screen w-screen gap-6 flex-wrap">
        {routines.map((routine) => (
          <li
            key={routine.id}
            className="flex flex-col border rounded-2xl p-6 font-bold border-[#E3FFA8] bg-[#45FFBC] w-[20%] h-[35%] shadow-lg  shadow-[#E3FFA8]"
          >
            <GiMuscleUp className="ml-[45%] mb-[15%]" size={30} />
            <h1 className="uppercase mb-[20px]">
              <MdFitnessCenter /> {routine.name}
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
