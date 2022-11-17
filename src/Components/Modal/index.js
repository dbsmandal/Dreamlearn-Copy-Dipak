import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AuthService from "../Auth/auth.service";
import LearnerService from "../Auth/learner.service";

const Modal = () => {
    const [popup, setPopup] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const { courseID } = params;
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await LearnerService.registerCourse(courseID);
                setPopup(response.data.message);
                setShowPopup(true);
            } catch (err) {
                // console.log(err.response.data.message);
                setPopup(err.response.data.message);
                setShowPopup(true);
                if (err.response.data.message === "Unauthorized!") {
                    AuthService.logout();
                    navigate("/")
                    window.location.reload();
                }
            }
        }
        getData();
    }, [])

    return (<>
        {showPopup ?
            (<div className="bg-black text-purple-900 bg-opacity-70 fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex-col justify-center bg-white p-10 border-2 bg-opacity-100 border-purple-900 rounded-md">
                        <div className="text-4xl font-bold ">{popup}</div>
                        <div>
                            <button className="border-1 bg-purple-900 p-2 mt-12 rounded-md font-semibold  text-white hover:bg-purple-700" ><Link to={'/courses'}>Close</Link></button>
                        </div>
                    </div>
                </div>
            </div>) : ''}
    </>
    )
}
export default Modal;