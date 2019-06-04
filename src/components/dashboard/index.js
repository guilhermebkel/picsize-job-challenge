import React, { Component } from 'react';
import GithubLogo from '../../resources/github-logo.png'
import './style.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        repositories: 0
    };

    this.search = this.search.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleRepositories = this.handleRepositories.bind(this);
  }

  search(){
    console.log(this.state.username)
    console.log(this.state.repositories)
  }

  handleUsername(event){
    this.setState({
        username: event.target.value
    })
  }

  handleRepositories(event){
    this.setState({
        repositories: event.target.value
    })
  }

  render() {

    return (
        <div className="dashboard"> 
            <div className="dashboard-container">
                <div className="github-logo">
                    <img alt="github" src={GithubLogo} />
                </div>
                <form className="form">
                    <h1 className="form-title">Username:</h1>
                    <input className="form-input" value={this.state.username} onChange={this.handleUsername}></input>
                    <h1 className="form-title">Number of Repositories:</h1>
                    <input className="form-input" value={this.state.repositories} onChange={this.handleRepositories} type="number"></input>
                    <div className="form-button" onClick={this.search}><h1>Submit</h1></div>
                </form>
            </div>
        </div>
    );
  }
}

export default Dashboard;