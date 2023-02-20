import React, { useEffect } from "react";
import { useState } from "react";
import { deleteRoutine } from "../api/api";
import Modal from "./Modal";

const DeleteRoutine = ({ setIsLoading, routineID }) => {
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleDeleteRoutine = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await deleteRoutine(routineID.id, token);
      if (data.error) {
        setErrorMsg(data.message);
        console.log(data);
      } else {
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
      modalTitle="Delete Routine"
      submitBtnText="Delete"
      handleSubmit={handleDeleteRoutine}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div>
        <h1>Are you sure you want to delete the routine?</h1>
      </div>
    </Modal>
  );
};

export default DeleteRoutine;
