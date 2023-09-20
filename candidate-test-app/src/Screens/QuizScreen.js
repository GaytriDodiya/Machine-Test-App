import React, { useState } from 'react'
import QuizComponent from '../Components/QuizComponent'
import TimerComponent from '../Components/TimerComponent'
import { Button, Card } from 'react-bootstrap';

export default function QuizScreen({ HandleTimer }) {
    const [startTimer, setStratTimer] = useState(false);

    const handleStartTimer = () => {
        setStratTimer(true);
    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            {!startTimer && (
                <Card className='bgColor mt-5' >
                    <Card.Body>
                        <Card.Text><h3 className=' mt-3'>Welcom Xyz In GoSoft Informatic</h3></Card.Text>
                        <Card.Text><b>Timer Start:</b> When you click the "Start" button, a timer will begin counting down from 10 minutes. You will have 10 minutes to complete the quiz.</Card.Text>
                        <Card.Text><b>Read Carefully:</b> Please read each question carefully before answering.</Card.Text>
                        <Card.Text><b>Skipping Questions:</b> If you are unsure of the answer to a question, you have the option to skip it and move on to the next one.</Card.Text>
                        <Card.Text>Best of luck From Gosoft Informatics!</Card.Text>
                        <div className='d-flex flex-column align-items-center'>

                            <Button onClick={handleStartTimer} className='mb-3 px-5 loginBtn '>Start Timer</Button>

                        </div>
                    </Card.Body>
                </Card>
            )}
            <TimerComponent startTimer={startTimer} />
            {startTimer && (<QuizComponent />)}
        </div>
    )
}

