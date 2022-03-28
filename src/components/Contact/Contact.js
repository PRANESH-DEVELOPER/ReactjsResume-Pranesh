import React from 'react'
import { Element } from 'react-scroll/modules'
import'./Contact.css'
import {IconButton} from '@material-ui/core'
import {LinkedIn,GitHub} from '@material-ui/icons'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container' >
               <p>Email: <span>praneshdeveloper2022@gmail.com</span></p>
               <p>Mobile: <span>8838416934</span></p>
           
            <div className='contact__icons' >
                <a href='https://www.linkedin.com/in/pranesh-m-developer/'>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href='https://github.com/PRANESH-DEVELOPER'>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </a>
            </div>
            </div>
    </Element>
  )
}

export default Contact