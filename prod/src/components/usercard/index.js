import React, { Component } from 'react';
import Modal from 'react-modal';
import modalStyle from './modal-style'
import './style.css'
import './responsive.css'

// Requests the Github API and creates a method with it.
const githubRouter = require('../../api/github.js');
const githubAPI = new githubRouter();

// Automatically lists the user repositories when needed.
const UserRepositories = (repositories) => {
    return (
        <a className="modal-repositories" href={repositories.html_url} target="_blank" rel="noopener noreferrer">
            <h1 className="modal-repositories">{repositories.name}</h1>
        </a>   
    )
}

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      userName: "",
      userAvatar: "",
      userLocation: "",
      userGitUrl: "",
      userRepositories: []
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo(user){

    new Promise((callback) => {

        // When user clicks on 'Search' button, it requests the API
        // and come back with a response containing the found data.
        githubAPI.getUserData(user, callback);

    }).then((userInfo) => {

        this.setState({
            userName: userInfo.name,
            userAvatar: userInfo.avatar_url,
            userLocation: userInfo.location,
            userGitUrl: userInfo.html_url
        })
        
        new Promise((callback) => {

            // After getting user data, it makes a new request to
            // get all repositories from the selected user.
            githubAPI.getUserRepositories(user, callback);

        }).then((userRepositories) => {

            this.setState({
                userRepositories: userRepositories
            })
            
            // So after getting all data and repositories
            // from user, it shows everything on a Modal.
            this.openModal();
        })

    })
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){
    this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
        <React.Fragment>
            <div onClick={() => {this.getUserInfo(this.props.login)}} className="user-card">
                <h1 className="user-name">{this.props.login}</h1>
            </div>
            
            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={modalStyle} >
                <a href={this.state.userGitUrl} target="_blank" rel="noopener noreferrer">
                  <img className="modal-image" alt="avatar" src={this.state.userAvatar} />
                </a>
                <h2 className="modal-title">{this.state.userName}</h2>
                <h2 className="modal-subtitle"><strong>Location: </strong>{this.state.userLocation}</h2>
                <h2 className="modal-subtitle"><strong>Repositories: </strong></h2>
                <div>
                    {this.state.userRepositories.slice(0, 5).map(repositories => (
                        <UserRepositories {...repositories} />
                    ))}
                </div>
                <button className="modal-button" onClick={this.closeModal}>CLOSE</button>
            </Modal>
      </React.Fragment>
    );
  }
}

export default UserCard;