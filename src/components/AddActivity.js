import React, { useEffect } from "react";
import { useState } from "react";
import { createActivities } from "../api/api";
import Modal from "./Modal";

const AddActivity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleAddActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await createActivities(name, description, token);
      if (response.error) {
        setErrorMsg(response.message);
        console.log(response);
      } else {
        setName("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      modalTxt={errorMsg}
      modalTitle="Create Activity"
      submitBtnText="Create"
      handleSubmit={handleAddActivity}
    >
      <form className="flex flex-col min-w-[300px] min-h-[200px] " required>
        <label className="text-lg">Name:</label>
        <input
          className="h-[50px] bg-gray-300 text-md rounded-xl p-3"
          placeholder="Enter activity name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>

        <label className="text-lg">Description:</label>
        <textarea
          className="h-[80px] bg-gray-300 text-md rounded-xl p-3"
          placeholder="Add description here"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </form>
    </Modal>
  );
};

export default AddActivity;
