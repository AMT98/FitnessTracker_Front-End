import React, { useEffect } from "react";
import { useState } from "react";
import { editRoutineActivities } from "../api/api";
import Modal from "./Modal";

const EditRoutineActivity = ({ setIsLoading, routineActivity }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleAddRoutine = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await editRoutineActivities(
        count,
        duration,
        routineActivity.routineActivityId,
        token
      );
      if (data.error) {
        setErrorMsg(data.message);
        console.log(data);
      } else {
        setCount("");
        setDuration("");
        setShowModal(false);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      modalTxt={errorMsg}
      modalTitle="Edit Routine Activity"
      submitBtnText="Edit"
      handleSubmit={handleAddRoutine}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form classcount="flex flex-col min-w-[300px] min-h-[200px]" required>
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
      </form>
    </Modal>
  );
};

export default EditRoutineActivity;
