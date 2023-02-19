import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api/api";
import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import AddActivity from "./AddActivity";
const Activities = ({ setIsLoading, isLoading }) => {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      const fetchActivities = async () => {
        const allActivities = await fetchAllActivities();
        setActivities(allActivities);
        console.log(allActivities);
        setIsLoading(false);
      };
      fetchActivities();
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
      <div className="bg-gradient-to-b from-gray-900  items-center justify-center flex p-6 flex-col h-auto w-full">
        <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
          Activities
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
        {localStorage.getItem("token") && (
          <AddActivity setIsLoading={setIsLoading} />
        )}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center mt-6 h-full">
          {activities
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              } else if (
                value.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col border rounded-2xl border-[#6ED8B4] p-6 font-bold bg-[#E3FFA8] md:w-[350px] min-w-[350px] shadow-lg h-[350px] shadow-[#6ED8B4] "
              >
                <GiMuscleUp className="ml-[45%] mb-[15%]" size={30} />

                <h1 className="uppercase mb-[20px]">
                  {<MdFitnessCenter />} {activity.name}
                </h1>

                <FaHeartbeat />
                <h3 className="capitalize text-[#018956]">
                  {activity.description}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
