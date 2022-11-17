import React, { useState, useEffect } from 'react';
import EducatorService from '../../Auth/educator.service';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../Auth/auth.service';

const CourseList = () => {
    const [courseList, setCourseList] = useState([{}]);
    const [blankMsg, setBlankMsg] = useState(false);
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
                } else {
                    setBlankMsg(true);
                }
                setLoading(false);
            },
            (err) => {
                // console.log(err);
                setShowErr(true);
                setErr(err.response.data.message);
                loading(false);
                if (err.response.data.message === "Unauthorized!") {
                    AuthService.logout();
                    navigate("/signin")
                    window.location.reload();
                }
            }
        );
    }, [])
    return (
        <div className="">
            <h3 className='text-center mt-10 text-3xl font-bold text-purple-900 underline underline-offset-2 mb-10'>My Course List </h3>
            {blankMsg ? <div className='text-center mt-6 text-2xl font-semibold text-purple-700 capitalize'>
                You don't have any course
            </div> : <>
                {courseList.length === 0 && loading ? (<div className="text-center">
                    <div role="status">
                        <svg className="inline mr-2 w-8 h-8 mt-10 text-gray-200 animate-spin dark:text-gray-600 fill-purple-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <h1 className='text-2xl text-center mt-3 text-purple-900'>loading...</h1>
                    </div>
                    {showErr && <div className="text-red-600 font-semibold">{err}</div>}
                </div>
                ) :
                    (courseList.map((data, index) => {
                        const { title } = data;
                        return (
                            <div key={index} className="grid grid-cols-11 gap-1  mt-5 m-3 p-2 border shadow-sm rounded-md shadow-purple-500" >
                                <div className="font-semibold  text-left p-2  text-xl text-purple-700 col-span-9  "
                                >Course Title: <span className='text-purple-500 text-left pl-5'>{title}</span>
                                </div>
                                <div className='m-auto ml-20'>
                                    <Link to={`/educatorschedule/${title}`}

                                    >  <button className="border p-1 pl-2 pr-2 text-lg rounded-lg bg-purple-900 text-white hover:bg-purple-700">Schedule </button></Link>
                                </div>
                            </div>

                        )
                    }))}
            </>
            }
        </div>
    )
};

export default CourseList;