// import React, { useState, useEffect, useContext } from 'react'
// import { Button } from 'react-bootstrap'
// import { BsFillClockFill } from 'react-icons/bs';
// import { Store } from '../Store';
// import axios from 'axios';
// const TimerComponent = React.memo(({ startTimer }) => {

//     const [seconts, setSeconds] = useState(1);
//     const [isActive, setIsActive] = useState(false);
//     const { state, dispatch: ctxDispatch } = useContext(Store);
//     const { quizData, answers, userInfo } = state;
//     console.log(answers)
//     const UserId = userInfo.newUser._id;
//     const totalQuestion = quizData?.data?.length;
//     const limitPerQuestion = 60;
//     const totalLimit = 60;
//     // const totalLimit = totalQuestion * limitPerQuestion;

//     useEffect(() => {
//         let interval;

//         if (seconts >= totalLimit) {
//             console.log('Kill')
//             setIsActive(false)
//             const handleSubmit = async () => {
//                 try {
//                     const { data } = axios.post('/api/ques/result', { response: answers, userId: UserId })
//                     ctxDispatch({ type: "FATCH_RESULT", payload: data })
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             handleSubmit()
//         }

//         if (isActive && seconts < totalLimit) {
//             interval = setInterval(() => {
//                 setSeconds((prveSeconds) => prveSeconds + 1)
//             }, 1000)
//         }


//         return () => clearInterval(interval);
//     }, [isActive, seconts, totalLimit]);

//     const minutes = Math.floor(seconts / 60);
//     const remainingSeconds = seconts % 60;

//     useEffect(() => {
//         if (startTimer) {
//             setIsActive(true);
//         }
//     }, [startTimer])

//     return (
//         <>
//             {isActive && (<p> <BsFillClockFill /> {minutes}:{remainingSeconds < totalQuestion ? `0${remainingSeconds}` : remainingSeconds}</p>)}

//         </>
//     )
// })

// export default TimerComponent;
