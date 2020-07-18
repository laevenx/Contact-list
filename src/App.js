import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateContact from './components/CreateContact'
import Home from './components/Home'
import UpdateContact from './components/UpdateContact'
import DetailContact from './components/DetailContact';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h1 class="navbar-brand">Welcome!!</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/create">Add Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

      <Switch>
        <Route path='/create'>
            <CreateContact />
        </Route>
        <Route path='/update/:id'>
            <UpdateContact />
        </Route>
        <Route path="/contact/:id">
            <DetailContact/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
