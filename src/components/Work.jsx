import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "Systems Engineer",
    duration: "JUN 2022-PRESENT",
    details: (
      <p>
        • Revamped UI for a React class components project, elevating user
        satisfaction by <b>25% over six months</b>; resolved critical bugs
        promptly, contributing to a <b>15% decrease </b> in reported incidents
        and ensuring a reliable user experience.<br></br>• Additionally, led a
        codebase refactoring initiative, <b>enhancing maintainability</b> and
        team efficiency. <br></br>• Implemented performance optimizations,
        reducing application <b>oading times by 30%</b> and fostering a more
        responsive user experience. <br></br>
        • Developed and customized Finacle, enhancing its <b>functionalities</b>{" "}
        to meet specific business requirements. Created account validation
        functionalities for both inbound and outbound payments, covering normal
        and return flows. <br></br>• Successfully addressed and resolved over{" "}
        <b>15 defects</b>, demonstrating{" "}
        <b>Problem-solving and debugging skills.</b> <br></br>• Engineered
        <b>multiple APIs</b> for efficient data <b>retrieval</b> from the
        backend, improving overall system integration. <br></br>• Worked on
        creating and documented backend scripts and architecture using NodeJs
        for <b>Finacle Oepy Framework</b>. And Creating flows in{" "}
        <b>flow builder</b> and node red framework. Developed Custom
        <b>UI components </b>for Finacle using FinUX Workbench. <br></br>•{" "}
        <b>
          Javascript, React Js,React-Hooks,Redux, SPA, Bootstrap, Node.js, MongoDB, Node-red, Postman, Documentation, Agile
          Methodology.
        </b>
      </p>
    ),
  },
  
  {
    year: 2021,
    title: "Systems engineer",
    duration: "OCT 2021- MAY 2022",
    details: (
      <p>
        • Write clean, efficient Java code following best practices and design
        patterns, ensuring <b>modularity and maintainability.</b>
        <br></br>• Document codebase, APIs, and user manuals comprehensively for
        easy understanding and future reference. Provide ongoing support,{" "}
        <b>address bug fixes,</b> and
        <b>incorporate enhancements </b>to keep the application up-to-date and
        efficient.<br></br>•
        <b> Java Core, Java SE8, MySQL, Agile Methodology</b>
      </p>
    ),
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold uppercase text-center text-[#001b5e] pb-10">Work Experience</h1>
      
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
