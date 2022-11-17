import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({schedules,deleteSchedule}) => {
    
    return schedules.map((schedule,index)=>(
        
        <tr key={index}>
            <td className='text-center'>{schedule.sl}</td>
            <td>{schedule.topic}</td>
            <td>{schedule.slotStart}</td>
            <td>{schedule.slotEnd}</td>
            <td >{schedule.date}</td>
            <td 
            className=" p-1 mt-2 text-lg rounded-lg cursor-pointer" onClick={()=>deleteSchedule(schedule.sl)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
} 