import React from "react";
import { useState } from "react";
import { createActivities } from "../api/api";
import Modal from "./Modal";

const AddActivity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await createActivities(name, description);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <form className="" onSubmit={handleAddActivity}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>

        <label>Description:</label>
        <textarea
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
