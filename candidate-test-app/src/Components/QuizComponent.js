import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { Store } from '../Store';
import { BsFillClockFill } from 'react-icons/bs';

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCH_REQUEST":
            return { ...state, loading: true };
        case "FATCH_SUCCESS":
            return { ...state, quizData: action.payload, loading: false };
        case "FATCH_FAIL":
            return { ...state, error: action.payload, loading: false };
        case "FATCH_RESULT":
            return { ...state, result: action.payload };
        case "SHOW_RESULT":
            return { ...state, showResult: action.payload };
        default:
            return state;
    }
};

export default function QuizComponent() {
    const [seconts, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, answers, result } = state;
    const UserId = userInfo.newUser._id;
    const totalQuestion = state.quizData?.data?.length;
    const totalLimit = 30;
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [checkSubmission, setCheckSubmission] = useState(false); // Corrected typo
    const [{ error, quizData, loading, showResult }, dispatch] = useReducer(reducer, {
        loading: false,
        error: '',
        showResult: false,
    });

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleOptionSelect = (selectedOption, questionId) => {
        ctxDispatch({ type: "SAVE_ANSWER", questionId, selectedOption });
    };

    const HandelNext = () => {
        if (currentQuestionIndex < quizData.data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const HandlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post('/api/ques/result', { response: answers, userId: UserId });
            console.log({ data });
            ctxDispatch({ type: "FATCH_RESULT", payload: data });
            dispatch({ type: "SHOW_RESULT", payload: true });
            setQuizSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        try {
            dispatch({ type: "FATCH_REQUEST" });
            const fetchQuestions = async () => {
                const data = await axios.get('/api/ques/show-questions');
                dispatch({ type: "FATCH_SUCCESS", payload: data });
                ctxDispatch({ type: "FATCH_QUIZDATA", payload: data });
                console.log({ data });
                setIsActive(true); // Activate timer when quizData is available
            };
            fetchQuestions();
        } catch (error) {
            console.log(error);
            dispatch({ type: "FATCH_FAIL", payload: error });
        }
    }, []);

    useEffect(() => {
        let interval;

        if (seconts >= totalLimit) {
            console.log('Kill');
            setIsActive(false);
            if (!quizSubmitted && !checkSubmission) {
                handleSubmit(); // Call handleSubmit when the timer is complete
                setCheckSubmission(true);
            }
        }

        if (isActive && seconts < totalLimit && !quizSubmitted) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, seconts, totalLimit, quizSubmitted, checkSubmission]);

    const minutes = Math.floor(seconts / 60);
    const remainingSeconds = seconts % 60;

    return (
        <>

            {isActive && (
                <p>
                    <BsFillClockFill /> {minutes}:{remainingSeconds < totalQuestion ? `0${remainingSeconds}` : remainingSeconds}
                </p>
            )}
            <Container>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h3>Test Your Skill</h3>
                    {showResult ? (
                        <Card>
                            <Card.Body>
                                <Card.Text>{result.userRightAns}</Card.Text>
                            </Card.Body>
                        </Card>
                    ) : (
                        <>
                            {quizData && quizData.data && currentQuestionIndex >= 0 && currentQuestionIndex < quizData.data.length && (
                                <>
                                    <Card className='bgColor mt-5'>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            {quizData ? (
                                                <div key={quizData._id}>
                                                    <Row>
                                                        <Col className='d-flex flex-column align-items-center justify-content-center'>
                                                            <Card.Title><h4>Question No: {currentQuestionIndex + 1}</h4></Card.Title>
                                                            <Card.Text>{quizData.data[currentQuestionIndex].question}</Card.Text>
                                                        </Col>
                                                        <Col>
                                                            {quizData.data[currentQuestionIndex].options.map((option, index) => (
                                                                <label key={index} className={`inputs optionSelect p-2 ${answers[quizData.data[currentQuestionIndex]._id] === option ? 'selected-option' : ''}`}>
                                                                    <input
                                                                        type="radio"
                                                                        name={`question_${quizData.data[currentQuestionIndex]._id}`} // Use a unique name for each question
                                                                        value={option}
                                                                        checked={answers[quizData.data[currentQuestionIndex]._id] === option}
                                                                        onChange={() => handleOptionSelect(option, quizData.data[currentQuestionIndex]._id)}
                                                                    />
                                                                    {index + 1} {option}
                                                                </label>
                                                            ))}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            ) : (
                                                <div>Loading</div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                    {currentQuestionIndex === quizData.data.length - 1 ? (
                                        <div className='mt-3'>
                                            <Button onClick={handleSubmit}>Submit Answers</Button>
                                        </div>
                                    ) : (
                                        <div className='d-flex align-items-center'>
                                            <Button className='my-3 mx-2 px-5 loginBtn' onClick={HandlePrevious} disabled={currentQuestionIndex === 0}>Previous</Button>
                                            <Button className='my-3 px-5 loginBtn' onClick={HandelNext} disabled={currentQuestionIndex === quizData - 1}>Next</Button>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </Container>
        </>
    );
}
