import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './components/dashboard/index';
import Navbar from './components/navbar/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="" component={Navbar} />
        <Route exact path="" component={Dashboard} />
      </BrowserRouter>
    );
  }
}

export default App;