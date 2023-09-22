import React, { useContext } from 'react'
import { Store } from '../Store';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {
    const { state } = useContext(Store);
    const { userInfo, adminInfo } = state;

    return (userInfo || adminInfo) ? children : <Navigate to="/" />
}
