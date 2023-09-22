import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function AdminCreateUserScrren() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post(`/api/auth/register`, {
                email: email,
                password: password,
                isAdmin: isAdmin
            });
            console.log(data)
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <>
            <Card className='mt-5 cardLoginpage' >
                <Row>
                    <Col>
                        <Image src='/assets/Images/login.jpg' />
                    </Col>
                    <Col>
                        <Form onSubmit={HandleSubmit} >
                            <Form.Group>
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type='email' placeholder='enter provided code here' onChange={(e) => setEmail(e.target.value)} required />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />

                                <Form.Check label="IsAdmin" type='checkbox' placeholder='Password' checked={isAdmin} value={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} required />
                            </Form.Group>

                            <Button type='submit'>Create</Button>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
