import React, { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses,setCourses]=useState([])
    fetch("Courses.json")
    .then(res=>res.json())
    .then(data=>setCourses(data))
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-3 my-3 container mx-auto gap-4"> 
            {
                courses.map((course)=><Course key={course._id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;