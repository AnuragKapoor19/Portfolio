import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css'
import Menu from '../Menu/Menu';

export default function Layout() {
    const [toggle, settoggle] = useState(true)

    const handleToggle = () => {
        settoggle(!toggle)
    }

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div onClick={handleToggle} className="sidebar-toggle-icons">
                        {toggle ? (<AiOutlineDoubleLeft size={30} />) : (<AiOutlineDoubleRight size={30} />)}
                    </div>
                    <Menu toggle={toggle}/>
                </div>
                <div className="container1">
                    <Home />
                </div>
            </div>
        </>
    )
}
