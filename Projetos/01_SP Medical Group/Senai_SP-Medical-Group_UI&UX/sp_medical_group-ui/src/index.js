import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from '.services/auth';

import './index.css';

import Home from '.pages/Home/App';
import Administrador from '.pages/Administrador/Administrador';
import Agendamento from '.pages/Agendamento/Agendamento';
import Cadastro from '.pages/Cadastro/Cadastro';
import Login from '.pages/Login/Login';
import NotFound from '.pages/NotFound/NotFound'

import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({ component: Component }) => (
  <Route 
    render={(props)=>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoComum = ({ component : Component }) => (
  <Route 
    render={(props) => 
      usuarioAutenticado() && parseJwt().role === '2' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PermissaoAdm path="/administrador" component={Administrador} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
