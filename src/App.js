import React, { Component } from 'react';
import Projects from './containers/projects'
import Navbar from './components/navbar'
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          Welcome to Bryan's Portfolio
          <Switch>
            <Route path="/projects" render={()=> <Projects />}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
