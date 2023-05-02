import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaUserCheck } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='flex bg-sky-50'>
            <div>
            <form>
            <div className='w-1/2 ms-52 mt-20 mb-10 '>
            <div className='border border-slate-300 rounded shadow-md shadow-sky-500'>
            <h2 className='text-2xl font-serif ps-6 pt-6 pb-0 mb-2'><FaUserCheck/> Login</h2>
            <input className='m-5 border-b w-72 pb-2 border-slate-400 p-2' type="email" name='email' placeholder='Username or email' required/>
            <input className='m-5 border-b w-72 pb-2 border-slate-400 p-2' type="password" name='password' placeholder='Password' required/>
            <br />
            <div className='flex justify-between'>
            <div>
            <input className='ms-5' type="checkbox"/> Remember Me
            </div>
            </div>
            <div className='text-center p-10'>
            <p className='text-center text-red-500'>Error</p>
            <button type='submit' className='bg-sky-400 text-white font-serif px-40 py-2 rounded'>Login</button>
            </div>
            <p className='text-center mb-5'>Don't have an account? <Link to="/register" className='text-sky-400 underline'>Register</Link></p>
        </div>
        <fieldset className="border-t border-slate-300 mt-4 mb-6">
        <legend className="mx-auto px-4">Or</legend>
        </fieldset>
        <div>
        <p className='text-center border border-slate-300 rounded-xl p-2 mb-2'>
        <FaGoogle size ='28' className='absolute ms-5 text-sky-500'></FaGoogle> Continue with Google</p>
        </div>
        <p className='text-center border border-slate-300 rounded-xl p-2'>
        <FaGithub size ='28' className='absolute ms-5'></FaGithub>Continue with GitHub</p>
        </div>
        </form>
        </div>
        <div>
        <img className=' w-2/5 absolute right-20 top-36' src="https://media.istockphoto.com/id/1312423107/vector/stealing-data-concept-flat-vector-illustration-online-registration-form-login-to-social.jpg?s=612x612&w=0&k=20&c=7Trftif8xV9FCDO5B4M7JiBpZUFlXo51m5lfI6hYCog=" alt="" />
        </div>
        </div>
    );
};

export default Login;