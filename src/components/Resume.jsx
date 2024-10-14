import React from "react";
import myprofile from "../assets/myprofile.jpg";

const Resume = () => {
  const config = {
    link: "https://drive.google.com/file/d/1M3ZF6INaBF3ZaLH8GGPSaLKg7VZ8E1dI/view?usp=sharing",
  };
  return (
    <section
      id="resume"
      className="flex flex-col px-4 md:flex-row bg-[#000000f3]"
    >
      <div className="flex justify-end md:w-1/2 py-5 px-5">
        <img
          src={myprofile}
          className="rounded-full w-[300px] h-[320px] object-left-top "
        />
      </div>

      <div className="md:w-1/2 flex justify-center text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold  border-b-2 border-[white] w-[145px] mb-5 ">
            Resume
          </h1>
          <p className="py-4 pb-8 ">
            You can view my resume{" "}
            <a
              target="_blank"
              href={config.link}
              className="ml-4 font-bold px-5 py-2 hover:border-2 bg-[#162a57] rounded"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
