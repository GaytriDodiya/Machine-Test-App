import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserLock } from 'react-icons/fa';
import { GrView } from "react-icons/gr";
import { BiCodeBlock } from 'react-icons/bi';
import { IoIosCreate } from 'react-icons/io'
export default function Sidebar() {
    return (
        <Container className='bg-infos vh-100 '>
            <Row className='align-items-center pt-3'>
                <div className='d-flex'><FaUserLock /><p className='m-0'>Admin</p></div>

            </Row>
            <Row >
                <Col className=' d-flex flex-column pt-2 align-items-start' >
                    <Link to={'/adminViewUsers'} className='text-dark my-2'><GrView />View Users</Link>
                    <Link to={'/adminGenerateLoginCode'} className='text-dark my-2'><BiCodeBlock />Generate Code</Link>
                    <Link to={'/adminCreateUser'} className='text-dark my-2'><IoIosCreate />Create Admin</Link>
                </Col>
            </Row>

            {/* <Row >
                <Col className=' d-flex flex-column pt-2 align-items-center justify-content-center ' >
                    <p><b>If users have any questions, they are welcome to ask for clarification or an interview.</b></p>
                </Col>
            </Row> */}
        </Container>
    )
}
