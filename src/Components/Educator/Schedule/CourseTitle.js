import React, { useState, useEffect } from 'react'
import Schedule from './Schedule'

const CourseTitle = () => {
  const [showSchedule, setShowSchedule] = useState(false)
  const [courseTitle, setCourseTitle] = useState("")

  const handleChange = (event) => {
    const value = event.target.value;
    setCourseTitle(value)
    // console.log(value, "titlevalue")
  };
  const sendTitle = () => {
    setShowSchedule(true);
  }
  useEffect(() => {
    localStorage.setItem('courseTitle', JSON.stringify(courseTitle));
  }, [courseTitle])

  return (

    <div className=" mt-10 text-start">
      <div className='mt-2 w-fit' >
        <label className=" text-purple-900 text-sm font-bold mb-2" >Course Title:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline"
          type="text" placeholder='Enter Your Course Title' value={courseTitle} id="courseTitle"
          onChange={handleChange}
        />
      </div>
      <button className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
        onClick={sendTitle} >Add Schedule</button>
      {showSchedule && <Schedule courseTitle={courseTitle} />}
    </div>
  )
}

export default CourseTitle
