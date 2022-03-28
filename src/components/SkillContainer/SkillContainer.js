import React from 'react';
import './SkillContainer.css';
import { Element } from 'react-scroll';
import { LinearProgress } from '@material-ui/core';

const SkillContainer = () => {
  return (
   <Element className="SkillContainer" id='skills'>
       <div className='skillContainer__text'>
           <h4>SKILLSET</h4>
            <div className='skillContainer__skillSet'>
                <h5>REACT</h5>
                <div className='skillContainer__slider  SkillContainer__slider1'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider  SkillContainer__slider2'>
                    <LinearProgress variant='determinate' value={95}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider  SkillContainer__slider3'>
                    <LinearProgress variant='determinate' value={95}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JAVASCRIPT</h5>
                <div className='skillContainer__slider  SkillContainer__slider4'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>BOOTSTRAP</h5>
                <div className='skillContainer__slider  SkillContainer__slider5'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
       </div>
   </Element>
  )
}

export default SkillContainer