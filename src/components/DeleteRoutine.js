import React, { useEffect } from "react";
import { useState } from "react";
import { deleteRoutine } from "../api/api";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
const DeleteRoutine = ({
  setIsLoading,
  routineID,
  setRoutines,
  routines,
  username,
}) => {
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

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
     
      } else {
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
