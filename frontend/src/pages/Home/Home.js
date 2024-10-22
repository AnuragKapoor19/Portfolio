import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/Resume.jpg'
import { useTheme } from '../../Context/ThemeContext'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import Fade from 'react-reveal/Fade';

export default function Home() {
  const [theme, settheme] = useTheme()
  const handleTheme = () => {
    settheme(theme === "light" ? "dark" : "light")
  }
  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsFillMoonStarsFill size={30} />) : (<FaSun size={30} />)}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm <span>Anurag Kapoor</span>,</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer!", "Mern Stack Developer!"],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7986704577' rel='noreferrer' target='_blank'>Hire Me</a>
              <a href={Resume} className='btn btn-cv' download={Resume}>My Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
