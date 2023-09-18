import axios from 'axios';
import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';

export default function AdminGenerateLoginCodeScrren() {

    const HandleSubmit = async (e) => {
        e.prevendDefault()
        try {
            const data = await axios.post(`/api/codegenerate`);
            toast.success(data);
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
                        <Button type='submit'>Generate</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
