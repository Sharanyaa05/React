import React from 'react'
import { Route, Routes } from 'react-router'
import { Feedback,FeedbackForm } from './Feedback'


const Mainfeedback = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Feedback/>}></Route>
            <Route path="/feedbackForm" element={<FeedbackForm/>}></Route>
        </Routes>
    </div>
  )
}

export {Mainfeedback}