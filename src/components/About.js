import React from "react";

const About = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-full h-screen bg-[#222222]  p-4 text-[#E3FFA8] flex flex-col gap-8 items-center">
        <h1 className="text-7xl">About GitFit</h1>
        <h1 className="text-sm md:text-lg">
          Gitfit is a web app designed to help you stay active and healthy by
          providing a variety of workout routines and activities that fit your
          lifestyle. Whether you're a busy professional looking for a quick
          workout, or a fitness enthusiast seeking to mix up your routine,
          Gitfit has something for everyone. Our platform features an extensive
          library of workout routines and activities that can be tailored to
          your fitness level and preferences. Our routines range from bodyweight
          exercises and yoga to strength training and cardio workouts. Each
          routine is designed to provide a full-body workout and improve your
          overall health and fitness. In addition to our pre-designed routines,
          we also offer routines with activities that allow you to incorporate
          your favorite hobbies and interests into your workout. Whether you
          enjoy hiking, swimming, or dancing, we have a routine that will help
          you stay active while doing something you love. At Gitfit, we believe
          that staying active and healthy should be an enjoyable and rewarding
          experience. Our platform is user-friendly and easy to navigate, and
          our routines and activities are designed to keep you motivated and
          engaged. With Gitfit, you can stay on track with your fitness goals
          and lead a healthier, happier life. Thank you for considering Gitfit
          as your go-to fitness app, and we look forward to helping you achieve
          your fitness goals.
        </h1>
      </div>
      <div
        name="contact"
        className="w-full h-screen bg-[#222222] p-4 text-[#E3FFA8]"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <p className="text-4xl mb-4  font-bold ">Any questions?</p>
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
    </div>
  );
};

export default About;
