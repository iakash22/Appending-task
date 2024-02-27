import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticate } = useSelector(state => state.auth);
    // console.log('Private ROute');
    if (isAuthenticate) {
        return children;
    } else {
        return <Navigate to={'/'}/>
    }
}

export default PrivateRoute
