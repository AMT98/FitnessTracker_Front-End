import React from "react";

const About = () => {
  return (
    <div className="bg-[#000000] flex md:flex-col flex-row w-screen h-screen justify-center items-center">
      <div className="w-[90%] md:w-[70%] p-4 text-gray-400 flex flex-col gap-8 ">
        <h1 className="text-4xl md:text-8xl text-[#6ED8B4] font-bold ">About GitFit</h1>
        <h1 className="text-sm md:text-lg">
          GitFit is a web app designed to help you stay active and healthy by
          providing a variety of workout routines and activities that fit your
          lifestyle. Whether you're a busy professional looking for a quick
          workout, or a fitness enthusiast seeking to mix up your routine,
          Gitfit has something for everyone.
        </h1>
        <h1 className="text-sm md:text-lg">
          Our platform features an extensive library of workout routines and
          activities that can be tailored to your fitness level and preferences.
          Our routines range from bodyweight exercises and yoga to strength
          training and cardio workouts. Each routine is designed to provide a
          full-body workout and improve your overall health and fitness. In
          addition to our pre-designed routines, we also offer routines with
          activities that allow you to incorporate your favorite hobbies and
          interests into your workout. Whether you enjoy hiking, swimming, or
          dancing, we have a routine that will help you stay active while doing
          something you love.
        </h1>
        <h1 className="text-sm md:text-lg">
          At Gitfit, we believe that staying active and healthy should be an
          enjoyable and rewarding experience. Our platform is user-friendly and
          easy to navigate, and our routines and activities are designed to keep
          you motivated and engaged. With Gitfit, you can stay on track with
          your fitness goals and lead a healthier, happier life. Thank you for
          considering Gitfit as your go-to fitness app, and we look forward to
          helping you achieve your fitness goals.
        </h1>
      </div>
      
    </div>
  );
};

export default About;
