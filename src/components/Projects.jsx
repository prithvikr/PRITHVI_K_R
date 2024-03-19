import React from "react";
import ProjectItem from "./ProjectItem";
import MERN from "../assets/MERN.png";
import Amazon from "../assets/amazon.png";
import netflixImg from "../assets/netflix.png";
import portImg from "../assets/port.png";
import todoImg from "../assets/todo.jpg";
import Binary from "../assets/Binary.png";
import Dashboard from "../assets/Dashboard.png";
import Food from "../assets/Food.png";
import Form from "../assets/Form.png";
import Game from "../assets/Game.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center uppercase text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={Amazon}
          title="AMAZON"
          techstack="HTML CSS "
          preview="https://amazon-pp-chi.vercel.app/"
          github="https://github.com/prithvikr/AmazonPP"
        />
        <ProjectItem
          img={netflixImg}
          title="Netflix App"
          techstack=" HTML CSS VANILLA JS"
          preview="https://lighthearted-muffin-2ac448.netlify.app/"
          github="https://github.com/prithvikr/NetflixPP-Clone"
        />
        <ProjectItem
          img={portImg}
          title="Portfolio Me"
          techstack="ReactJS EmailJS React-Router  Bootstrap SASS "
          preview="prithvi-k-r.vercel.app"
          github="https://github.com/prithvikr/PRITHVI_K_R"
        />
        
        <ProjectItem
          img={Binary}
          title="Binary Message Decoder"
          techstack="HTML CSS VANILLA JS"
          preview="https://main--binarymegdeco.netlify.app/"
          github="https://github.com/prithvikr/BiMeDe"
        />

        <ProjectItem
          img={Dashboard}
          title="Sports Dashboard"
          techstack="HTML CSS VANILLA JS"
          preview="https://main--sportsdahboard.netlify.app/"
          github="https://github.com/prithvikr/Dashboard"
        />

        <ProjectItem
          img={Food}
          title="Food Delivery APP"
          techstack="HTML CSS BOOTSTRAP"
          preview="https://main--fooddeliverapp.netlify.app/"
          github="https://github.com/prithvikr/Food-Delivery-Website"
        />

        <ProjectItem
          img={Form}
          title="Form Validation"
          techstack="HTML CSS VANILLA JS"
          preview="https://main--passwordvalid.netlify.app/"
          github="https://github.com/prithvikr/PASSV-Form"
        />

        <ProjectItem
          img={Game}
          title="GAME 4 DOT"
          techstack="HTML CSS VANILLA JS"
          preview="https://main--game4dot.netlify.app/"
          github="https://github.com/prithvikr/GAME4DOT"
        />
      </div>
    </div>
  );
};

export default Projects;
