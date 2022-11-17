import React from 'react';
import ContactData from "./Contact.json";

const AboutProfile = () => {
    return (
        <div >

            <div className='grid rounded shadow-md gap-10 ' >
                <h1 className='text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block '>Contributing partners at DreamLearn</h1>

                {
                    ContactData.map((curElem) => {
                        const { profileImage, aboutMe, id, github } = curElem;
                        return (
                            <a href={github} target="_blank">
                                <div className='grid   grid-cols-3 gap-5 w-full m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto' key={id}>
                                    <div className=' m-auto  '>
                                        <figure >
                                            <img className='max-h-72 w-96 rounded-xl '
                                                src={profileImage} alt="Megha Maurya " />
                                        </figure>
                                    </div>
                                    <div className='grid col-span-2 p-2 m-auto   rounded-xl '>
                                        {/* <p>{name}</p> */}
                                        <p className='text-justify sm:text-base  md:text-sm  lg:text-xl xl:text-2xl   2xl:text-3xl'>{aboutMe}</p>
                                    </div>

                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutProfile
