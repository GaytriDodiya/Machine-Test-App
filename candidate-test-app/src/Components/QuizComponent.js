import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import dummyData from '../DummyData'
import axios from 'axios';
export default function QuizComponent() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [saveAnswer, setSaveAnswer] = useState(new Array(dummyData.length).fill(''));

    const handleOptionSelect = (selectedOption, questionIndex) => {
        const updatedAnswers = [...saveAnswer];
        updatedAnswers[questionIndex] = selectedOption;
        setSaveAnswer(updatedAnswers);
    };

    const HandelNext = () => {
        if (currentQuestionIndex < dummyData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const HandlePreviou = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }


    useEffect(() => {
        try {

            const fatchQuestions = async () => {
                const data = await axios.put('/api/submitAnswers', { answers: saveAnswer })
            }
            fatchQuestions();
        } catch (error) {

        }

        // try {
        //     const handleSubmit = async () => {
        // axios.put('/api/submitAnswers', { answers: saveAnswer })
        // }
        // } catch (error) {

        // }

    }, [])

    const handleSubmit = async () => {
        // try {
        // axios.put('/api/submitAnswers', { answers: saveAnswer })
        //   .then((response) => {

        //   })
        // } catch (error) {

        // }
    }

    const currentQuestion = dummyData[currentQuestionIndex];
    return (
        <Container>
            <div className='d-flex flex-column align-items-center justify-content-center'>


                <h3>we Test Your skill</h3>
                <Card className='bgColor mt-5'>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        {currentQuestion && (
                            <div key={currentQuestion._id}>
                                <Row>
                                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                                        <Card.Title><h4>Question No : {currentQuestionIndex + 1}</h4>  </Card.Title>
                                        <Card.Text >{currentQuestion.question}</Card.Text>
                                    </Col>
                                    <Col>
                                        {currentQuestion.options.map((options, index) => (
                                            <Card key={index} onClick={() => handleOptionSelect(options, currentQuestionIndex)}
                                                className="inputs p-2">{index + 1} {options}</Card>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Card.Body>
                </Card>
                <div className='d-flex  align-items-center'>
                    <Button className='my-3 mx-2 px-5 loginBtn ' onClick={HandlePreviou} disabled={currentQuestionIndex === 0}>Previous</Button>
                    <Button className='my-3 px-5 loginBtn ' onClick={HandelNext} disabled={currentQuestionIndex === dummyData.length - 1}>Next</Button>
                </div>
                {currentQuestionIndex === dummyData.length - 1 && (
                    <Button onClick={handleSubmit}>Submit Answers</Button>
                )}
            </div>
        </Container>
    )
}
// {saveAnswer[currentQuestionIndex] === options ? 'selected' : ''}