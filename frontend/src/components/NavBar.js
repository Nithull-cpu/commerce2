import '../App.css'
import React, { useState, useMemo } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Logo from '../static_files/Logo.png'
import USA from '../static_files/USA.png'
import { MdBedtime } from 'react-icons/md'
import { FaSun } from 'react-icons/fa'

const NavBar = ({ mode, setMode }) => {
    const links = ['courses', 'virtual coaching', 'about', 'contact']

    const toggleMode = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
        console.log('clicked');
    };
    
    return (
        <div className='nav_container'>

            <div min_nav>
                <img src={USA} alt='usa'/>
            </div>

            <Link to="/"><img className='home_logo' src={Logo} alt='logo' /></Link>

            <ul>
                {links.map((link, index) =>
                    <li key={index}><Link style={{"textTransform" : "uppercase"}} className={mode === 'light' ? 'switches_li' : 'switches_dk'} to={link}> {link} </Link></li>
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
    )
}

export default NavBar;