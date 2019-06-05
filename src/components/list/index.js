import React, { Component } from 'react';
import './style.css'

const UserCard = props => {
  return (
    <div className="user-card">
      <h1 className="user-name">{props.login}</h1>
    </div>
  )
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {

    return (
        <div className="list"> 
            {this.props.userList.map(userData => (
              <UserCard {...userData} />
            ))}
        </div>
    );
  }
}

export default List;