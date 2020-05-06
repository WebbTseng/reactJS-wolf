import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import DashBoard from '../containers/GameDashBoard';

import VisibleTodoList from '../containers/VisibleTodoList'
import GameSetup from '../containers/GameSetup';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route
          path = "/"
          exact
          component = {DashBoard}
          />
          <Route
          path = "/game"
          exact
          component = {GameSetup}
          />
      </Switch>
      </Router>
    );
  }
}

export default App
