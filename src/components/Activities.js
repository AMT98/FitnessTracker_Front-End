import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api/api";
import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import AddActivity from "./AddActivity";
const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchActivities = async () => {
      const allActivities = await fetchAllActivities();
      setActivities(allActivities);
    };
    fetchActivities();
  }, [fetchAllActivities()]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  // console.log(activities);
  // let box = document.querySelector(".container");
  // const prevBtn = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft - width;
  // };
  // const nextBtn = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  // };
  // console.log(searchTerm);
  return (
    <div className="bg-gradient-to-b from-gray-900  items-center justify-center flex p-6 flex-col h-auto w-full">
      <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
        Activities
      </h1>
      <form onSubmit={handleSearchSubmit} className="my-[5%] md:my-[1%]">
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
      {localStorage.getItem("token") && <AddActivity />}
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
              value.description.toLowerCase().includes(searchTerm.toLowerCase())
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
  );
};

export default Activities;
