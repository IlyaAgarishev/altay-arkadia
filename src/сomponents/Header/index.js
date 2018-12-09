import React from 'react';
import HeaderBig from '../HeaderBig';
import HeaderBurger from '../HeaderBurger';

var screenWidth =
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const Header = () => (screenWidth < 530 ? <HeaderBurger /> : <HeaderBig />);

export default Header;
