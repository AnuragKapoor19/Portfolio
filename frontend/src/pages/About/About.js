import React from 'react'
import './About.css'
import Bounce from 'react-reveal/Bounce'
import img from '../../assets/images/Wine.jpg'

export default function About() {
    return (
        <>
            <div className="about" id='about'>
                <div className="row1">
                    <div className="col-md-12 col-xl-5 col-lg-12 col-xs-12 about-img">
                        <img src={img} alt='profile-pic'></img>
                    </div>
                    <div className="col-md-12 col-xl-6 col-lg-12 col-xs-12 about-content">
                        <Bounce><h1>About Me</h1></Bounce>
                        <p>
                            I am Anurag Kapoor, a passionate full stack web developer with expertise in crafting dynamic and user-centric web applications.
                            With a strong foundation in both front-end and back-end technologies, I specialize in building seamless, scalable, and secure web solutions.
                            My skill set spans across HTML, CSS, JavaScript, React, Node.js, Express and databases like MongoDB and SQL, allowing me to deliver robust and innovative digital experiences.
                            Driven by a love for problem-solving and a commitment to staying on top of the latest industry trends, I aim to create impactful applications that not only meet but exceed client expectations.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
