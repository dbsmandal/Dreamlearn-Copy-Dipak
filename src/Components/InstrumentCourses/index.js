import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AuthService from "../Auth/auth.service";
import LearnerService from "../Auth/learner.service";

export default function InstrumentCourses() {
    const [instruments, setInstruments] = useState([]);
    const [error, setError] = useState([]);
    const [showErr, setShowErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const { instrument } = params;
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await LearnerService.instrumentTitle(instrument);
                setInstruments(response.data.message);
                setShowErr(false);
                setLoading(false);
            } catch (err) {
                // console.log(err.response.data.message);
                setError(err.response.data.message);
                setShowErr(true);
                setLoading(false);
                if (err.response.data.message === "Unauthorized!") {
                    AuthService.logout();
                    navigate("/signin")
                    window.location.reload();
                }
            }
        }
        getData();
    }, [instrument])
    return (
        <div className="z-10" >
            <h3 className='text-center mt-10 text-3xl font-bold text-purple-900 underline underline-offset-2  capitalize'>{instrument}  Courses</h3>
            {loading ? <div className="text-center mt-20 pb-1">
                <div role="status">
                    <svg className="inline mr-1 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600  fill-purple-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
            </div> : <>
                {showErr ? <div className="text-4xl font-semibold mt-20 m-28 text-purple-900">{error}</div> :

                    <div className="w-6/12  mt-20 m-auto">
                        {instruments?.map((data) => {
                            const { courseTitle, imageUrl, educator, instrument, startDate, endDate } = data
                            return (
                                <Link key={imageUrl} to={`/instruments/${instrument}/${courseTitle}`} >
                                    <div className='grid grid-cols-2  border p-4 mt-14  rounded-md shadow-md shadow-purple-400 cursor-pointer capitalize '>
                                        <div className=" m-auto">
                                            <img className="w-full h-56 rounded-md " src={imageUrl} alt={courseTitle} />
                                        </div>
                                        <div className="text-start m-auto">
                                            <h3 className="text-lg font-semibold text-purple-900">Educator</h3>
                                            <p className=" text-lg text-purple-700">{educator}</p>
                                            <h3 className=" pt-3 text-lg font-semibold text-purple-900">Instrument</h3>
                                            <p className="text-purple-700">{instrument}</p>
                                            <h3 className=" pt-3 text-lg font-semibold text-purple-900">Course Start Date</h3>
                                            <p className="text-purple-700">{startDate}</p>
                                            <h3 className=" pt-3 text-lg font-semibold text-purple-900">Course End Date</h3>
                                            <p className="text-purple-700">{endDate}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}

                    </div >
                }
            </>}
        </div >
    )
}
