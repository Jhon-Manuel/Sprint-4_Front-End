import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import Agendamento from './pages/agendamento/agendamento';
import Especialidades  from './pages/especialidade/especialidade';
import Login from './pages/login/login';
import Perfil from './pages/perfil/perfil';
import NotFound from './pages/notFound/notFound'

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
       <Routes>
         <Route exatc path="/" component={App} />
         <Route path="/agendamento" component={Agendamento} />
         <Route path="/especialidade" component={Especialidades} />
         <Route path="/login" component={Login} />
         <Route path="/perfil" component={Perfil} />
         <Route path="/notFound" component={NotFound} />
         <Route path="/" component={NotFound} />
       </Routes>
    </div>
  </Router>
)

ReactDOM.render( routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
