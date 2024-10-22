import React, { useEffect, useState } from 'react'
import './Contact.css'
import { FaGithub, FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Fade from 'react-reveal/Fade'
import toast from 'react-hot-toast';
import img from '../../assets/images/contact.jpg';
import HashLoader from 'react-spinners/HashLoader';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [credentials, setcredentials] = useState({ name: '', email: '', number: '', msg: '' })
    const [loading, setloading] = useState(false)

    useEffect(() => emailjs.init("NWSw_RMc0EBivXx91"), []);

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let name = credentials.name
        let email = credentials.email
        let number = credentials.number
        let msg = credentials.msg

        if (name === '' || email === '' || msg === '') {
            if (name === '') {
                toast.error("Please enter your name",
                    {
                        style: {
                            fontSize: '1rem',
                            fontFamily: 'sans-serif',
                            backgroundColor: '#89023E',
                            border: '4px solid white',
                            fontWeight: 'bolder',
                            color: 'white'
                        }
                    })
            }
            else if (email === '') {
                toast.error("Please enter your email", {
                    style: {
                        fontSize: '1rem',
                        fontFamily: 'sans-serif',
                        backgroundColor: '#89023E',
                        border: '4px solid white',
                        fontWeight: 'bolder',
                        color: 'white'
                    }
                })
            }
            else {
                toast.error("Please enter your message", {
                    style: {
                        fontSize: '1rem',
                        fontFamily: 'sans-serif',
                        backgroundColor: '#89023E',
                        border: '4px solid white',
                        fontWeight: 'bolder',
                        color: 'white'
                    }
                })
            }
        }
        else {
            setloading(true)
            // const response = await fetch('https://anurag-kapoor-portfolio.onrender.com/api/sendMsg', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ name, email, number, message })
            // })

            // const data = await response.json()

            // if (data.success) {
            //     setTimeout(() => {
            //         setcredentials({ name: '', email: '', number: '', msg: '' })
            //         setloading(false)
            //         toast.success("Message Sent Successfully", {
            //             style: {
            //                 fontSize: '1rem',
            //                 fontFamily: 'sans-serif',
            //                 backgroundColor: '#89023E',
            //                 border: '4px solid white',
            //                 fontWeight: 'bolder',
            //                 color: 'white'
            //             }
            //         })
            //     }, 3000)
            // }

            // else {
            //     setloading(false)
            //     toast.error("Server Error! Please Try Again Later", {
            //         style: {
            //             fontSize: '1rem',
            //             fontFamily: 'sans-serif',
            //             backgroundColor: '#89023E',
            //             border: '4px solid white',
            //             fontWeight: 'bolder',
            //             color: 'white'
            //         }
            //     })
            // }
            const serviceId = "service_vdim83e";
            const templateId = "template_oqpeqfx";
            const params = {
                name: name,
                email: email,
                number: number,
                msg: msg
            }
            await emailjs.send(serviceId, templateId, params).then(()=>{
                setTimeout(() => {
                    setcredentials({ name: '', email: '', number: '', msg: '' })
                    setloading(false)
                    toast.success("Message Sent Successfully", {
                        style: {
                            fontSize: '1rem',
                            fontFamily: 'sans-serif',
                            backgroundColor: '#89023E',
                            border: '4px solid white',
                            fontWeight: 'bolder',
                            color: 'white'
                        }
                    })
                }, 3000)
            }).catch((error)=>{
                setloading(false)
                toast.error(`Server Error! Please Try Again Later : ${error.message}`, {
                    style: {
                        fontSize: '1rem',
                        fontFamily: 'sans-serif',
                        backgroundColor: '#89023E',
                        border: '4px solid white',
                        fontWeight: 'bolder',
                        color: 'white'
                    }
                })
            })
        }
    }

    return (
        <>
            <div className="contact-container" id='contact'>
                <Fade right>
                    <div className="c-heading">
                        <h2 className='mt-3 mb-1'>Contact Me</h2>
                        <hr />
                    </div>
                </Fade>
                <div className="contact-card">
                    <div className="card1">
                        <img src={img} alt='Contact'></img>
                    </div>
                    <div className="card2">
                        <div className="c-links">
                            <h4>Contact on</h4>
                            <a href="https://www.linkedin.com/in/anuragkapoor19/" id='linkedin'><FaLinkedin size={30} /></a>
                            <a href="https://www.instagram.com/me_anuragkaps/" id='insta'><FaInstagramSquare size={30} /></a>
                            <a href="https://www.github.com/anuragkapoor19/" id='git'><FaGithub size={30} /></a>
                            <a href="https://api.whatsapp.com/send?phone=7986704577" id='whatsapp'><FaWhatsapp size={30} /></a>
                        </div>
                        <div className="lines">
                            <div className="line">------------</div>
                            <div className="or text-center">OR</div>
                            <div className="line">------------</div>
                        </div>
                        <form className="row input-list" onSubmit={handleSubmit}>
                            <input type='text' name='name' value={credentials.name} placeholder='Enter your name' onChange={handleChange}></input>
                            <input type='email' name='email' value={credentials.email} placeholder='Enter your email' onChange={handleChange}></input>
                            <input type='text' name='number' value={credentials.number} placeholder='Enter your contact number (optional)' onChange={handleChange}></input>
                            <textarea type='text' name='msg' value={credentials.msg} placeholder='Type your message here...' onChange={handleChange}></textarea>
                            <button className='btn btn-primary' type='submit'>
                                {loading ? (
                                    <HashLoader
                                        color='white'
                                        loading={loading}
                                        cssOverride={{ margin: '0 auto' }}
                                        size={24}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                ) : (
                                    <>SEND MESSAGE</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact