import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { Store } from '../Store';

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCH_REQUEST":
            return { ...state, loading: true };
        case "FATCH_SUCCESS":
            return { ...state, quizData: action.payload, loading: false };

        case "FATCH_FAIL":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }

}

export default function QuizComponent() {
    const { state } = useContext(Store);
    const { userInfo } = state;
    console.log(userInfo)

    const [{ error, quizData, loading }, dispatch] = useReducer(reducer, { loading: false, error: '' })
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [saveAnswer, setSaveAnswer] = useState(new Array(dummyData.length).fill(''));

    const handleOptionSelect = (selectedOption, questionIndex) => {
        // const updatedAnswers = [...saveAnswer];
        // updatedAnswers[questionIndex] = selectedOption;
        // setSaveAnswer(updatedAnswers);
    };

    const HandelNext = () => {
        if (currentQuestionIndex < quizData.data.length - 1) {
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
            dispatch({ type: "FATCH_REQUEST" })
            const fatchQuestions = async () => {
                const data = await axios.get('/api/ques/show-questions');
                dispatch({ type: "FATCH_SUCCESS", payload: data });
                console.log({ data })

            }
            fatchQuestions();
        } catch (error) {
            console.log(error);
            dispatch({ type: "FATCH_FAIL", payload: error })
        }
    }, [])

    const handleSubmit = async () => {
        // try {
        // axios.put('/api/submitAnswers', { answers: saveAnswer })
        //   .then((response) => {

        //   })
        // } catch (error) {

        // }
    }
    // console.log(quizData.data.length)
    // const currentQuestion = quizData[currentQuestionIndex];
    // const quizDataLength = quizData && quizData.data ? quizData.data.length : 0;
    // console.log(quizDataLength)
    return (

        <Container>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h3>we Test Your skill</h3>
                {quizData && quizData.data && currentQuestionIndex >= 0 && currentQuestionIndex < quizData.data.length ? (
                    <>
                        <Card className='bgColor mt-5'>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                {quizData ? (
                                    <div key={quizData._id}>
                                        <Row>
                                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                                <Card.Title><h4>Question No : {currentQuestionIndex + 1} </h4>  </Card.Title>
                                                <Card.Text >{quizData.data[currentQuestionIndex].question}</Card.Text>
                                            </Col>
                                            <Col>
                                                {quizData.data[currentQuestionIndex].options.map((options, index) => (
                                                    <Card key={index} onClick={() => handleOptionSelect(options, currentQuestionIndex)}
                                                        className="inputs p-2">{index + 1} {options}</Card>
                                                ))}
                                            </Col>
                                        </Row>
                                    </div>
                                ) : (
                                    <div>Loading</div>
                                )}
                            </Card.Body>
                        </Card>
                        <div className='d-flex  align-items-center'>
                            <Button className='my-3 mx-2 px-5 loginBtn ' onClick={HandlePreviou} disabled={currentQuestionIndex === 0}>Previous</Button>
                            <Button className='my-3 px-5 loginBtn ' onClick={HandelNext} disabled={currentQuestionIndex === quizData - 1}>Next</Button>
                        </div>
                    </>

                ) :
                    (
                        <div>
                            {/* <div>Submit your answer</div>
                            {currentQuestionIndex === quizData.data.length - 1 &&
                                <Button onClick={handleSubmit}>Submit Answers</Button>
                            } */}

                        </div>

                    )}
            </div>
        </Container>
    )
}
