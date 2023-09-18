import React, { createContext, useReducer } from 'react';


export const Store = createContext();

const initialValue = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCH_USERINFO":
            return { ...state, userInfo: action.payload };
        case "USER_LOGOUT":
            return { ...state, userInfo: null };
        default:
            return state;
    }
}

export default function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const value = { state, dispatch }
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}