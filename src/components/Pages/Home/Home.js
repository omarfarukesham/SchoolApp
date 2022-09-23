import React from 'react'
import Sliders from './Slider/Sliders'
import Contact from './Contact/Contact'
import Courses from './Courses/Courses'

export const Home = () => {
    return (
        <div>
            <Courses/>
            <Sliders />
            <Contact />
        </div>
    )
}
