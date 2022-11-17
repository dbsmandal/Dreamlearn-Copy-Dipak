import React from "react";
import ContactData from './Contact.json';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs'



function Contact() {
  return (
    <>
      <div className="w-8/12 m-auto py-5 pb-5  ">
        <h1 className="text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block">
          Contact Us
        </h1>
      </div>
      <div className="  text-center w-8/12 m-auto mb-4 h-auto mt-4 rounded-xl  overflow-hidden grid shadow-md gap-20  ">
        {
          ContactData.map(({ id, github, linkden, name, portfolio,  role }) => {
            return (
              <div key={id} className='grid  rounded-xl shadow-md overflow-hidden '>
                <div className="grid grid-cols-2 mb-3 mt-3  ">
                  
                  <div className=" self-center  ">
                    <p className="text-2xl font-bold text-purple-900 ">{name}</p>
                    <p className="text-sm font-semibold text-purple-700">({role})</p>

                  </div>
                  <div className="  self-center ">
                    <div className="grid grid-cols-3">
                      <a href={github} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center place-items-center ">
                          <BsGithub className="w-8 h-8 text-purple-900 hover:text-purple-700" />
                          <p className="text-sm text-purple-900 font-semibold">Github </p>
                        </div>
                      </a>
                      <a href={linkden} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center place-items-center  ">
                          <AiFillLinkedin className="w-8 h-8 text-purple-900 hover:text-purple-700" />
                          <p className="text-sm text-purple-900 font-semibold">Linkden </p>
                        </div>
                      </a>
                      <a href={portfolio} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center place-items-center  ">
                          <BsFillPersonCheckFill className="w-8 h-8 text-purple-900 hover:text-purple-700" />
                          <p className="text-sm text-purple-900 font-semibold">Portfolio</p>
                        </div>

                      </a>
                    </div>


                  </div>

                 


                </div>


              </div>
            )
          })
        }

      </div> 
    

    </>
  );
}

export default Contact;