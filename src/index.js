import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.scss'
import Three from './components/Three';

import '@splidejs/react-splide/css';
import Slider from './components/Slider';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/three' exact component={Three} />
      <Route path='/slider' exact component={Slider} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
