

import axios from "axios";
import { useEffect, useState } from "react";

const AllSchedule = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=4')
            .then((res) => {
                console.log("schedule", res.data);
                setSchedule(res.data);
            })
    }, [])
    return (
        <>
            <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>All Schedule</h3>
            {schedule.map((item) => {
                return (
                    <div className="flex w-8/12 mt-7 m-auto justify-between border shadow-sm rounded-md shadow-purple-500">
                        <div className="flex flex-col">
                            <div className="font-bold text-left p-2 pb-0 text-2xl text-purple-900">Topics</div>
                            <div className="p-2 pt-1 font-semibold text-lg text-purple-700">{item.category}</div>
                        </div>
                        <div>
                            <div className=" pt-3 font-semibold text-lg text-purple-700">Date</div>
                            <div className=" font-semibold text-lg text-purple-700">Time{item.price}</div>
                        </div>
                        <div className="">
                            <button className="border p-1 m-2 pl-2 pr-2 mt-6 text-lg rounded-lg bg-purple-900 text-white" >Scheduled</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default AllSchedule;