import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user);
    // console.log(loading);
    const location = useLocation()
    if (user) {
        return children
    }
    if (loading) {
        return <div className='text-center mt-20'>
            <Loading></Loading>
        </div>
    }



    return <Navigate
        to="/login"
        state={{ from: location }}
        replace
    ></Navigate>
};

export default PrivateRoute;