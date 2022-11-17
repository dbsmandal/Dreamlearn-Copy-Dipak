import React from 'react'
import CourseTitle from './CourseTitle'
// import CourseTitleDD from './CourseTitleDD'

const CourseSchedule = () => {
  return (
    <div className='w-9/12 m-auto px-10 mt-10 mb-5  rounded-md border shadow-sm shadow-purple-500 overflow-auto'>
      {/* <CourseTitleDD/> */}
      <CourseTitle />
      {/* npm i react-icons-kit */}
    </div>
  )
}

export default CourseSchedule
