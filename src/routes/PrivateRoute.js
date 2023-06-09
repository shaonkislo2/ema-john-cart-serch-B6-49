import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        console.log('Yes loading found');
        return <div>Loading..</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;