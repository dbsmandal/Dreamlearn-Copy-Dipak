import React, { useState, useEffect } from 'react'
import Schedule from './Schedule'
import EducatorService from '../../Auth/educator.service';
import AuthService from '../../Auth/auth.service';
import { useNavigate } from 'react-router-dom';


const CourseTitle = () => {
  // const [showSchedule, setShowSchedule] = useState(false)
  const [courseTitle, setCourseTitle] = useState("")
  const [courseList, setCourseList] = useState([{}]);
  const [option, setOption] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    EducatorService.MyCourse().then(
      (response) => {
        // console.log('eduactor Course List', response.data.message);
        if (response.data.message !== "No courses added yet!") {
          setCourseList(response.data.message);
        }
        setLoading(false);
        setOption(true);
      },
      (err) => {
        // console.log(err);
        setErr(err.response.data.message);
        setShowErr(true);
        if (err.response.data.message === "Unauthorized!") {
          AuthService.logout();
          navigate('/signin');
          window.location.reload();
        }
      });
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setCourseTitle(value)
    // console.log(value)
  };

  useEffect(() => {
    localStorage.setItem('courseTitle', JSON.stringify(courseTitle));
  }, [courseTitle])

  return (

    <div className=" mt-10 text-start">
      <div className='mt-2 w-4/12 pr-3' >
        <label className=" text-purple-900 text-sm font-bold mb-2" >Course Title:</label>
        {option ? (<select onChange={(e) => handleChange(e)}
          className="shadow cursor-pointer appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline">
          <option value={courseTitle} >Please Select</option>
          {(courseList?.map((data) => {
            const { title } = data;
            return (
              <option key={title}  > {title}
                {/* <option value={id} > {title}</option> */}

              </option>
            )
          }))
          }

        </select>) : <option className='default shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline'>{loading} Please Wait!!</option>}
      </div>
      {showErr && <div className="text-red-600 font-semibold">{err}</div>}
      <Schedule courseTitle={courseTitle} />
    </div>
  )
}

export default CourseTitle
