import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
  
    if (loading) {
        return <h3 className='py-[40px] text-center'>loading.......</h3>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;