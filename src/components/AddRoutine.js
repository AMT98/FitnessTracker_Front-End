import React, { useEffect } from "react";
import { useState } from "react";
import { createRoutine } from "../api/api";
import Modal from "./Modal";

const AddRoutine = ({ setIsLoading }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [token, setToken] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleAddRoutine = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(isPublic);
    try {
      const response = await createRoutine(name, goal, isPublic, token);
      if (response.error) {
        setErrorMsg(response.message);
        console.log(response);
      } else {
        setName("");
        setGoal("");
        setIsPublic(false);
        setShowModal(false);
      }
      console.log(isPublic);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      modalTxt={errorMsg}
      modalTitle="Create Routine"
      submitBtnText="Create"
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
            onChange={() => setIsPublic(true)}
          />
        </label>
      </form>
    </Modal>
  );
};

export default AddRoutine;
