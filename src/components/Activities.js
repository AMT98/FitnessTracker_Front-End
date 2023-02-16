import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api/api";

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
  return (
    <>
      <h1>Activities</h1>
      <div className="flex flex-row h-screen w-screen gap-6 flex-wrap">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col border rounded-xl items-center p-6 font-bold bg-[#E3FFA8] w-[20%] h-[35%]"
          >
            <h1 className="capitalize mb-[20px]">{activity.name}</h1>
            <h3 className="capitalize text-[#018956]">
              {activity.description}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
