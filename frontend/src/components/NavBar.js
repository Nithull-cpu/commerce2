import '../App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React, { useState, useMemo } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Logo from '../static_files/Logo.png'
import USA from '../static_files/USA.png'
import { MdBedtime } from 'react-icons/md'
import { FaSun } from 'react-icons/fa'
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdAccountCircle } from "react-icons/md"



const NavBar = ({ mode, setMode }) => {
    const mini_nav = [{ img: 'USA', name: 'Lang' },
    { icon: 'Garlic', id: 2 },
    { img: 'Apple', id: 3 },]

    const links = ['courses', 'virtual coaching', 'about', 'contact']

    const toggleMode = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
        console.log('clicked');
    };

    return (
        <>
            <div className='min_nav' id={mode}>
                <div className={mode === 'light' ? 'lang_btn' : 'lang_btn_dark'}><img width={40} src={USA} alt='usa' /><p>lang</p></div>

                <Link className={mode === 'light' ? 'link_btn' : 'link_btn_dark'}><IoMdHeartEmpty size={35} color='#2461e5' /><p>wishlist</p>
                </Link>

                <Link className={mode === 'light' ? 'link_btn' : 'link_btn_dark'}><RiShoppingBag3Line size={35} color='#2461e5' /><p>cart</p>
                </Link>

                <Link style={{"borderRight": "none"}} className='link_btn'><MdAccountCircle size={35} color='#2461e5' /><p>profile</p></Link>

            </div>

            <div className='nav_container' id={mode}>
                <Link to="/"><img className='home_logo' src={Logo} alt='logo' /></Link>

                <ul>
                    {links.map((link, index) =>
                        <li key={index}><Link style={{ "textTransform": "uppercase" }} className={mode === 'light' ? 'switches_li' : 'switches_dk'} to={link}> {link} </Link></li>
                    )}
                </ul>
                <div className='main_btn'>
                    <div className='bed_time'>
                        <button onClick={toggleMode}>{mode === 'light' ? <MdBedtime size={22} color="black" /> : <FaSun size={22} color='white' />}</button>
                    </div>
                    <div className='sec_btn'>
                        <button><Link className='switches_li' to="/login">Log in</Link></button>
                        <button><Link className='switches_dk' to="/signup">Sign up</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;