import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Pranesh M</h1>
            <p>Web Develoepr</p>
            <a href='https://docs.google.com/document/d/18XhVuydzCSbunpwZ8VMqIspkvYo-rMsA/edit?usp=sharing&ouid=106298858318217471130&rtpof=true&sd=true'>
                <button>
                    Download CV
                </button>
            </a>
            <Link to='projects' smooth={true} duration={300}>
                <button>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent