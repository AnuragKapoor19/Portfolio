import React from 'react'
import './Projects.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import food1 from '../../assets/Project Images/food1.jpg'
import food2 from '../../assets/Project Images/food2.jpg'
import food3 from '../../assets/Project Images/food3.jpg'
import food4 from '../../assets/Project Images/food4.jpg'
import food5 from '../../assets/Project Images/food5.jpg'
import food6 from '../../assets/Project Images/food6.jpg'
import food7 from '../../assets/Project Images/food7.jpg'

import chat1 from '../../assets/Project Images/chat1.jpeg'
import chat2 from '../../assets/Project Images/chat2.jpeg'
import chat3 from '../../assets/Project Images/chat3.jpeg'
import chat4 from '../../assets/Project Images/chat4.jpeg'
import chat5 from '../../assets/Project Images/chat5.jpeg'
import chat6 from '../../assets/Project Images/chat6.jpeg'
import chat7 from '../../assets/Project Images/chat7.jpeg'
import chat8 from '../../assets/Project Images/chat8.jpeg'

import news1 from '../../assets/Project Images/news1.jpg'
import news2 from '../../assets/Project Images/news2.jpg'
import news3 from '../../assets/Project Images/news3.jpg'

import etail1 from '../../assets/Project Images/etail1.jpg'
import etail2 from '../../assets/Project Images/etail2.jpg'
import etail3 from '../../assets/Project Images/etail3.jpg'
import etail4 from '../../assets/Project Images/etail4.jpg'
import etail5 from '../../assets/Project Images/etail5.jpg'
import etail6 from '../../assets/Project Images/etail6.jpg'
import etail7 from '../../assets/Project Images/etail7.jpg'
import etail8 from '../../assets/Project Images/etail8.jpg'
import etail9 from '../../assets/Project Images/etail9.jpg'
import etail10 from '../../assets/Project Images/etail10.jpg'
import etail11 from '../../assets/Project Images/etail11.jpg'

import quiz1 from '../../assets/Project Images/quiz1.jpg'
import quiz2 from '../../assets/Project Images/quiz2.jpg'
import quiz3 from '../../assets/Project Images/quiz3.jpg'
import quiz4 from '../../assets/Project Images/quiz4.jpg'
import quiz5 from '../../assets/Project Images/quiz5.jpg'
import quiz6 from '../../assets/Project Images/quiz6.jpg'
import quiz7 from '../../assets/Project Images/quiz7.jpg'

import blog1 from '../../assets/Project Images/blog1.jpg'
import blog2 from '../../assets/Project Images/blog2.jpg'
import blog3 from '../../assets/Project Images/blog3.jpg'
import blog4 from '../../assets/Project Images/blog4.jpg'


export default function Projects() {
    return (
        <>
            <div className="project-container" id='projects'>
                <div className="projects">
                    <Fade right>
                        <h2 className='mt-5 mb-1'>Top Recent Projects</h2>
                        <hr />
                        <p>👉 here are my top recent projects with source code</p>
                    </Fade>
                    <Zoom>
                        <div id="ads">

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">E-Commerce Website</span>
                                        <div id="carouselExampleIndicators3" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={etail1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail3} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail4} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail5} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail6} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail7} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail8} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail9} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail10} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={etail11} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev" style={{ width: '20px' }}>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next" style={{ width: '20px' }}>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">React</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                        <span className="card-detail-badge">Express</span>
                                        <span className="card-detail-badge">Node</span>
                                        <span className="card-detail-badge">Stripe</span>
                                        <span className="card-detail-badge">Cloudinary</span>
                                        <span className="card-detail-badge">MongoDB</span>
                                        <span className="card-detail-badge">RestAPI</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                ETail
                                            </h5>
                                        </div>
                                        <div className="ad-btn" id='ad3-btn'>
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/Etail'>Source Code</a>
                                            <a className='btn btn-danger' id='live' rel="noreferrer" target='_blank' href='https://etail-frontend.onrender.com'>Launch App</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Chat App</span>
                                        <div id="carouselExampleIndicators1" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={chat1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat3} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat4} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat5} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat6} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat7} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={chat8} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">React</span>
                                        <span className="card-detail-badge">Chakra UI</span>
                                        <span className="card-detail-badge">Node</span>
                                        <span className="card-detail-badge">Express</span>
                                        <span className="card-detail-badge">MongoDB</span>
                                        <span className="card-detail-badge">Socket.io</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                VGossip
                                            </h5>
                                        </div>
                                        <div className="ad-btn">
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/VGossip'>Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Blogs App</span>
                                        <div id="carouselExampleIndicators5" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={blog1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={blog2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={blog3} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={blog4} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">Next</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                        <span className="card-detail-badge">Express</span>
                                        <span className="card-detail-badge">Node</span>
                                        <span className="card-detail-badge">MongoDB</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                Blogify
                                            </h5>
                                        </div>
                                        <div className="ad-btn" id='ad3-btn'>
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/Blogify'>Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Quiz App</span>
                                        <div id="carouselExampleIndicators4" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={quiz1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz3} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz4} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz5} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz6} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={quiz7} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">React</span>
                                        <span className="card-detail-badge">Vite</span>
                                        <span className="card-detail-badge">Express</span>
                                        <span className="card-detail-badge">Node</span>
                                        <span className="card-detail-badge">MySQL</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                Quiz-Whiz
                                            </h5>
                                        </div>
                                        <div className="ad-btn" id='ad3-btn'>
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/quizwhiz'>Source Code</a>
                                            <a className='btn btn-danger' id='live' rel="noreferrer" target='_blank' href='https://quizwhiz-frontend.onrender.com'>Launch App</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">News App</span>
                                        <div id="carouselExampleIndicators2" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={news1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={news2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={news3} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next" style={{ width: '20px' }}>
                                                {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: '#89023E' }}></span> */}
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">React</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                        <span className="card-detail-badge">JavaScript</span>
                                        <span className="card-detail-badge">RestAPI</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                NewTidings
                                            </h5>
                                        </div>
                                        <div className="ad-btn" id='ad3-btn'>
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/NewTidings'>Source Code</a>
                                            <a className='btn btn-danger' id='live' rel="noreferrer" target='_blank' href='https://anuragkapoor19.github.io/NewTidings'>Launch App</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Food App</span>
                                        <div id="carouselExampleIndicators" className="carousel slide images" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={food1} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food2} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food3} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food4} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food5} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food6} className="d-block w-100" alt="pic" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={food7} className="d-block w-100" alt="pic" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-image-overly">
                                        <span className="card-detail-badge">React</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                        <span className="card-detail-badge">Node</span>
                                        <span className="card-detail-badge">Express</span>
                                        <span className="card-detail-badge">MongoDb</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="ad-title">
                                            <h5 className="p-name text-uppercase">
                                                Foodies
                                            </h5>
                                        </div>
                                        <div className="ad-btn">
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/Foodies'>Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    )
}
