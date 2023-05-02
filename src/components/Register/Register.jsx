import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaUserPlus } from 'react-icons/fa';

const Register = () => {
    
    return (
        <div className='flex'>
            <div>
            <form >
            <div className='w-1/3 ms-60 mt-20 mb-10 '>
            <div className='border border-slate-300 rounded shadow-md shadow-pink-400'>
            <h2 className='text-2xl font-bold ps-6 pt-6 pb-0 mb-2'><FaUserPlus/> Register</h2>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="text" name='name' placeholder='Your Name' required/>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="text" name='photo' placeholder='Photo URL' required/>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="email" name='email' placeholder='Username or email' required/>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="password" name='password' placeholder='Password' required/>
            <div className='text-center px-5'>
            <p className='text-red-500 text-center'>Error</p>
            <button type='submit' className='bg-pink-400 text-white font-serif px-28 py-2 rounded mb-2'>Register</button>
            </div>
            <p className='text-center mb-5'>Already have an account? <Link to="/login" className='text-pink-400 underline'>Login</Link></p>
        </div>
        <fieldset className="border-t border-slate-300 mt-4 mb-6">
        <legend className="mx-auto px-4">Or</legend>
        </fieldset>
        <p className='text-center border border-slate-300 rounded-xl p-2 mb-2'> <FaGoogle size ='28' className='absolute ms-5 text-sky-500'></FaGoogle> Continue with Facebook</p>
        <p className='text-center border border-slate-300 rounded-xl p-2'> <FaGithub size ='28' className='absolute ms-5'></FaGithub> Continue with Google</p>
        </div>
        </form>
        </div>
        <div>
        <img className=' w-2/5 absolute right-20 top-52' src="https://img.freepik.com/premium-vector/new-user-online-registration-create-account-via-digital-device-landing-page-template-character-with-laptop-sign-up-web-site-register-internet-community-cartoon-people-vector-illustration_87771-19156.jpg?w=2000" alt="" />
        </div>
        </div>
        
    );
};

export default Register;