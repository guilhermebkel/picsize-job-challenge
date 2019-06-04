import React, { Component } from 'react';
import './style.css'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {

    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "red"}}> 
            <h1>{this.props.data}</h1>
        </div>
    );
  }
}

export default List;