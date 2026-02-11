import React, { useEffect, useState } from "react";

/* 🔥 Animated Counter Component */
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
};

const About = () => {
  return (
    <section className="relative w-full text-white px-6 md:px-20 py-20">

      {/* Background Huge Text */}
      <h1 className="absolute -top-1 left-1/2 -translate-x-1/2 text-[80px] md:text-[150px] font-extrabold text-white/5 select-none">
        ABOUT
      </h1>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            ABOUT <span className="text-[#b57f2f]">ME</span>
          </h2>
        </div>

        {/* Info + Stats Section */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-[#b57f2f] pl-4">
              PERSONAL INFO
            </h3>

            <div className="space-y-4 text-gray-300">
              <p><span className="text-white font-semibold">Name:</span> Manish Sharma</p>
              <p><span className="text-white font-semibold">Location:</span> India</p>
              <p><span className="text-white font-semibold">Experience:</span> Currently intern</p>
              <p><span className="text-white font-semibold">Freelance:</span> Available</p>
              <p><span className="text-white font-semibold">Email:</span> manishsharma.dev56@gmail.com</p>
            </div>

            <button className="mt-8 px-6 py-3 rounded-full border border-[#b57f2f] text-[#b57f2f] hover:bg-[#b57f2f] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(181,127,47,0.3)]">
              DOWNLOAD CV
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">

            {[
              { number: 3, label: "PROJECTS" },
              { number: 0, label: "CLIENTS" },
              { number: 0, label: "YEARS EXPERIENCE" },
              { number: 10, label: "TECH STACKS" },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  border border-white/10 
                  rounded-xl 
                  p-6 
                  backdrop-blur-md 
                  bg-white/5 
                  hover:border-[#b57f2f] 
                  hover:shadow-[0_0_25px_rgba(181,127,47,0.4)] 
                  transition duration-300
                "
              >
                <h4 className="text-4xl md:text-5xl font-extrabold text-[#b57f2f] drop-shadow-[0_0_10px_rgba(181,127,47,0.8)]">
                  <Counter target={item.number} />
                </h4>

                <p className="text-gray-400 mt-2 text-sm tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-20"></div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            EXPERIENCE & <span className="text-[#b57f2f]">EDUCATION</span>
          </h3>

          <div className="space-y-10">

            {[
              {
                year: "2026 - Present",
                title: "Full Stack Developer",
                company: "Startup(Synclyft Ai)",
              },
              {
                year: "2024 - 2026",
                title: "ICFAI",
                company: "University",
              },
              {
                year: "2021 - 2024",
                title: "SS jain subodh autonomous",
                company: "College",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">

                <div className="w-4 h-4 bg-[#b57f2f] rounded-full mt-2 shadow-[0_0_10px_rgba(181,127,47,0.8)]"></div>

                <div>
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h4 className="text-lg font-semibold">
                    {item.title} – <span className="text-gray-400">{item.company}</span>
                  </h4>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
