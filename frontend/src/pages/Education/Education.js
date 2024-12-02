import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import Fade from 'react-reveal/Fade'

export default function Education() {
    return (
        <>
            <div className="education-container" id='education'>
                <Fade right>
                    <div className="education">
                        <h2 className='mt-3 mb-1'>Education Details</h2>
                        <hr />
                    </div>
                </Fade>
                <div className="education-list">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ac9a86', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #ac9a86' }}
                            date="2022 - present"
                            iconStyle={{ background: '#ac9a86', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">BCA</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hindu College, Amritsar</h4>
                            <p>
                                Programming Languages, Database Management, Web Development, Project Management, Team Leading, Software Engineering, Computer Networks and Security
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ac9a86', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #ac9a86' }}
                            date="2021 - 2022"
                            iconStyle={{ background: '#ac9a86', color: '#fff' }}
                            icon={<BiSolidSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">12th (CBSE)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Modern High School, Amritsar</h4>
                            <span><b>Score: 90%</b></span>
                            <p>
                                Advanced Mathematics, Physics, Chemistry, Computer Science/Information Technology, Critical Thinking and Problem-Solving
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ac9a86', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #ac9a86' }}
                            date="2019 - 2020"
                            iconStyle={{ background: '#ac9a86', color: '#fff' }}
                            icon={<FaSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">10th (ICSE)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Model Study High School, Amritsar</h4>
                            <span><b>Score: 85%</b></span>
                            <p>
                                Scientific Principles, Literature and Language Skills, Advanced Mathematics Concepts, History and Social Studies, Critical Thinking and Problem-Solving
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}
