import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import * as views from './example-views';


const NavBar = () => {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={ views.Home } />
        <Route exact path='/Buttons' component={ views.ButtonsExample } />
        <Route exact path='/Side-Panel' component={ views.SidePanelExample } />
        <Route exact path='/Tabes' component={ views.TabesExample } />
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
