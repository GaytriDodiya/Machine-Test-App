import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function AdminCreateUserScrren() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const HandleSubmit = async () => {
        try {

            const data = await axios.post(`/api/login`, {
                email: email,
                password: password,
            });
            toast.success(data);
            navigator('/AdminDashbord');
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <>
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
                        </Form.Group>

                        <Button type='submit'>Create</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
