import '../App.css'
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
            
        </>
    )
}

export default NavBar;