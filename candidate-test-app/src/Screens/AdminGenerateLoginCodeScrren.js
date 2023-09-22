import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AdminGenerateLoginCodeScrren() {
    const [saveCode, setSaveCode] = useState('');
    const params = useParams();
    const { id: adminId } = params;

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.get(`/api/auth/generate-code/${adminId}`);
            toast.success(data.message);
            setSaveCode(data.newCode.code);

        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <>
            <Card className='mt-5 cardLoginpage' >
                <Row>
                    <Col>
                        <Image src='/assets/Images/generate.png' />
                    </Col>
                    <Col className='d-flex px-5'>
                        <Form onSubmit={HandleSubmit}>
                            <Form.Group>
                                <Form.Label>Generate Code for User Login</Form.Label>
                            </Form.Group>
                            <Button type='submit' >Generate</Button>
                        </Form>
                        <div className='bg-white'>{saveCode}</div>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

