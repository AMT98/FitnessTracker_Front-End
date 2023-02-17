import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] p-4 text-[#E3FFA8]"
    >
      <div className="flex flex-col p-4  max-w-screen-lg mx-auto h-full">
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <p className="text-4xl mb-4  text-[#6ED8B4] font-bold ">
              Any questions?
            </p>
            <h1 className="text-xl mb-4  font-bold ">
              Please fill out all sections
            </h1>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
            />
            <textarea
              required
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md border-[#E3FFA8] text-white focus:outline-none"
            ></textarea>

            <button className="text-[#0A192F] font-bold bg-gradient-to-r border-[#E3FFA8] border from-[#E3FFA8] to-[#bac3e0be] 0 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
