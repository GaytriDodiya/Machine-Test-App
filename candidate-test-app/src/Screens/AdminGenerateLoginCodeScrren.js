import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';

export default function AdminGenerateLoginCodeScrren() {
    const [saveCode, setSaveCode] = useState('');

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.get(`/api/auth/generate-code/650a9a1198a4e062c6959e00`);
            console.log({ data })
            setSaveCode(data.code);
            // toast.success(data);
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
                    <Form onSubmit={HandleSubmit}>
                        <Form.Group>
                            <Form.Label>Generate Code for User Login</Form.Label>
                        </Form.Group>
                        <Button type='submit' >Generate</Button>
                    </Form>
                    <div>{saveCode}</div>
                </Col>
            </Row>
        </>
    )
}

