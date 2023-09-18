import React from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import Sidebar from '../Components/sidebar';

export default function AdminDashboardScreen() {
    return (
        <>
            <Row>
                <Col className='d-flex flex-column align-items-center'>
                    <h1>Dashboard</h1>
                    <Image src="/assets/Images/adminDashboard.jpg" className='adminDashboardimg' />
                    <Button>View Users</Button>
                </Col>
            </Row>
            {/* <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} >

                  

                </Col>
            </Row> */}

        </>
    )
}
