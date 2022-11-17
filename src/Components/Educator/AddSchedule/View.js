import React from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'

export const View = ({ schedules, deleteSchedule }) => {

    return schedules.map((schedule, index) => (

        <tr key={index} className='text-purple-700 text-lg col-span-2'>
            <td className='text-center'>{schedule.sl}</td>
            <td>{schedule.topic}</td>
            <td>{schedule.slotStart}</td>
            <td>{schedule.slotEnd}</td>
            <td >{schedule.date}</td>
            <td
                className=" p-1 text-red-400 text-2xl rounded-lg cursor-pointer" onClick={() => deleteSchedule(schedule.sl)}>
                <Icon icon={trash} />
            </td>
        </tr>

    ))
} 