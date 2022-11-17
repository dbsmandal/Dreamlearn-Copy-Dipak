import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import AuthService from "../Auth/auth.service";
function Nav(props) {
  const currentUser = props.currentUser;
  const learner = props.learner;
  const educator = props.educator;
  const navigate = useNavigate();
  const handleClick = () => {
    if (!currentUser) {
      navigate('/')
    }
  }
  const logOut = () => {
    AuthService.logout();
    navigate("/")
    window.location.reload();
  }

  return (
    <div className="sticky top-0 z-50  ">
      <div className="container-fluid">
        <nav className="flex items-center py-1 bg-purple-900 text-white justify-between ">
          <div className="flex px-0 -space-x-0.5 container-fluid ">
            <img
              src="./images/dl-logo.png"
              className="h-14 rounded-lg cursor-pointer ml-8  px-4 pr-0"
              alt="Dream Learn Logo"
            ></img>
            <span className="font-extrabold flex items-center justify-start text-3xl cursor-pointer mt-3" onClick={handleClick}>
              Dream Learn
            </span>
          </div>
          {/* <div className=" flex  flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 sm:py-12"> */}
          {/* <div className="relative rounded-2xl bg-black px-6 pt-2 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10"> */}
          <div className="mx-auto max-w-md sm:mx-auto sm:max-w-lg sm:px-10 mt-4 ">
            <form action="" className="relative mx-auto w-max text-white">
              <input type="search"
                className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-white border-2 focus:pl-16 focus:pr-4 " />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
            {/* </div> */}
            {/* </div> */}
          </div>

          <div>
            <ul className=" flex  sm:mt-0 items-center py-2  space-x-10 px-20 text-xl ">
              {/* <Link to="/" className="font-bold cursor-pointer mt-5 hover:rounded-lg hover:shadow-purple-100 shadow-lg">LandingPage</Link> */}
              {/* <Link to="/home" className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">Home</Link> */}
              {learner && <Link to="/learner" className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">Home</Link>}
              {learner && <Link to="/profile" className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">{currentUser.username}</Link>}
              {learner && (<div className="font-bold cursor-pointer mt-5 hover:rounded-lg hover:shadow-purple-100 shadow-lg" onClick={logOut}>Logout</div>)}
              {/* educator home */}
              {educator && <Link to="/educator" className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">Home</Link>}
              {educator && <Link to="/profile" className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">{currentUser.username}</Link>}
              {educator && (<div className="font-bold cursor-pointer mt-5 hover:rounded-lg hover:shadow-purple-100 shadow-lg" onClick={logOut}>Logout</div>)}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
