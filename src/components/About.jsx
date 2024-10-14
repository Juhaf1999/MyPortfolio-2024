import React from "react";
import aboutImg from "../assets/about.png";
const About = () => {
    
    const config = {
        line1:" Hi, My name is Juhaf. I am a graduated Bsc in Management and Information Technology (MIT) in South Eastern University of SriLanka.",
        line2:" And I am following HND in Software Engineering at Esoft Metro Campus.",
        line3:" I am a Frontend Web Developer. I built Beautiful Frontend websites with React.js and Tailwind CSS.",
        line4:"  I am froficient in Frontend skills like, React, Tailwind CSS and Bootstrap. ",
        line5:"In Backend I know Node.js, Express.js, MongoDB and Mongoose"
    }
  return (
    <section id="about" className="flex flex-col px-4 md:flex-row bg-[#000000f3]">
      <div className="md:w-1/2 py-5 px-5">
        <img src={aboutImg}  />
      </div>

      <div className="md:w-1/2 flex justify-center text-white ">
        <div className="flex flex-col justify-center px-5">
          <h1 className="text-4xl font-bold  border-b-2 border-[white] w-[175px] mb-5 ">
            About Me
          </h1>
          <p className="pb-4">
           {config.line1}
          </p>
          <p className="pb-4">
           {config.line2}
          </p>
          <p className="pb-4">
          {config.line3}
          </p>
          <p className="pb-4">
          {config.line4}
          </p>
          <p className="pb-6">{config.line5}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
