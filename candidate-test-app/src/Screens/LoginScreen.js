import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

export default function LoginScreen() {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, adminInfo } = state;

    const navigator = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobileNum, setMobileNum] = useState();
    const [language, setLanguage] = useState();
    const [code, setCode] = useState();
    const [isAdmin, setIaAdmin] = useState(false);

    // admin
    const [adminEmail, setAdminEmail] = useState();
    const [adminPassword, setAdminPassword] = useState();

    const HandleUserSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/api/auth/login`, {
                username: name,
                email: email,
                contact: mobileNum,
                language: language,
                code: code,
            });
            ctxDispatch({ type: "FATCH_USERINFO", payload: data })
            toast.success("you are registered successfully !");
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigator('/quiz');
        } catch (error) {
            toast.error(error);
        }
    }

    const HandleAdminSubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post(`/api/auth/admin-login`, {
                email: adminEmail,
                password: adminPassword,
            });
            ctxDispatch({ type: "FATCH_ADMININFO", payload: data });
            localStorage.setItem('adminInfo', JSON.stringify(data));
            toast.success(data);
            navigator('/AdminDashbord');

        } catch (error) {
            toast.error(error);
        }
    }

    const HandleAdminClickBtn = () => {
        setIaAdmin(true)
    }

    useEffect(() => {
        if (userInfo || adminInfo) {
            navigator("/quiz")
        }
    }, [navigator, userInfo, adminInfo])

    return (
        <Container>
            <Row>
                {!isAdmin ? (
                    <>
                        <Card className='mt-5 cardLoginpage' >
                            <Col md={5} className='imgbg'>
                                <Image src='/assets/Images/login2r.png' />
                            </Col>
                            <Col md={5}>
                                <h3 className='text-primary mt-3'>Login Form</h3>
                                <Form onSubmit={HandleUserSubmit}>
                                    <Form.Group>
                                        <Form.Label className='px-2 text-primary font-weight-bold'>Your Name</Form.Label>
                                        <Form.Control className='inputs' type='text' placeholder='enter your name here' onChange={(e) => setName(e.target.value)} required />
                                        <Form.Label className='px-2 text-primary'>Your Email</Form.Label>
                                        <Form.Control className='inputs' type='email' placeholder='enter your email here' onChange={(e) => setEmail(e.target.value)} required />
                                        <Form.Label className='px-2 text-primary'>Your Mobile No</Form.Label>
                                        <Form.Control className='inputs' type='text' placeholder='enter your Mobile No here' onChange={(e) => setMobileNum(e.target.value)} required />
                                        <Form.Label className='px-2 text-primary'>Language</Form.Label>
                                        <Form.Select className='inputs' onChange={(e) => setLanguage(e.target.value)} value={language}>
                                            <option>Select Prefered Language</option>
                                            <option value="java">Java</option>
                                            <option value="php">PHP</option>
                                            <option value="javascript">JavaScript</option>
                                        </Form.Select>
                                        <Form.Label className='px-2 text-primary'>Login Code</Form.Label>
                                        <Form.Control className='inputs' type='text' onChange={(e) => setCode(e.target.value)} placeholder='enter provided code here' required />
                                    </Form.Group>
                                    <div className='d-flex flex-column align-items-center'>
                                        <Button className='mb-3 px-5 loginBtn ' type='submit'>Login</Button>
                                        <p onClick={HandleAdminClickBtn} className='loginadminlink'>Login as Admin</p>
                                    </div>

                                </Form>
                            </Col>
                        </Card>
                    </>
                ) :
                    (
                        <div className='d-flex align-items-center justify-content-center'>
                            <Card className='mt-5 p-5 d-flex  align-items-center justify-content-around flex-row py-5 adminLogin' >
                                <Col md={4}>
                                    <Image src='/assets/Images/Adminlogin1r.png' />
                                </Col>
                                <Col md={4}>
                                    <h3 className='text-primary mt-3 px-2'>Admin Login </h3>
                                    <Form onSubmit={HandleAdminSubmit}>
                                        <Form.Group>
                                            <Form.Label className='px-2 text-primary font-weight-bold'>Your Email</Form.Label>
                                            <Form.Control className='inputs' type='email' placeholder='Email' onChange={(e) => setAdminEmail(e.target.value)} required />
                                            <Form.Label className='px-2 text-primary font-weight-bold'> Password</Form.Label>
                                            <Form.Control className='inputs' type='text' placeholder='Password' onChange={(e) => setAdminPassword(e.target.value)} required />
                                        </Form.Group>
                                        <div className='d-flex flex-column align-items-center'>
                                            <Button className='mb-3 px-5 loginBtn ' type='submit'>Login</Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Card>
                        </div>
                    )}

            </Row>

        </Container>
    )
}
