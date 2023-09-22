import React, { createContext, useReducer } from 'react';


export const Store = createContext();

const initialValue = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    adminInfo: localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null,
    quizData: {},
    answers: [],
    result: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCH_USERINFO":
            return { ...state, userInfo: action.payload };
        case "USER_LOGOUT":
            return { ...state, userInfo: null };
        case "FATCH_ADMININFO":
            return { ...state, adminInfo: action.payload };
        case "ADMIN_LOGOUT":
            return { ...state, adminInfo: null };
        case "FATCH_QUIZDATA":
            return { ...state, quizData: action.payload };
        case "FATCH_RESULT":
            return { ...state, result: action.payload };
        case "SAVE_ANSWER":
            return { ...state, answers: [...state.answers, { _id: action.questionId, correctAnswer: action.selectedOption }] };
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
