import React, { Component } from 'react';
import Dashboard from './components/dashboard/index';
import Navbar from './components/navbar/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <div style={{display: "flex", width: "100vw", height: "100vh", backgroundColor: "#53c2d4"}}>
          
          <Dashboard />
        </div>
      </React.Fragment>
    );
  }
}

export default App;