import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRoutine_Activity } from "../api/api";
import Modal from "./Modal";

const DeleteRoutineActivity = ({ setIsLoading, routineActivity }) => {
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
      const data = await deleteRoutine_Activity(
        routineActivity.routineActivityId,
        token,
        token
      );
      if (data.error) {
        setErrorMsg(data.message);
      } else {
        setShowModal(false);
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
      modalTitle="Delete RoutineActivity"
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

export default DeleteRoutineActivity;
