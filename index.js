import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import Card from './Card';
import { Superover } from './Superover';
import { Contact } from './Contact';
import { Social } from './Socialbutton';
import { Notification } from './Notification';
import { Login } from './Login';
import { Tech } from './Tech';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Counter } from './Counter';
import { Effect } from './Effect';
import { Fruitcounter } from './Fruitcounter';
import { Datefunction } from './Datefunction';
import { Ex } from './Ex';
import {Mainfeedback} from './Mainfeedback'
import ZoomSignIn from './Zoom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    {/* <BrowserRouter>
      <Mainfeedback/>
    </BrowserRouter> */}
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
