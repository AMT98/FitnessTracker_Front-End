import React from 'react'
import {useState, useEffect} from 'react'
import {fetchPublicRoutines} from "../api/api"

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      const data = await fetchPublicRoutines();
      setRoutines(data);
    };
    fetchRoutines();
  }, []);

  return (
    <div>
      <h1>Routines</h1>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            {routine.name} ({routine.goal})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routines