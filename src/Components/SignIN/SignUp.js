import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Carousel from "../Hero Section/Carousel"
import AuthService from "../Auth/auth.service";


function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [err, setErr] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('**Name is required'),
    username: Yup.string().required('**Username is required'),
    email: Yup.string().required('**Email is required'),
    password: Yup.string().required('**Password is required')
      .min(6, '**more than 6 characters is required'),
    confirmPassword: Yup.string().required('**Please confirm the password')
      .oneOf([Yup.ref('password'), null], '**Confirm password does not match'),
    role: Yup.string().required('**Please select your role')
  });

  const handleEnterPress = async (e) => {
    // console.log("Enter event", e.key)
    if (e.key === "Enter") {
      try {
        setLoading(true);
        await AuthService.signup(name, username, email, password, role).then((response) => {
          // console.log('succuessfully sign up', response);
          setLoading(false);
          navigate('/signin');
          window.location.reload();
        },
          (err) => {
            // console.log(err);
            setShowErr(true);
            setErr(err.response.data.message);
            setLoading(false);
          }
        );
      } catch (err) {
        // console.log(err);
        setShowErr(true);
        setErr(err);
      }
    }
  }

  const handleBtnPress = async () => {
    try {
      setLoading(true);
      await AuthService.signup(name, username, email, password, role).then((response) => {
        // console.log('succuessfully sign up', response);
        setLoading(false);
        navigate('/signin');
        window.location.reload();
      },
        (err) => {
          // console.log(err);
          setShowErr(true);
          setErr(err.response.data.message);
          setLoading(false);
        }
      );
    } catch (err) {
      // console.log(err);
      setShowErr(true);
      setErr(err);
    }
  }
  const onSubmit = async (data, e) => {
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
    <div className=" max-w-[1250px] mx-auto z-10 overflow-hidden mt-11 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 m-3 pl-10 pr-5 h-fit shadow-lg shadow-purple-500 ">
      <div className="col-span-2 mt-10 mb-8 ">
        <Carousel />
      </div>

      <div className="w-full max-w-80% m-auto flex justify-start items-start ">
        <div className="w-full">
          <form className="bg-white shadow-md rounded px-6 pt-6 pb-1 mb-3" onSubmit={handleSubmit(onSubmit)} onKeyDown={handleEnterPress} >
            <div className='mb-4'>
              <input
                placeholder='Name'
                name='name'
                type="text"
                {...register('name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'text-red' : ''}`} />
              <div className='text-red-600 font-semibold'>{errors.name?.message}</div>
            </div>

            <div className='mb-4'>
              <input
                placeholder='Username'
                name='username'
                type="text"
                {...register('username')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'text-red' : ''}`} />
              <div className='text-red-600 font-semibold'>{errors.username?.message}</div>
            </div>

            <div className=" mb-4">
              <input
                placeholder='Email'
                name="email"
                type="text"
                {...register('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="text-red-600 font-semibold">{errors.email?.message}</div>
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
              <div className="text-red-600 font-semibold">{errors.password?.message}</div>
            </div>

            <div className="mb-4">
              <input
                placeholder='Confirm Password'
                name="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'is-invalid' : ''
                  }`}
              />
              <div className="text-red-600 font-semibold">
                {errors.confirmPassword?.message}
              </div>
            </div>
            <div className="mb-4">
              <select
                placeholder='Select Role'
                name="role"
                type="text"
                {...register('role')}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.role ? 'is-invalid' : ''}`}
              ><option >Select Role</option>
                <option value={"learner"} className={"bg-white hover:bg-purple-900"} >Learner</option>
                <option value={"educator"} >Educator</option>
              </select>
              <div className="text-red-600 font-semibold">{errors.role?.message}</div>
            </div>
            {showErr && <div className="text-red-600 font-semibold">{err}</div>}
            {loading ? <div className="text-center mt-20 pb-1">
              <div role="status">
                <svg className="inline mr-1 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600  fill-purple-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div>
            </div> : null}
            <div className='form-group'>
              <button type='submit' className='btn bg-purple-900 text-white p-1 rounded-md shadow-md hover:bg-purple-500 hover:text-white hover:font-semibold shadow-purple-300 hover:shadow-purple-900 hover:shadow-md ' onClick={handleBtnPress}>Sign Up</button>
            </div>
            <Link className="inline-block align-baseline text-sm text-purple-500 hover:text-purple-900" to="/SignIn" >
              Have an account?{" "}Sign In
            </Link>
          </form>

        </div>
      </div>

    </div>

  );
}

export default SignUp;
