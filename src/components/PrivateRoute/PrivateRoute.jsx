import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='text-center mt-52'>
        <ClipLoader
        loading={loading}
        size={50}/>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login"></Navigate>;
};

export default PrivateRoute;