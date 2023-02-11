//API provided by learn dot, we will change this link with our link.
// const APIURL = "https://fitnesstrac-kr.herokuapp.com/api";
const APIURL = "https://fitnesstracker-1bo4.onrender.com/api";
const token = "notArealToken";
//POST register user
export const fetchRegister = async (username, password) => {
  const res = await fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};

//POST login

export const fetchLogin = async (username, password) => {
  const res = await fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};

//GET users/me

export const fetchUser = async () => {
  const res = await fetch(`${APIURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

// GET routines by user

export const fetchRoutinesByUser = async (username) => {
  const res = await fetch(`${APIURL}/${username}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};

//GET activities

export const fetchAllActivities = async () => {
  const res = await fetch(`${APIURL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};

//POST activities

export const createActivities = async (name, description) => {
  const res = await fetch(`${APIURL}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
    }),
  });
  const json = await res.json();
  return json;
};

//PATCH activities by id

export const editActivity = async (name, description, activityId) => {
  const res = await fetch(`${APIURL}/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token},`,
    },
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
    }),
  });
  const json = await res.json();
  return json;
};

// GET public routines which feature that activity

export const fetchPublicRoutinesWithActivity = async (activityId) => {
  const res = fetch(`${APIURL}/activities/${activityId}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};

//GET all public routines

export const fetchPublicRoutines = async () => {
  const res = await fetch(`${APIURL}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = res.json();
  return json;
};

//POST routine

export const createRoutine = async (name, goal, isPublic) => {
  const res = await fetch(`${APIURL}/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: `${name}`,
      goal: `${goal}`,
      isPublic: `${isPublic}`,
    }),
  });
  const json = await res.json();
  return json;
};

// PATCH routine

export const editRoutine = async (name, goal, isPublic, routineID) => {
  const res = await fetch(`${APIURL}/routines/${routineID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: `${name}`,
      goal: `${goal}`,
      isPublic: `${isPublic}`,
    }),
  });
  const json = await res.json();
  return json;
};

//DELETE routine

export const deleteRoutine = async (activityId) => {
  const res = await fetch(`${APIURL}/routines/${activityId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

//POST attach a single activity to a routine and prevents duplication

export const attachActivityToRoutine = async (activityId, count, duration) => {
  const res = await fetch(`${APIURL}/routines/${activityId}/activities`, {
    method: "POST",
    body: JSON.stringify({
      activityId: `${activityId}`,
      count: `${count}`,
      duration: `${duration}`,
    }),
  });
  const json = res.json();
  return json;
};

//PATCH update the count or duration on the routine activity

export const editRoutineActivities = async (
  count,
  duration,
  routineActivityId
) => {
  const res = await fetch(`${APIURL}/routine_activities/${routineActivityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      count: `${count}`,
      duration: `${duration}`,
    }),
  });
  const json = await res.json();
  return json;
};

//DELETE routine_activity by routineActivityId

export const deleteRoutine_Activity = async (routineActivityId) => {
  const res = await fetch(`${APIURL}/routine_activities/${routineActivityId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = res.json();
  return json;
};
