import React from "react";
import myhero from "../assets/hero.png";
import { AiOutlineLinkedin, AiOutlineX,AiOutlineFacebook,AiOutlineGithub } from "react-icons/ai"

const Hero = () => {
    const config = {
        subtitle:"I'm a frontend React developer",
        social:{
            linkedin:"https://www.linkedin.com/in/habeebullah-juhaf/",
            github:"https://github.com/Juhaf1999"
        }
    }

  return (
  
    <section className=" flex flex-col md:flex-row px-5 py-32 secondary justify-center">
      <div className="md:w-1/2 ">
        <h1 className=" text-white text-6xl md:text-7xl font-hero-font">
          Hi, <br /> I'm <span className="text-black">H</span> Juhaf
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-8">
            <a href="#" className="pr-5 iconhover "><AiOutlineX size={40}  /></a>
            <a target="_blank" href={config.social.linkedin} className="pr-5 iconhover"><AiOutlineLinkedin size={40} /></a>
            <a href="#"className="pr-5 iconhover "><AiOutlineFacebook size={40}/></a>
            <a target="_blank" href={config.social.github} className="iconhover"><AiOutlineGithub size={40}/></a>

        </div>
      </div>
      

      <img src={myhero} className="md:w-1/3" />
    </section>
  );
};

export default Hero;
