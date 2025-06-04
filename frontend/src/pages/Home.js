import '../App.css'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Graduation from '../static_files/Graduation.jpg'
import { MdAccountCircle } from "react-icons/md"
import { FaUserGraduate } from "react-icons/fa"
import { TfiWorld } from "react-icons/tfi"
import { BsCalendar2Range } from "react-icons/bs"
import { LuBookText } from "react-icons/lu"
import { DiRequirejs } from "react-icons/di"

// swiper JS library
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

const Home = () => {
    const [mode, setMode] = useState('light');
    const featured_courses = ['medical science', 'engineering', 'law', 'science', 'management science', 'social science', ''];
    return (
        <>
            <NavBar mode={mode} setMode={setMode} />

            <div className={`home_container`} id={mode}>

                <div className='write_ups'>
                    <h1 className={mode === 'dark' ? 'writeH' : 'writeH_dk'}><span>unlock your potential with premium</span> educational content</h1>
                    <br></br>
                    <p className={mode === 'dark' ? 'writeP' : 'writeP_dk'}>Access thousands of high-quality courses, PDFs, Presentations,
                        and virtual coaching from top university lecturers.</p>

                    <div className='home_btn'>
                        <button style={{ 'backgroundColor': '#f1f5f9', 'border': '2px solid #f1f5f9', }}>Browse Courses</button>
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
            <div className='choose_sydenis' id={mode}>
                <h1 className={mode === 'dark' && 'h_light'}>why choose sydenis tutorials</h1>
                <p className={mode === 'dark' && 'p_light'}>We’re committed to providing the best digital learning experience for students and lecturers</p>

                <div className='choose_display'>
                    <div>
                        <FaUserGraduate size={100} color='#2461E5' />
                        <h3>University -Quality Content</h3>
                        <p>Access educational materials directly from university lecturers and professors</p>
                    </div>
                    <div>
                        <TfiWorld size={100} color='#2461E5' />
                        <h3>Diverse Learning Resources</h3>
                        <p>From video courses to PDFs, Presentations, and one-on-pne coaching sessions.</p>
                    </div>
                    <div>
                        <LuBookText size={100} color='#2461E5' />
                        <h3>Course Curriculum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Sit lectus tincidunt mauris nulla lacus.</p>
                    </div>
                    <div>
                        <DiRequirejs size={100} color='#2461E5' />
                        <h3>Direct Lecturer Interaction</h3>
                        <p>Connect with Lecturers through virtual coaching and personalized feedback.</p>
                    </div>
                </div>
                <div className='feature_display'>
                    <h4>Featured Courses</h4>
                    <p>Explore our extensive collection of educational recourses organized by University Faculties</p>

                    <div className='swiper_parent'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {featured_courses.map((course, index) => <SwiperSlide className='swiper_child' key={index}>{course}</SwiperSlide>)}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;