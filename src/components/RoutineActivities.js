import React, { useEffect, useState } from "react";
import { fetchAllActivities } from "../api/api";

const RoutineActivities = ({ routineID }) => {
  const [activities, setActivities] = useState([]);
  const [activityIdToAdd, setActivityIdToAdd] = useState(0);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");



  useEffect(() => {
    const fetchActivities = async () => {
      const allActivities = await fetchAllActivities();
      setActivities(allActivities);
    };
    fetchActivities();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-400 items-center flex p-6 flex-col h-screen w-full">
        <h1 className="text-[#6ED8B4] text-4xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
          Add activity to routine
        </h1>
        <form className="flex flex-col">
          <label className="text2xl text-gray-400">
            Select an activity to add to routine:
          </label>
          <select
            name="activity"
            id="activity"
            value={activityIdToAdd}
            onChange={(e) => {
              setActivityIdToAdd(e.target.value);
            }}
          >
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
          <label className="text2xl text-gray-400 m-2">
          Count (# of reps):
          <input
            type="number"
            min="0"
            max="100"
            value={count}
            className="ml-11 border-gray-500 border-2"
            onChange={(e) => setCount(e.target.value)}
          ></input>
        </label>
        <label className="text2xl text-gray-400 m-2">
          Duration (in minutes):
          <input
            type="number"
            min="0"
            max="120"
            value={duration}
            className="ml-2 border-gray-500 border-2"
            onChange={(e) => setDuration(e.target.value)}
          ></input>
        </label>

        <button
          type="submit"
          className="bg-[#6ED8B4] text-gray-800 w-28 self-center mt-4"
        >
          ADD
        </button>
        </form>
      </div>
    </>
  );
};

export default RoutineActivities;
