import React from "react";
import pfp from "../assets/pfp.jpg";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl gap-10">

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={pfp}
            alt="Manish"
            className="
              w-56 sm:w-64 md:w-80 lg:w-96
              rounded-xl 
              shadow-2xl 
              border border-white/20
            "
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            I'M{" "}
            <span className="text-[#b57f2f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              MANISH
            </span>.
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl mt-4 text-gray-300">
            FULL STACK DEVELOPER.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium mt-4 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I'm a Tunisian based web designer & front-end developer focused on
            crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around me.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Home;
