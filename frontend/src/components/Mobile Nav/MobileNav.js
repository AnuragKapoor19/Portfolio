import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import './MobileNav.css'
import { FcAbout, FcBusinessContact, FcHome, FcReading } from "react-icons/fc";
import { GrProjects, GrTechnology, GrWorkshop } from "react-icons/gr";
import { Link } from 'react-scroll';
import { RiCloseLargeFill } from "react-icons/ri";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import img from '../../assets/images/Side.jpg';

export default function MobileNav() {
    const [open, setopen] = useState(false)
    const handleOpen = () => {
        setopen(!open)
    }

    const handleMenuClick = () => {
        setopen(false)
    }
    return (
        <>
            <div className='m-nav'>
                <div className='m-nav-header d-flex align-items-center'>
                    <div className="m-icons">
                        {open ? (<RiCloseLargeFill className='icon' size={30} onClick={handleOpen} />) : (<TiThMenu className='icon' size={30} onClick={handleOpen} />)}
                    </div>
                    <h5 className='nav-title mx-2 mt-1'>Portfolio.</h5>
                </div>
                <div className='m-nav-menu'>
                    {open ? (
                        <div className="nav-items">
                            <Zoom>
                                <div className="navbar-profile-pic">
                                    <img src={img} alt='profile-pic'></img>
                                </div>
                            </Zoom>
                            <Fade>
                                <div className="nav-item">
                                    <div className="nav-link">
                                        <Link to='home' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcHome className='text-light' size={20} />
                                            Home
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='about' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcAbout className='text-light' size={20} />
                                            About
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='education' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcReading className='text-light' size={20} />
                                            Education
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='tech' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <GrTechnology className='text-light' size={20} />
                                            Tech Stack
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='projects' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <GrProjects className='text-light' size={20} />
                                            Projects
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='exp' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <GrWorkshop className='text-light' size={20} />
                                            Work-Experience
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='contact' smooth={true} spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcBusinessContact className='text-light' size={20} />
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}
