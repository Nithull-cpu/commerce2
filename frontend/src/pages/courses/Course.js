import '../../App.css'
import LayoutCourse from './LayoutCourse'
import Graduation from '../../static_files/Graduation.jpg'
import NavBar from '../../components/NavBar'
import React, { useState } from 'react'

// img, title, miniTitle, writeUp, rating, price

const courseModel = [
    {
    id: 1,
    img : "Graduation",
    title: "Biochemistry",
    miniTitle : "Basic Knowledge for beginners",
    writeUp: "Dr. Mathew, Senior Prof. Michael Okpara University",
    rating: 4,
    price: "15,999",
},
{
    "img" : "Graduation",
    "title": "Human Anatomy",
    "miniTitle" : "Basic Knowledge for beginners",
    "writeUp": "Dr. Francis, Senior Prof. Michael Okpara University",
    "rating": 4,
    "price": "22,999"
},
{
    "img" : "Graduation",
    "title": "MicroBiology",
    "miniTitle" : "Basic Knowledge for beginners",
    "writeUp": "Dr. Franklin",
    "rating": 4,
    "price": "73,999"
},
{
    "img" : "Graduation",
    "title": "Science",
    "miniTitle" : "Basic Knowledge for beginners",
    "writeUp": "Dr. Matthew",
    "rating": 4,
    "price": "15,999"
}]
const Course = () => {
    const [mode, setMode] = useState('light');
    return (
        <>
            <NavBar mode={mode} setMode={setMode} />
            <div className='main_course_wrapper' id={mode}>
                <div className='course_background'>
                    <h1>Courses</h1>
                </div>
                <div className='each_course_detail'>
                    <LayoutCourse img={courseModel.img} title={courseModel.title} miniTitle={courseModel.miniTitle} writeUp={courseModel.writeUp} rating={courseModel.rating} price={courseModel.price} />
                    <LayoutCourse img={Graduation} title='Biochemistry' miniTitle='Basic Knowledge for beginners' writeUp='Dr. Francis' rating={4.7} price='15,999' />
                    <LayoutCourse img={Graduation} title='Biochemistry' miniTitle='Basic Knowledge for beginners' writeUp='Dr. Francis' rating={4.7} price='15,999' />
                    {/* <LayoutCourse img={Graduation} title='Biochemistry' miniTitle='Basic Knowledge for beginners' writeUp='Dr. Francis' rating={4.7} price='15,999' /> */}
                </div>
            </div>
        </>
    )
}

export default Course;