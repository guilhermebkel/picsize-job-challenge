import React, { Component } from 'react';
import GithubLogo from '../../resources/github-logo.png'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {

    return (
        <div style={{display: "flex", margin: "auto auto"}}> 
            <div style={{display: "inline-block"}}>
                <div style={{display: "flex", width: "140px", margin: 0}}>
                    <img alt="github" src={GithubLogo} style={{width: "50px", height: "50px", margin: "auto auto"}} />
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;