import React, { useState } from "react";
// import img1 from "../assets/images/project-img1.png";
// import img2 from "../assets/images/project-img2.png";
// import img3 from "../assets/images/project-img3.png";
// import img3 from "../assets/images/";
import micro from "../assets/images/microsoft.png";
import cic1 from "../assets/images/cicso_1.png";
import cic2 from "../assets/images/cisco_2.png";
import leaf from "../assets/images/shruti_leaf.png";
import img3 from "../assets/images/project-img3.png";
import crane from "../assets/images/shruti_crane.png";


import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Microsoft Azure",
      description: "",
      img: micro,
    },
    {
      id: 2,
      title: "CISCO",
      description: "",
      img: cic1,
    },
    {
      id: 3,
      title: "Techno-Culture-Fest",
      description: "",
      img: img3,
    },
    {
      id: 4,
      title: "CISCO",
      description: "",
      img: cic2,
    },
    {
      id: 5,
      title: "DATA SCIENCE",
      description: "",
      img: leaf,
    },
    {
      id: 6,
      title: "CRANE VARSITY",
      description: "",
      img: crane,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Certifications</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        I have done various certifications and participated in many competitions
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Show more
          </button>
          
          
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
           
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
