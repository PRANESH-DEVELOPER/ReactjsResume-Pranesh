import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Pran<span>esh</span></h1>
        </div>
        <div className='header__right'>
            <Link to='about' smooth={true} duration={300}>
                <h3>About me</h3>
            </Link>
            <Link to='skills' smooth={true} duration={300}>
                <h3>Skills</h3>
            </Link>
            <Link to='projects' smooth={true} duration={300}>
                <h3>Projects</h3>
            </Link>
            <Link to='experience' smooth={true} duration={300}>
                <h3>Experience</h3>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
                <h3>Contact</h3>
            </Link>
            <h4 className='header__rightbtn' to='contact' >Get me in</h4>
        </div>
    </div>
  )
}

export default Header;