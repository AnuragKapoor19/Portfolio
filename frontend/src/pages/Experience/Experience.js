import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import Fade from 'react-reveal/Fade'

export default function Experience() {
    return (
        <>
            <div className="exp-container" id='exp'>
                <Fade right>
                    <div className="exp">
                        <h2 className='mt-3 mb-1'>Work Experience</h2>
                        <hr />
                    </div>
                </Fade>
                <div className="exp-list">
                    <VerticalTimeline lineColor='white'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ac9a86', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #ac9a86' }}
                            date="1st July,2024 - 1st August,2024"
                            iconStyle={{ background: '#ac9a86', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title text-start">Full Stack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle text-start">Bharat Intern</h4>
                            <p className='text-start'>
                                Frontend Development, Backend Development, Database Management, Version Control and Collaboration, Deployment
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}
