import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import * as views from './example-views';


const NavBar = () => {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={ views.Home } />
        <Route exact path='/Buttons' component={ views.ButtonsExample } />
        <Route exact path='/Titles' component={ views.TitlesExample } />
        <Route exact path='/Side-Panel' component={ views.SidePanelExample } />
      </Switch>
    </Router>
  )
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
