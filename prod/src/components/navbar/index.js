import React, { Component } from 'react';
import PicsizeLogo from '../../resources/picsize-logo.png'
import './style.css'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {

    return (
        <div className="navbar"> 
            <a href="https://www.picsize.com.br/" target="_blank" rel="noopener noreferrer" className="logo"><img alt="picsize" src={PicsizeLogo} /></a>
        </div>
    );
  }
}

export default Navbar;