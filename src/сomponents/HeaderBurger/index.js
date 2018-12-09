import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Burger from '../../img/burger.svg';
import Close from '../../img/close.svg';

class HeaderBurger extends React.Component {
  render() {
    return (
      <div className="header-burger-wrapper">
        <img
          src={Burger}
          alt=""
          className="header-burger-open"
          onClick={() => {
            this.headerBurger.style.transform = 'translate(150px)';
          }}
        />
        <div
          className="header-burger"
          ref={ref => {
            this.headerBurger = ref;
          }}
        >
          <img
            src={Close}
            alt=""
            className="header-burger-close"
            onClick={() => {
              this.headerBurger.style.transform = 'translate(-150px)';
            }}
          />
          <Link to="/" className="burger-route">
            Главная
          </Link>
          <Link to="/tours" className="burger-route">
            Маршруты
          </Link>
          <Link to="/booking" className="burger-route">
            Бронирование
          </Link>
          <Link to="/contacts" className="burger-route">
            Контакты
          </Link>
          <Link to="/team" className="burger-route">
            Команда
          </Link>
          <Link to="/howtogetus" className="burger-route">
            Как добраться
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderBurger;
