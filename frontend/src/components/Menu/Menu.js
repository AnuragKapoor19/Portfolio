import React from 'react'
import './Menu.css'
import { FcAbout, FcBusinessContact, FcHome, FcReading } from "react-icons/fc";
import { GrProjects, GrTechnology, GrWorkshop } from "react-icons/gr";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import img from '../../assets/images/Image1.jpg'

export default function Menu({ toggle }) {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src={img} alt='profile-pic'></img>
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='home' smooth={true} spy={true} offset={-100} duration={100}>
                                        <FcHome className='text-light' size={20} />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='about' smooth={true} spy={true} offset={-100} duration={100}>
                                        <FcAbout className='text-light' size={20} />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='education' smooth={true} spy={true} offset={-100} duration={100}>
                                        <FcReading className='text-light' size={20} />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='tech' smooth={true} spy={true} offset={-100} duration={100}>
                                        <GrTechnology className='text-light' size={20} />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='projects' smooth={true} spy={true} offset={-100} duration={100}>
                                        <GrProjects className='text-light' size={20} />
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='exp' smooth={true} spy={true} offset={-100} duration={100}>
                                        <GrWorkshop className='text-light' size={20} />
                                        Work-Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='contact' smooth={true} spy={true} offset={-100} duration={100}>
                                        <FcBusinessContact className='text-light' size={20} />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <div className="nav-icons">
                    <div className="nav-link">
                        <Link to='home' smooth={true} spy={true} offset={-100} duration={100}>
                            <FcHome className='text-light' size={30} title='Home' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='about' smooth={true} spy={true} offset={-100} duration={100}>
                            <FcAbout className='text-light' size={30} title='About' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='education' smooth={true} spy={true} offset={-100} duration={100}>
                            <FcReading className='text-light' size={30} title='Education' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='tech' smooth={true} spy={true} offset={-100} duration={100}>
                            <GrTechnology className='text-light' size={30} title='Tech Stack' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='projects' smooth={true} spy={true} offset={-100} duration={100}>
                            <GrProjects className='text-light' size={30} title='Projects' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='exp' smooth={true} spy={true} offset={-100} duration={100}>
                            <GrWorkshop className='text-light' size={30} title='Work Experience' />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='contact' smooth={true} spy={true} offset={-100} duration={100}>
                            <FcBusinessContact className='text-light' size={30} title='Contact' />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
