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
          <Switch>
            <Route path="/about" render={()=> <Projects />}></Route>
            <Route path="/projects" render={()=> <Projects />}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
