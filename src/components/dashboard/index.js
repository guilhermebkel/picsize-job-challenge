import React, { Component } from 'react';
import GithubLogo from '../../resources/github-logo.png'
import List from '../list/index';
import './style.css'

// Requests the Github API and creates a method with it.
const githubRouter = require('../../api/github.js');
const githubAPI = new githubRouter();

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        repositories: 0,
        data: []
    };

    this.searchUser = this.searchUser.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleRepositories = this.handleRepositories.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  searchUser(){
    new Promise((callback) => {

        // When user clicks on 'Search' button, it requests the API
        // and come back with a response containing the found data.
        githubAPI.getUserList(this.state.username, this.state.repositories, callback);

    }).then((userList) => {
        this.setState({
            data: userList
        })
    })
  }

  // Listens to any change user
  // makes on username input field.
  handleUsername(event){
    this.setState({
        username: event.target.value
    })
  }

  // Listens to any change user
  // makes on repositories number input field.
  handleRepositories(event){
    this.setState({
        repositories: event.target.value
    })
  }

  // If user presses 'Enter' key
  // it automatically makes the search.
  handleKeyPress(event){
      if(event.key === 'Enter'){
          this.searchUser();
      }
  }

  render() {

    return (
        <React.Fragment>
            <div className="dashboard"> 
                <div className="dashboard-container">
                    <div className="github-logo">
                        <img alt="github" src={GithubLogo} />
                    </div>
                    <form className="form">
                        <h1 className="form-title">USER:</h1>
                        <input className="form-input" value={this.state.username} onChange={this.handleUsername} onKeyPress={this.handleKeyPress}></input>
                        <h1 className="form-title">NUMBER OF REPOSITORIES:</h1>
                        <input className="form-input" value={this.state.repositories} onChange={this.handleRepositories} type="number" onKeyPress={this.handleKeyPress}></input>
                        <div className="form-button" onClick={this.searchUser}><h1>SEARCH</h1></div>
                    </form>
                </div>
            </div>

            <List userList={this.state.data} />
        </React.Fragment>
    );
  }
}

export default Dashboard;