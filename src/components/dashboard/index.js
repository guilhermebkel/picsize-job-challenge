import React, { Component } from 'react';
import GithubLogo from '../../resources/github-logo.png'
import List from '../list/index';
import './style.css'

// Requests the Github API and creates a method with it.
const githubRouter = new require('../../api/github.js');
const githubAPI = new githubRouter();

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        repositories: 0,
        data: []
    };

    this.search = this.search.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleRepositories = this.handleRepositories.bind(this);
  }

  search(){
    new Promise((callback) => {

        // When user clicks on 'Submit' button, it requests the API
        // and come back with a response containing the found data.
        githubAPI.getUserList(this.state.username, this.state.repositories, callback);

    }).then((userList) => {
        this.setState({
            data: userList
        })
        console.log(this.state.data)
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

  render() {

    return (
        <React.Fragment>
            <div className="dashboard"> 
                <div className="dashboard-container">
                    <div className="github-logo">
                        <img alt="github" src={GithubLogo} />
                    </div>
                    <form className="form">
                        <h1 className="form-title">User:</h1>
                        <input className="form-input" value={this.state.username} onChange={this.handleUsername}></input>
                        <h1 className="form-title">Number of Repositories:</h1>
                        <input className="form-input" value={this.state.repositories} onChange={this.handleRepositories} type="number"></input>
                        <div className="form-button" onClick={this.search}><h1>Submit</h1></div>
                    </form>
                </div>
            </div>

            <List value={this.state.data} />
        </React.Fragment>
    );
  }
}

export default Dashboard;