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
      {activities.map((activity) => (
        <div>
          <h1>{activity.name}</h1>
          <h3>{activity.description}</h3>
        </div>
      ))}
    </>
  );
};

export default Activities;
