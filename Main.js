import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './Card';
import { Feedback, FeedbackForm } from './Feedback';
import Laptop from './Laptop';
import { Login } from './Login';
import { Mainfeedback } from './Mainfeedback';
import Mobile from './Mobile';
import Navbar from './Navbar';
import { Notification } from './Notification';
import Notpage from './Notpage';
import Payment from './Payment';
import Project from './Project';
import Self from './Self';
import { Social } from './Socialbutton';
import { Superover } from './Superover';
import { Tech } from './Tech';

const Main = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Self/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/superover" element={<Superover/>}></Route>
        <Route path="/socialbutton" element={<Social/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/tech" element={<Tech/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/feedbackform" element={<FeedbackForm/>}></Route>
        <Route path="/project" element={<Project/>}>
            <Route path="mobile" element={<Mobile/>}/>
            <Route path="laptop" element={<Laptop/>}/>
        </Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="*" element={<Notpage/>}></Route>
    </Routes>
    </div>
  );
};
export default Main;
 