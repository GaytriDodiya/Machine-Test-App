import React, { useContext } from 'react'
import { Store } from '../Store';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ Children }) {
    const { state } = useContext(Store);
    const { userInfo } = state;
    return userInfo ? Children : <Navigate to="/" />
}
