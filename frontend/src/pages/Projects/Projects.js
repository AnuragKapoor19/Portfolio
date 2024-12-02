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



export default function Projects() {
    return (
        <>
            <div className="project-container" id='projects'>
                <div className="projects">
                    <Fade right>
                        <h2 className='mt-3 mb-1'>Top Recent Projects</h2>
                        <hr />
                        <p>👉 here are my top recent projects with source code</p>
                    </Fade>
                    <Zoom>
                        <div id="ads">
                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">FullStack</span>
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
                            <div className="project-content col-md-6 col-lg-5 col-xxl-4 col-sm-12">
                                <div className="card rounded project-card">
                                    <div className="card-image">
                                        <span className="card-notify-badge">FullStack</span>
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
                                                VGossip Chat Application
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
                                        <span className="card-notify-badge">FullStack</span>
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
                                                NewTidings News App
                                            </h5>
                                        </div>
                                        <div className="ad-btn" id='ad3-btn'>
                                            <a className='btn btn-primary' rel="noreferrer" target='_blank' href='https://github.com/AnuragKapoor19/NewTidings'>Source Code</a>
                                            <a className='btn btn-danger' id='live' rel="noreferrer" target='_blank' href='https://anuragkapoor19.github.io/NewTidings'>Launch App</a>
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
