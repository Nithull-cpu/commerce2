import React from "react"
import '../../App.css'
import { IoStar } from "react-icons/io5"
import { IoStarOutline } from "react-icons/io5"
import { IoStarHalf } from "react-icons/io5"
import { TbCurrencyNaira } from "react-icons/tb"

const LayoutCourse = ({ img, title, miniTitle, writeUp, rating, price }) => {

    const RatingFunction = () => {

        for (let index = 0; index < rating; index++) {
            if (rating == Number.isInteger(rating)) {
                 <IoStar size={20} color="black" />
            }
        }

    }

    console.log(RatingFunction())

    return (
        <div className="layout_course">

            <div className="layout_img">
                <img src={img} />
            </div>

            <div className="write_courses">
                <h3>{title}</h3>
                <p>{miniTitle}</p>
                <p>{writeUp}</p>
                <p>{rating}<RatingFunction/></p>
                <p><TbCurrencyNaira size={20} color="#020817" />{price}</p>

                <div className="write_course_btn">
                    <button className="course_btn">show more</button>
                    <button className="course_btn">view details</button>
                </div>
            </div>
        </div>
    )

}

export default LayoutCourse;