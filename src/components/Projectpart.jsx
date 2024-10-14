import React from "react";
import jsProjectImg from "../assets/JSProject.png";
import mernImg from "../assets/MernStack.png";
import reactProject from "../assets/ReactProject.png";

const Projectpart = () => {
  const config = {
    projects: [
      {
        image: jsProjectImg,
        description:
          "The basic Ecommerce websites built with HTML,CSS, JavaScript using Backend API",
        link: "https://github.com/Juhaf1999/FirstJs-_Project",
      },
      {
        image: mernImg,
        description: "I built the basic Login and Signup page using MERN Stack",
        link: "https://github.com/Juhaf1999/MERNstack_LoginPage",
      },
      {
        image: reactProject,
        description:
          "The basic Ecommerce websites built with React and Tailwind CSS using Backend API",
        link: "https://github.com/Juhaf1999/myReact_FirstProject",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col  px-5 py-20 justify-center secondary text-white"
    >
      <div className="w-full px-10">
        <h1 className="text-4xl font-bold  border-b-2 border-[white] w-[150px] mb-5">
          Projects
        </h1>
        <p className="pb-5">
          These are some of my basic projects. I have built these projects with
          JavaScript, MERN and Tailwind CSS{" "}
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-10 px-10 py-5 ">
          {config.projects.map((data) => {
            return (
        
                <div className="w-full  relative ">
                <img className="h-[200px] w-full rounded" src={data.image} />
                <div className="projects">
                  <p className="text-center px-5 py-6">{data.description}</p>
                  <div className="flex justify-center">
                    <a target="_blank" href={data.link} className="font-bold px-5 py-2 hover:border-2 bg-[#162a57] rounded">View Project</a>
                </div>
                </div>
                
              </div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectpart;
