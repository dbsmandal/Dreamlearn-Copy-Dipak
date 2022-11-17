
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "../Hero Section/Carousel";
import AuthService from "../Auth/auth.service";
import Cards from '../Cards'
import card from '../Cards/cards.json';
function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [showErr, setShowErr] = useState(false);
    const [err, setErr] = useState([]);
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('**Username is required'),
        password: Yup.string().required('**Password is required')
    });
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user && user.role === "ROLE_LEARNER") {
            navigate('/learner')

        } if (user && user.role === "ROLE_EDUCATOR") {
            navigate('/educator')
        }


    }, []);

    const handleEnterPress = async (e) => {
        // console.log("Enter event", e.key)
        if (e.key === "Enter") {
            try {
                await AuthService.signin(username, password).then(
                    () => {
                        setLoading(true);
                        const data = JSON.parse(localStorage.getItem('user'))
                        // console.log(data.role, 'signin res')
                        if (data.role === "ROLE_LEARNER") {
                            // console.log('learner home', data)
                            navigate('/learner')   //learner home
                        }
                        if (data.role === "ROLE_EDUCATOR") {
                            // console.log('educator home')
                            navigate('/educator')
                        }
                        window.location.reload();
                    },
                    (err) => {
                        // console.log(err);

                        if (err.response.data.message === "User Not found.") {
                            setUsernameError(err.response.data.message);
                            setShowErr(true);
                            setLoading(false);
                        }
                        if (err.response.data.message === "Invalid Password!") {
                            setPasswordError(err.response.data.message);
                            setShowErr(true);
                            setLoading(false);
                        }
                    }
                );
            } catch (err) {
                console.log(err);
                setErr(err.config.message);
            }
        }
    }
    const handleBtnClick = async () => {
        try {
            await AuthService.signin(username, password).then(
                () => {
                    setLoading(true);
                    const data = JSON.parse(localStorage.getItem('user'))
                    // console.log(data.role, 'signin res')
                    if (data.role === "ROLE_LEARNER") {
                        // console.log('learner home', data)
                        navigate('/learner')   //learner home
                    }
                    if (data.role === "ROLE_EDUCATOR") {
                        // console.log('educator home')
                        navigate('/educator')
                    }
                    window.location.reload();
                },
                (err) => {
                    // console.log(err);

                    if (err.response.data.message === "User Not found.") {
                        setUsernameError(err.response.data.message);
                        setShowErr(true);
                        setLoading(false);
                    }
                    if (err.response.data.message === "Invalid Password!") {
                        setPasswordError(err.response.data.message);
                        setShowErr(true);
                        setLoading(false);
                    }
                }
            );
        } catch (err) {
            console.log(err);
            setErr(err.config.message);
        }
    }

    const onSubmit = async (data, e) => {
        // console.log(JSON.stringify(data, null, 2))
        e.preventDefault();
        handleEnterPress(e);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    return (
        <>
            <div className=" max-w-[1250px] mx-auto z-10 pb-2 overflow-hidden mt-11 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 m-3 pl-10 pr-5 h-fit shadow-lg shadow-purple-500 ">
                <div className=" col-span-2 mt-4 mb-4 ">
                    <Carousel />
                </div>

                <div className="w-full mt-4 max-w-80% flex justify-start items-center pt-2">
                    <div className="w-full">
                        <form className="bg-white shadow-md rounded px-6 pt-6 pb-1 mb-3" onSubmit={handleSubmit(onSubmit)} onKeyDown={handleEnterPress}>
                            {/* <div className="flex flex-col items-center justify-center lg:justify-start">
                            <p className=" text-md mb-1 text-center text-purple-900 font-semibold">Sign in with</p>
                            <div className="flex">
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <img className="w-4 h-4" src="https://ragsdalemartin.com/wp-content/uploads/2020/07/white-google-logo.png" alt="" />
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">Or</p>
                        </div> */}

                            <div className=" mb-4">
                                <input
                                    placeholder='Username'
                                    name="username"
                                    type="text"
                                    {...register('username')}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'is-invalid' : ''}`}
                                />
                                {showErr ? <div className="text-red-600 font-semibold">{usernameError}</div> : ''}
                            </div>

                            <div className="mb-4">
                                <input
                                    placeholder='Password'
                                    name="password"
                                    type="password"
                                    {...register('password')}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'is-invalid' : ''}`}
                                />
                                {showErr && <div className="text-red-600 font-semibold">{passwordError}</div>}
                            </div>
                            {showErr ? <div className="text-red-600 font-semibold">{err}</div> : ''}
                            {loading ? <div className="text-center pb-1">
                                <div role="status">
                                    <svg className="inline mr-1 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600  fill-purple-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            </div> : ''}

                            <div className='form-group'>
                                <button type='submit' className='btn bg-purple-900 text-white p-1 rounded-md shadow-md hover:bg-purple-500 hover:text-white hover:font-semibold shadow-purple-300 hover:shadow-purple-900 hover:shadow-md' onClick={handleBtnClick}>Sign In</button>
                            </div>
                            <Link className="inline-block align-baseline text-sm text-purple-500 hover:text-purple-900" to="/">
                                Don't have an account?{" "}Sign Up
                            </Link>
                        </form>

                    </div>
                </div>

            </div>
            <Cards cards={card} />
        </>
    );
}

export default SignIn;