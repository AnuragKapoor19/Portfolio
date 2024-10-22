import React from 'react'
import './Techstack.css'
import { Techicons } from '../../utils/Techicons'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Techstack() {
    return (
        <>
            <div className="tech-container" id='tech'>
                <Fade right>
                    <div className="techstack">
                        <h2 className='mt-3 mb-1'>Technologies Stack</h2>
                        <hr />
                        <p>👉 including programming languages, frameworks, databases, front-end and back-end tools and APIs</p>
                    </div>
                </Fade>
                <div className="techlist">
                    {Techicons.map(tech => (
                        <Zoom key={tech._id}>
                            <div className="card tech" key={tech._id}>
                                <i className='icon'>{tech.icon}</i>
                                <h2>{tech.name}</h2>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </>
    )
}
