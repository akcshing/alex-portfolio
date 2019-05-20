import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar"
import HomeContainer from "./HomeContainer"

function App() {
  return (
    <Router>
      <div className="app">
        <header className="page-container">
          <NavBar />
        </header>
      <Switch>
        <Route exact path = "/" component = {HomeContainer}/>
      </Switch>
        <footer className="page-container">
          <span>test</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
