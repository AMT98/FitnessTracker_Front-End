import React, { useEffect } from "react";
import { useState } from "react";
import { editActivity } from "../api/api";
import Modal from "./Modal";

const EditActivity = ({
  setIsLoading,
  activities,
  setActivities,
  activityId,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleEditActivity = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    try {
      const response = await editActivity(
        name,
        description,
        activityId.id,
        token
      );
      if (response.error) {
        setErrorMsg(response.message);
      } else {
        setName("");
        setDescription("");
        setShowModal(false);
        setActivities([...activities, response]);
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
      modalTitle="Edit Activity"
      submitBtnText="Edit"
      handleSubmit={handleEditActivity}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form className="flex flex-col min-w-[300px] min-h-[200px]" required>
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

export default EditActivity;
