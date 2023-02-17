import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

const Modal = (
  {
    modalTxt,
    modalDescription
  }
) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-[#0A192F] text-white active:bg-[#5CEACA] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <MdInfoOutline size={25} className="ml-1" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto- fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative m-auto max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xs text-black font-semibold">{modalTxt}</h3>
                </div>
                <div className="relative p-4 flex-auto">
                  <p className="text-xs  text-black">
                    {modalDescription}
                  </p>
                </div>
                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-[#5CEACA] text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;