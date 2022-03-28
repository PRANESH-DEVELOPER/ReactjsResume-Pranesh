import './ProjectContainer.css'
import React from 'react';
import { Element } from 'react-scroll';
import Project from "../Projects/Projects";

const ProjectContainer = () => {
    const projects= [
    
     {   img:"https://github.com/PRANESH-DEVELOPER/E-Commerce-Website/raw/main/Screenshot%202022-03-19%20092253.png",
        title:"Ecommerce",
        desc:"You can order & get your furnitures in doorstep",
        link:"https://github.com/PRANESH-DEVELOPER/E-Commerce-Website"
    },
    {
        img:"https://github.com/PRANESH-DEVELOPER/Online-Greeting-Card/raw/main/Screenshot%202022-03-09%20180920.png",
        title:"Greeting Card",
        desc:"You can make your own greeting cards.",
        link:"https://github.com/PRANESH-DEVELOPER/Online-Greeting-Card"
    },
    {
        img:"https://github.com/PRANESH-DEVELOPER/Gym-Web-Page-Pranesh/raw/main/Screenshot%202021-12-11%20111522.png",
        title:"Gym Webpage",
        desc:"About Gym and their services",
        link:"https://github.com/PRANESH-DEVELOPER/Gym-Web-Page-Pranesh"
    },
    {
        img:"https://github.com/PRANESH-DEVELOPER/Toystore-Webpage-Pranesh/raw/main/Screenshot%202021-12-12%20020437.png",
        title:"Toy Store",
        desc:"You can view and order toys for your kids",
        link:"https://github.com/PRANESH-DEVELOPER/Toystore-Webpage-Pranesh"
    },
    {
        img:"https://github.com/PRANESH-DEVELOPER/Car-Web-Design-Pranesh/raw/main/Screenshot%202021-12-10%20072849.png",
        title:"Car Page",
        desc:"You can visit our car page and can get our services",
        link:"https://github.com/PRANESH-DEVELOPER/Car-Web-Design-Pranesh"
    },
    {
        img:"https://github.com/PRANESH-DEVELOPER/SPICES-STORE--Pranesh/raw/main/Screenshot%202021-12-08%20131242.png",
        title:"Spices store",
        desc:"Order you spices and get in your doorstep",
        link:"https://github.com/PRANESH-DEVELOPER/SPICES-STORE--Pranesh"
    },
];
  
  return (
      <Element className='projectContainer' id='projects'>
          <h1>Projects</h1>
          <p>Here are my some Project for your review</p>
          <div className='projectContainer__projects'>
              {projects.map((project,index)=>{
                      return(
                            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                      );
                  })
              }
          </div>
      </Element>
  ); 
    
  
}

export default ProjectContainer

