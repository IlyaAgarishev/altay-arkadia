import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HeaderBig = () => (
  <div className="header">
    <div className="phone-number">8-912-24-90-443</div>
    <div className="routes">
      <Link to="/" className="route">
        Главная
      </Link>
      <Link to="/tours" className="route">
        Маршруты
      </Link>
      <Link to="/booking" className="route">
        Бронирование
      </Link>
      <Link to="/contacts" className="route">
        Контакты
      </Link>
      <Link to="/team" className="route">
        Команда
      </Link>
      <Link to="/howtogetus" className="route">
        Как добраться
      </Link>
    </div>
  </div>
);

export default HeaderBig;
