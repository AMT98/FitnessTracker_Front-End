import React, { useState, useEffect } from "react";
import AddRoutine from "./AddRoutine";
import EditRoutine from "./EditRoutine";
import { fetchRoutinesByUser } from "../api/api";
import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import DeleteRoutine from "./DeleteRoutine";
import RoutineActivities from "./RoutineActivities";

const MyRoutines = ({ setIsLoading, routineID, setRoutineID }) => {
  const [routines, setRoutines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUserName] = useState(localStorage.getItem("username"));
  const fetchRoutines = async () => {
    setIsLoading(true);
    try {
      const data = await fetchRoutinesByUser(username);
      setRoutines(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRoutines();
  }, [username]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {localStorage.getItem("token") && (
        <div>
          <div className="bg-gradient-to-b from-gray-900  items-center justify-center flex p-6 flex-col h-auto w-full">
            <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
              My Routines
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
            <AddRoutine
              setIsLoading={setIsLoading}
              setRoutines={setRoutines}
              routines={routines}
            />

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
                    className="flex flex-col border rounded-2xl border-[#6ED8B4] p-6 font-bold bg-[#E3FFA8] md:w-[350px] min-w-[350px] shadow-lg h-[550px] shadow-[#6ED8B4] "
                  >
                    {setRoutineID(routine?.id)}
                    <h3 className="capitalize text-[#018956] flex justify-end">
                      {routine.creatorName}
                    </h3>
                    <div className="flex self-center no-wrap">
                      <EditRoutine
                        setIsLoading={setIsLoading}
                        routineID={routineID}
                      />
                      <DeleteRoutine
                        setIsLoading={setIsLoading}
                        routineID={routineID}
                      />
                    </div>
                    <div className="flex justify-center">
                      <GiMuscleUp size={30} />
                      <h1>My Routine</h1>
                    </div>
                    <h1 className="uppercase mb-[2px]">
                      {<MdFitnessCenter />} {routine.name}
                    </h1>
                    <FaHeartbeat />
                    <h3 className="capitalize text-[#018956]">
                      {routine.goal}
                    </h3>
                    <h1 className="self-center">Activites</h1>
                    <RoutineActivities routineID={routineID} />
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
      )}
    </>
  );
};

export default MyRoutines;
