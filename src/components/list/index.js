import React, { Component } from 'react';
import UserCard from '../usercard/index';
import './style.css'
import './responsive.css'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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