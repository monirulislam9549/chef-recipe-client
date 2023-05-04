import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56" value="0" max="100"></progress>
    }

    if (user) {
        children
    }

    return <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
    ></Navigate>
};

export default PrivateRoute;