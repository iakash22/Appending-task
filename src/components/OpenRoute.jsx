import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const OpenRoute = ({children}) => {
    const { isAuthenticate } = useSelector(state => state.auth);
    if (isAuthenticate) {
        return <Navigate to={'/'} />
    } else {
        return children;
    }
}

export default OpenRoute
