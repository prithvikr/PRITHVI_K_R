import React from "react";
import ProjectItem from "./ProjectItem";
import MERN from "../assets/MERN.png";
import Amazon from "../assets/amazon.png"
import netflixImg from "../assets/netflix.png";
import portImg from "../assets/port.png";
import todoImg from "../assets/todo.jpg";

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
          preview="https://netflix-pp.vercel.app/"
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
          img={MERN}
          title="MERN E-COMMERCE"
          techstack="NodeJS, ReactJS, MongoDB,Redux, Firebase, SCSS"
          preview=""
          github="https://github.com/prithvikr/MERN-E-Commerce"
        />
        
        <ProjectItem
          img={todoImg}
          title="To Do App"
          techstack="HTML CSS VANILLA JS"
          preview="https://to-do-six-plum.vercel.app/"
          github="https://github.com/prithvikr/TO_DO"
        />
      </div>
    </div>
  );
};

export default Projects;
