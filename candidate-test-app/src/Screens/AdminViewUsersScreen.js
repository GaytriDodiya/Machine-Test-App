import React, { useEffect, useReducer } from 'react'
import { Table } from 'react-bootstrap'
import { users } from '../DummyData';
import axios from 'axios';

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCH_REQUEST":
            return { ...state, loading: true };
        case "FATCH_SUCCESS":
            return { ...state, usersData: action.payload, loading: false };

        case "FATCH_FAIL":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }

}
export default function AdminViewUsersScreen() {
    const [{ error, usersData, loading }, dispatch] = useReducer(reducer, { loading: false, error: '' })

    useEffect(() => {
        try {
            dispatch({ type: "FATCH_REQUEST" })
            const FatchUsers = async () => {
                const data = await axios.get("/api/users");
                dispatch({ type: "FATCH_SUCCESS", payload: data })
            }
            FatchUsers()

        }
        catch (error) {
            dispatch({ type: "FATCH_FAIL", payload: error })
            console.log(error);
        }

    }, [])


    return (
        <>
            {loading ? (
                <div>Lading.....</div>
            ) : (error ? (
                <div>{error}</div>
            ) : (
                <Table striped bordered hover size="sm mt-5 pt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Lnaguage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usersData) => (
                            <tr key={usersData.id}>
                                <td>{usersData.name}</td>
                                <td>{usersData.contact_number}</td>
                                <td>{usersData.email}</td>
                                <td>{usersData.language}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )

            )}

        </>
    )
}