import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillClockFill } from 'react-icons/bs';
export default function TimerComponent({ startTimer }) {
    const [seconts, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && seconts < 600) {
            interval = setInterval(() => {
                setSeconds((prveSeconds) => prveSeconds + 1)
            }, 1000)
        }

        if (seconts > 600) {
            setIsActive(false)
        }

        return () => clearInterval(interval);
    }, [isActive, seconts]);

    const minutes = Math.floor(seconts / 60);
    const remainingSeconds = seconts % 60;

    useEffect(() => {
        if (startTimer) {
            setIsActive(true);
        }
    }, [startTimer])
    return (
        <>
            {isActive && (<p> <BsFillClockFill /> {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</p>)}

        </>
    )
}
