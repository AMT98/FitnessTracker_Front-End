import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api/api";
import { GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const allActivities = await fetchAllActivities();
      setActivities(allActivities);
    };
    fetchActivities();
  }, []);
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
  return (
    <div className="bg-black">
      <h1 className="text-[#6ED8B4] text-4xl flex items-center justify-center mb-[2%] ">
        Activities
      </h1>
      <div className="flex flex-row h-screen w-screen gap-6 flex-wrap ">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col border rounded-2xl border-[#6ED8B4] p-6 font-bold bg-[#E3FFA8] w-[20%] h-[35%] shadow-lg  shadow-[#6ED8B4] "
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
