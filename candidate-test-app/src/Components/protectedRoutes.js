import React, { Children, useContext } from 'react'
import { Store } from '../Store';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes() {
    const { state } = useContext(Store);
    const { userInfo } = state;
    return userInfo ? Children : <Navigate to="/" />
}
