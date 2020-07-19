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
          <h1 class="navbar-brand">Contacts</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/"><div className="text-primary">Home</div></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/create"><div className="text-primary">Add Contact</div></Link>
              </li>
            </ul>
          </div>
        </nav>

      <Switch>
        <Route data-testid="link-to-create" path='/create'>
            <CreateContact />
        </Route>
        <Route data-testid="link-to-update" path='/update/:id'>
            <UpdateContact />
        </Route>
        <Route data-testid="link-to-detail" path="/contact/:id">
            <DetailContact/>
        </Route>
        <Route data-testid="link-to-home" exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
