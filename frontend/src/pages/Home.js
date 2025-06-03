import '../App.css'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Graduation from '../static_files/Graduation.jpg'
import { MdAccountCircle } from "react-icons/md";

const Home = () => {
    const [mode, setMode] = useState('light');
    return (
        <>
            <NavBar mode={mode} setMode={setMode} />
            <div className={`home_container`} id={mode}>

                <div className='write_ups'>
                    <h1 className={mode === 'dark' ? 'writeH' : 'writeH_dk'}>unlock your potential with premium <span>educational content</span></h1>
                    <br></br>
                    <p className={mode === 'dark' ? 'writeP' : 'writeP_dk'}>Access thousands of high-quality courses, PDFs, Presentations,
                        and virtual coaching from top university lecturers.</p>

                    <div className='home_btn'>
                        <button style={{ 'border': '2px solid #2461e5' }}>Browse Course</button>
                        <button>Become a Lecturer</button>
                    </div>
                    <div className='profile_learners'>
                        <div className='profile_display'>
                            <MdAccountCircle className='profile_icon' size={35} color='#e1dddc' />
                            <MdAccountCircle className='profile_icon' size={35} color='#e1dddc' />
                            <MdAccountCircle className='profile_icon' size={35} color='#e1dddc' />
                            <MdAccountCircle className='profile_icon' size={35} color='#e1dddc' />
                        </div>
                        <div className='learners'>
                            <p className={mode === 'light' ? 'learners_p_light' : 'learners_p_dark'}>Join 10,000+ learners <br></br><span>from around the world</span></p>
                        </div>
                    </div>
                </div>

                <div className='img_container'>
                    <img src={Graduation} alt='Graduation' />
                </div>
            </div>
        </>
    )
}
export default Home;