import React, { useState, useEffect } from 'react'
import { View } from './View';
import EducatorService from "../../Auth/educator.service"
import AuthService from '../../Auth/auth.service';
import { useNavigate } from 'react-router-dom';


// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('schedules');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const Schedule = (props) => {
  // console.log(props, "Course__Title AFTER SELECT")
  // main array of objects state || schedules state || schedules array of objects
  const [schedules, setSchedules] = useState(getDatafromLS());
  const [topic, setTopic] = useState('');
  const [slotStart, setSlotStart] = useState('');
  const [slotEnd, setSlotEnd] = useState('');
  const [date, setDate] = useState('');
  const [sl, setSl] = useState('');
  const [successMsg, setSuccessMsg] = useState('')
  const [err, setErr] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const navigate = useNavigate();
  const handleAddMoreSubmit = (e) => {
    e.preventDefault();
    let schedule = {
      courseTitle: props.courseTitle,
      topic,
      slotStart,
      slotEnd,
      date,
      sl,
    }
    setSchedules([...schedules, schedule]);
    setTopic('');
    setSlotStart('');
    setSlotEnd('');
    setDate('');
    setSl('')

  }

  const deleteSchedule = (sl) => {
    const filterSchedules = schedules.filter((element, index) => {
      return element.sl !== sl
    })
    setSchedules(filterSchedules);
  }

  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
  }, [schedules])


  function handleSubmit(e) {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem('schedules'));
    data.push({ courseTitle: props.courseTitle, topic: topic, slotStart, slotEnd, date, sl })

    EducatorService.addSchedule(data)
      .then((response) => {
        setSuccessMsg(response.data.message)
        // console.log("after select title", response.data.message)
        localStorage.removeItem("schedules");
        window.location.reload();

      }).catch((err) => {
        // console.log(err.response.data.message);
        setErr(err.response.data.message);
        setShowErr(true);
        if (err.response.data.message === "Unauthorized!") {
          AuthService.logout();
          navigate('/signin');
          window.location.reload();
        }
      });;


  }
  return (
    <>

      <div className='grid grid-cols-3 gap-5 m-auto'>

        <div className=" mt-2 text-start">
          <form
            autoComplete="off"
            className=" text-purple-900  bg-white rounded  flex flex-col content-center mb-4 "
            onSubmit={handleSubmit}>
            <div className='mt-1'>
              <label className=" text-purple-900 text-sm font-bold mb-2">Topic</label>
              <input type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" required
                onChange={(e) => setTopic(e.target.value)} value={topic} />
            </div >
            <div className='mt-1'>
              <label className=" text-purple-900 text-sm font-bold mb-6">Time Slot</label>
              <div className='flex gap-2 place-items-center'>
                <input type="time" id='appt' className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" required
                  onChange={(e) => setSlotStart(e.target.value)} value={slotStart} />
                <h1>To</h1>
                <input type="time" className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" id='appt' required
                  onChange={(e) => setSlotEnd(e.target.value)} value={slotEnd} />
              </div>
            </div>

            <div className='mt-1'>
              <label className=" text-purple-900 text-sm font-bold mb-2">Date</label>
              <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" required
                onChange={(e) => setDate(e.target.value)} value={date} />
            </div>
            <div className='mt-1'>
              <label className=" text-purple-900 text-sm font-bold mb-2" >Session No</label>
              <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" required
                onChange={(e) => setSl(e.target.value)} value={sl}></input>
            </div>
            <button className="border p-1 mt-4 text-lg rounded-lg bg-purple-900 text-white w-30 m-auto focus:outline-none focus:shadow-outline" onClick={handleAddMoreSubmit} >
              Add More
            </button>
            <button className="border p-1 mt-4 text-lg rounded-lg bg-purple-900 text-white w-30 m-auto focus:outline-none focus:shadow-outline" type='submit'   >Submit </button>
            {successMsg ?
              <div className='text-center mt-6 text-2xl font-semibold text-purple-700 capitalize'>
                {successMsg}
              </div>
              : null}
            {showErr && <div className="text-red-600 font-semibold">{err}</div>}
          </form>
        </div>
        <div className='col-span-2 gap-2 place-items-center'>
          {schedules.length > 0 && <>
            <div className='overflow-x-auto relative shadow-md sm:rounded-lg ml-10'>
              <table className='w-full text-sm text-left text-purple-500 dark:text-purple-400'>
                <thead className='text-xs text-white uppercase bg-purple-50 dark:bg-purple-700 dark:text-white'>
                  <tr>
                    <th scope="col" className="py-2 px-4">SL#</th>
                    <th scope="col" className="py-2 px-4">Topic</th>
                    <th scope="col" className="py-2 px-4">Start Time</th>
                    <th scope="col" className="py-2 px-4">End Time</th>
                    <th scope="col" className="py-2 px-4">Date</th>
                    <th scope="col" className="py-2 px-4"></th>

                  </tr>
                </thead>
                <tbody>
                  <View schedules={schedules} deleteSchedule={deleteSchedule} />
                </tbody>
              </table>
            </div>
            <button className="border p-1 text-lg rounded-lg bg-red-700 ml-72 text-white w-32 mt-7 focus:outline-none focus:shadow-outline "
              onClick={() => setSchedules([])}>Remove All</button>
          </>}
          {schedules.length < 1 && <div className="w-84 ml-14 text-center m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto">No schedules are added yet</div>}
        </div>

      </div>
    </>
  )
}

export default Schedule