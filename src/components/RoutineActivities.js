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
        <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
          Activities
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
        </form>
      </div>
    </>
  );
};

export default RoutineActivities;
