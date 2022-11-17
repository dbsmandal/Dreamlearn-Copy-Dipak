import React from "react";
import { Link } from "react-router-dom"
const EducatorDropdown = () => {

    return (
        <div className='z-10 pl-24 mt-8 text-lg  text-purple-900 shadow-md shadow-purple-300'>
            <ul className="flex ">
                <li >
                    <Link to={'/addcourse'} className="font-medium hover:text-purple-700 pl-2 pr-2"
                    >Add Course</Link>
                </li>
                <li className="relative pr-2 pl-2">
                    <Link to={'/adddemovideo'} className="font-medium hover:text-purple-700"
                    >Add Demo Video</Link>
                </li>
                <li >
                    <Link to={'/addschedule'} className="font-medium hover:text-purple-700 pl-2 pr-2" >Add Schedule</Link>
                </li>
                <li >
                    <Link to={'/mycourses'} className="font-medium hover:text-purple-700 pl-2 pr-2" >My Demo Videos</Link>
                </li>
            </ul>
        </div>
    )
}

export default EducatorDropdown;