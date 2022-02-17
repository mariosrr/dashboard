import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';



const PrivateRoute = () =>{
    const {user} = useContext(AuthContext);
    const location = useLocation();

    return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: location}} />;
}

export default PrivateRoute;