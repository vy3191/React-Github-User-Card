import React, { Component } from 'react'
import axios from 'axios';
import {Card, Button } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super()
    this.state={
      gitId: 'vy3191',
      info: {}
    }
  }

  componentDidMount() {
    this.getMyInfo();
  }

  componentDidUpdate() {

  }
  getMyInfo = () => {
       axios.get(`https://api.github.com/users/${this.state.gitId}`)
            .then( response => {
               console.log(response.data);
               this.setState({
                  info:response.data
               })
            })
            .catch(error => {
               console.log(error)
            })
  }
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center', color:'red'}}>User-Card-Project</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.info.avatar_url} />
          <Card.Body>
            <Card.Title>{this.state.info.name}</Card.Title>
            <Card.Text>
              <p style={{display:'inline-block'}}>Followers:</p><span>{this.state.info.followers}</span>{" "}
              <p style={{display:'inline-block'}}>Followers:</p><span>{this.state.info.following}</span>
            </Card.Text>
            <Button variant="success"><a href={this.state.info.html_url}>Link To My Github</a></Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
