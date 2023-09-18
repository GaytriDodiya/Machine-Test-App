import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LanguageSelectionComponwnt() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Select a language for test</Card.Title>
                    <Link to="#"> <Card.Text>Java</Card.Text></Link>
                    <Link to="#"> <Card.Text>Php</Card.Text></Link>
                    <Link to="#"> <Card.Text>JavaScript</Card.Text></Link>
                </Card.Body>
            </Card>
        </Container>
    )
}
