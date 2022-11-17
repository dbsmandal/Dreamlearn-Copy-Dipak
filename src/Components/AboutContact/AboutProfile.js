import React from 'react';
import ContactData from "./Contact.json";

const AboutProfile = () => {
    return (
 

            <div className='grid grid-cols-3 rounded  gap-5 mx-5 mt-10' >
               

                {
                    ContactData.map((curElem) => {
                        const { profileImage, aboutMe, id, github } = curElem;
                        return (
                            <a href={github} target="_blank" rel="noreferrer">
                                <div className='grid   h-full  m-auto  text-lg text-purple-900 border-2 rounded-md shadow-md overflow-auto pt-2' key={id}>
                                    <div className=' m-auto  '>
                                        <figure >
                                            <img className='w-32 h-fit rounded-xl '
                                                src={profileImage} alt="Megha Maurya " />
                                        </figure>
                                    </div>
                                    <div className='grid p-2 m-auto   rounded-xl '>
                                        {/* <p>{name}</p> */}
                                        <p className='text-justify text-sm px-2'>{aboutMe}</p>
                                    </div>

                                </div>
                            </a>
                        )
                    })
                }
            </div>
       
    )
}

export default AboutProfile
