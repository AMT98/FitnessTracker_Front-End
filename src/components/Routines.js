import React from "react";
import { useState, useEffect } from "react";
import { fetchPublicRoutines, createRoutine, editRoutine } from "../api/api";

import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Routines = ({ setIsLoading }) => {
  const [routines, setRoutines] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

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
    const editedRoutine = await editRoutine(
      editName,
      editGoal,
      editIsPublic,
      routineId
    );

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
    try {
      const fetchRoutines = async () => {
        const data = await fetchPublicRoutines();
        setRoutines(data);
        setIsLoading(false);
      };
      fetchRoutines();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  }, []);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-gray-900  items-center justify-center flex p-6 flex-col h-auto w-full">
          <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
            Routines
          </h1>
          <form onSubmit={handleSearchSubmit} className="my-[5%] md:my-[1%]">
            <div className="absolute pointer-events-auto ...">
              <svg
                className="absolute text-slate-800 h-5 w-5 mt-[10px] ml-[5px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <label>
              <input
                className="px-8 py-2 rounded-xl flex items-center justify-center"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
            </label>
          </form>
          <div className="flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center mt-6 h-full">
            {routines
              .filter((value) => {
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.goal.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((routine) => (
                <div
                  key={routine.id}
                  className="flex flex-col text-xs border rounded-2xl border-[#6ED8B4] p-6 font-bold bg-[#E3FFA8] md:w-[250px] min-w-[350px] shadow-lg h-auto md:h-[650px] shadow-[#6ED8B4] "
                >
                  <h3 className="capitalize text-[#018956] flex justify-end">
                    {routine.creatorName}
                  </h3>
                  <GiMuscleUp className="ml-[45%] mb-[5%]" size={30} />

                  <h1 className="uppercase mb-[2px]">
                    {<MdFitnessCenter />} {routine.name}
                  </h1>

                  <FaHeartbeat />
                  <h3 className="capitalize text-[#018956]">{routine.goal}</h3>
                  <h1 className="self-center">Activites</h1>
                  {routine.activities &&
                    routine.activities.map((activity) => (
                      <div
                        key={activity.routineActivityId}
                        className="flex-col p-1 border border-gray-900"
                      >
                        <p>Name: {activity.name}</p>
                        <hr></hr>
                        <p>Count: {activity.count} reps</p>
                        <hr></hr>
                        <p>Duration: {activity.duration} minutes</p>
                        <hr></hr>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Routines;
