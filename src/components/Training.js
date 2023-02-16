import React from "react";
import Activities from "./Activities";
import Routines from "./Routines";

const Training = () => {
  return (
    <div className="bg-[#080906] flex flex-col p-[4%]">
      <Activities />
      <Routines />
    </div>
  );
};

export default Training;
