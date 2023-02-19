import React from "react";
import AddRoutine from "./AddRoutine";
import EditRoutine from "./EditRoutine";

const MyRoutines = ({ setIsLoading }) => {
  return (
    <>
      <div className="bg-black  items-center flex p-6 flex-col h-screen w-full">
        <h1 className="text-[#6ED8B4] text-6xl flex items-center justify-center mt-[17%] md:mt-[7%] mb-[1%] ">
          My Routines
        </h1>
        <AddRoutine setIsLoading={setIsLoading} />
        <EditRoutine setIsLoading={setIsLoading} />
      </div>
    </>
  );
};

export default MyRoutines;
