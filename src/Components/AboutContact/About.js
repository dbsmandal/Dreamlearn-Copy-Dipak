import React from "react";
import AboutProfile from "./AboutProfile";

function About() {
  return (
    <div className=" m-auto py-14 pb-10  select-none">
     
    
     

      <h1 className="text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block">
        About Us
      </h1>
      <AboutProfile/>
      <p className="mt-4 px-20 pt-6 pb-5 text-purple-700 text-lg">
        We serve you a platform. Where, who have the ability to teach musical
        instruments can enroll themselves as an Educator. And those who want to
        learn their dream instrument can enroll themselves as a learner and
        learn different INDIAN and WESTERN musical instruments with experienced
        Educators .{" "}
      </p>
      
      <h2 className="text-3xl  px-20 opacity-4 shadow-md mt-10 text-purple-900 inline-block">
        Why does this problem exist?{" "}
      </h2>
      <p className="mt-4  px-24 pt-4 pb-5 text-purple-700 text-lg">
        The common cause is a shortage of music schools, Lack of time because of
        busy schedules, and music school's fees are not affordable for everyone.
      </p>
      <h2 className="text-3xl  text-purple-900 px-20 opacity-4 shadow-md mt-10 inline-block">
        Problem Statment
      </h2>
      <p className="mt-4 pt-4 pb-5 px-24 text-purple-700 text-lg">
        Many people have dreams of learning a musical instrument but due to lack
        of time, money, and shortage of music schools, they keep their plans in
        their dairy forever.
      </p>
      <h2 className="text-3xl  px-20 opacity-4 text-purple-900 shadow-md mt-10 inline-block">
        Our Idea to build this Web App{" "}
      </h2>
      <p className="mt-4  px-24 pt-4 pb-2 text-purple-700 text-lg">
        A platform that takes all Instruments learning to one place, one on one
        online live classes, detailed theory explanation of instruments with
        notes availability. Live doubt clearing sessions.
      </p>
     
    </div>
  );
}

export default About;
