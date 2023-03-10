import React, { useEffect } from "react";
import { useState } from "react";
import { editRoutine } from "../api/api";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const EditRoutine = ({ setIsLoading, routineID, setRoutines, routines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [token, setToken] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleAddRoutine = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await editRoutine(name, goal, isPublic, routineID.id, token);
      if (data.error) {
        setErrorMsg(data.message);
      } else {
        setName("");
        setGoal("");
        setIsPublic(false);
        setShowModal(false);
        setRoutines(routines);
        navigate("/routines");
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
      modalTitle="Edit Routine"
      submitBtnText="Edit"
      handleSubmit={handleAddRoutine}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form className="flex flex-col min-w-[300px] min-h-[200px]" required>
        <label className="text-lg">Name:</label>
        <input
          className="h-[50px] bg-gray-300 text-md rounded-xl p-3"
          placeholder="Enter routine name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>

        <label className="text-lg">Goal:</label>
        <textarea
          className="h-[80px] bg-gray-300 text-md rounded-xl p-3"
          placeholder="Add goal here"
          type="text"
          name="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        ></textarea>
        <label htmlFor="public" className="text-lg">
          Set routine as public?
          <input
            className="ml-2 w-[20px]"
            type="checkbox"
            id="public"
            name="public"
            value={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </label>
      </form>
    </Modal>
  );
};

export default EditRoutine;
