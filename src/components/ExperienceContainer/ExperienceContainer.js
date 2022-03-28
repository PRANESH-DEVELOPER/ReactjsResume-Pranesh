import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll/modules'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="experience" >
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number='10+' title='Webpages' />
            <Experience number='5+' title='Websites' style={{backgroundColor:'orange'}} />
            <Experience number='3+' title='MiniProjects' />
            <Experience number='1' title='Application' />
        </div> 
    </Element>
  )
}

export default ExperienceContainer