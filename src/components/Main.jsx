import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Cats from './Cats/Cats';
import Dogs from './Dogs/Dogs';
import Search from './Search/Search';
import ToDoInstructions from './ToDo/ToDoInstructions';


export default function Main () {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
            <Route exact path="/cats"><Cats /></Route>
            <Route exact path="/search" component={ Search } />
            <Route exact path="/dogs" component={ Dogs } />
            <Route exact path="/todo" component={ ToDoInstructions } />
        </Switch>
      </Router>
    </>
  )
}
