import { useState } from "react";
import { Link } from "react-router-dom";

const instrumentTitle = [
    "tabla", "dholak", "flute", "veena", "harmonium", "piano", "guitar", "drums", "trumpet", "violin"
]
const LearnerDropdown = () => {
    const [instrumentList, setInstrumentList] = useState(false);

    const showInstrumentList = () => {
        setInstrumentList(true);
    }
    const hideInstrumentList = () => {
        setInstrumentList(false);
    }

    return (<>

        <div className=' pl-24 mt-7 text-xl pb-1  text-purple-900 shadow-md shadow-purple-300'>
            <ul className="flex ">
                <li className="relative pr-3">
                    <button onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} className="font-medium hover:text-purple-700">Instruments</button>

                    {instrumentList ?
                        <div className="absolute z-10  pr-6 pl-6  shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} >
                            {instrumentTitle?.map((instrument, index) => {
                                return (
                                    <div key={index} >
                                        <div className="hover:font-semibold hover:text-purple-700 p-0.5 text-start capitalize"><Link to={`/instruments/${instrument}`}>{instrument}</Link></div>
                                    </div>
                                )
                            })}
                        </div>
                        : null}
                </li>
                <li >
                    <Link to={'/courses'} className="font-medium pl-3 pr-3 hover:text-purple-700 active_class" >My Courses</Link>
                </li>
                {/* <li >
                        <Link to={'/allschedule'} className="font-medium pl-2 pr-2" >Schedule</Link>
                    </li> */}
            </ul>
        </div>
    </>
    )
}

export default LearnerDropdown;
