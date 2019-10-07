import React, { Component } from 'react'
import {Card, Button, Form, Row, Col} from 'react-bootstrap';

export default class Follower extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    console.log('Follower', this.props.follower)
    const {login, avatar_url, url } = this.props.follower;
    return (
      <div style={{display:'flex', flexWrap: 'nowrap'}} className="container">
      <div className='main-div'>
        <div className='followers-div' style={{}}>
          <img src={avatar_url} width={100} height={100} alt='avatar' />
          <h3>{login}</h3>
          <p></p> 
        </div>             
      </div>    
      </div>
    )
  }
}
