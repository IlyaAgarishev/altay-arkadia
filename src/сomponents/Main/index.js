import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import WelcomeImg from '../../img/welcome.png';

const Main = () => (
  <div className="main">
    <Header />
    <div className="welcome-screen">
      <img src={WelcomeImg} alt="" className="welcome-img" />
      <div className="welcome-words">
        <div className="welcome-words-top">Откройте для себя</div>
        <div className="welcome-words-middle">Горный Алтай</div>
        <div className="welcome-words-bottom">Работаем с 1991 года</div>
      </div>
      {/* <div className="mini-booking-wrapper"> */}
      <div className="mini-booking">booking</div>
      {/* </div> */}
    </div>
  </div>
);

export default Main;
