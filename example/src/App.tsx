import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as views from './example-views';



const NavBar = () => {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={ views.Home } />
        <Route exact path='/Buttons' component={ views.ButtonsExample } />
        <Route exact path='/Titles' component={ views.TitlesExample } />
        <Route exact path='/Side-Panel' component={ views.SidePanelExample } />
        <Route exact path='/Grid' component={ views.GridExample } />
        <Route exact path='/Tabs' component={ views.TabsExample } />
        <Route exact path='/Table' component={ views.TableExample } />
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
