import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './сomponents/Main';
import Tours from './сomponents/Tours';
import Tour from './сomponents/Tour';
import Booking from './сontainers/Booking';
import Contacts from './сomponents/Contacts';
import Team from './сomponents/Team';
import HowToGetUs from './сomponents/HowToGetUs';
import Story from './сomponents/Story';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/tours" component={Tours} />
      <Route path="/tour" component={Tours} />
      <Route path="/booking" component={Booking} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/team" component={Team} />
      <Route path="/howtogetus" component={HowToGetUs} />
      <Route path="/story" component={Story} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
