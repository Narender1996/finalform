import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './fun_comp/Home'
import User from './fun_comp/User'
import Signup from './fun_comp/signup';
import Login from './fun_comp/login'
// import Navbar from './fun_comp/Navbar'
import Protected from './fun_comp/protected'

function App() {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path='/home'><Protected Cmp={Home} /></Route> 
          <Route exact path='/user'><Protected Cmp={User} /></Route> 
          <Route exact path='/' component={Signup} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
