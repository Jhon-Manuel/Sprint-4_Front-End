import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import './index.css';

import Home from './pages/home/App';
import TiposEventos from './pages/tiposEventos/TiposEventos';
import NotFound from './pages/notFound/NotFound';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/tiposEventos" component={TiposEventos}/>
        <Route path="/*" component={NotFound}/>
        {/*<Route path="/notFound" component={NotFound}/>*/} {/*Outra Forma*/}
        {/*<Redirect to="/notFound" />*/}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
