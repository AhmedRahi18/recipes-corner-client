import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [errors,setErrors] = useState('')

    const handleRegister = event => {
        event.preventDefault()
        setErrors('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        
        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            if(password < 7){
                setErrors('Your password is less then 6 characters')
                return
            }
            console.log(createdUser)
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
            setErrors(error.message)
        })
    }
    
    return (
        <div className='flex bg-sky-50'>
            <div>
            <form onSubmit={handleRegister}>
            <div className='w-1/3 ms-60 mt-20 mb-10 '>
            <div className='border border-slate-300 rounded shadow-md shadow-sky-500'>
            <h2 className='text-2xl font-bold ps-6 pt-6 pb-0 mb-2'><FaUserPlus/> Register</h2>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="text" name='name' placeholder='Your Name' />
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="text" name='photo' placeholder='Photo URL' />
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="email" name='email' placeholder='Username or email' required/>
            <input className='m-5 border-b w-96 pb-2 border-slate-400 p-2' type="password" name='password' placeholder='Password' required/>
            <div className='text-center px-5'>
            <p className='text-red-500 text-center'>{errors}</p>
            <button type='submit' className='bg-sky-400 text-white font-serif px-28 py-2 rounded mb-2'>Register</button>
            </div>
            <p className='text-center mb-5'>Already have an account? <Link to="/login" className='text-sky-400 underline'>Login</Link></p>
        </div>
        <fieldset className="border-t border-slate-300 mt-4 mb-6">
        <legend className="mx-auto px-4">Or</legend>
        </fieldset>
        <p className='text-center border border-slate-300 rounded-xl p-2 mb-2'> <FaGoogle size ='28' className='absolute ms-5 text-sky-500'></FaGoogle> Continue with Google</p>
        <p className='text-center border border-slate-300 rounded-xl p-2'> <FaGithub size ='28' className='absolute ms-5'></FaGithub> Continue with Github</p>
        </div>
        </form>
        </div>
        <div>
        <img className=' w-2/5 absolute right-20 top-40' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
        </div>
        </div>
        
    );
};

export default Register;