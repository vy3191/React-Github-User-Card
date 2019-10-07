import React, { Component } from 'react'
import {Card, Button, Form, Row, Col} from 'react-bootstrap';

export default class Follower extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{margin: '0px auto', display:'flex', justifyContent:'center'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" width={220} height={220} src={this.state.info.avatar_url} />
            <Card.Body>
              <Card.Title>{this.state.info.name}</Card.Title>
              <Card.Text>
                <p style={{display:'inline-block'}}>Followers:</p>{this.state.info.followers}{" "}
                <p style={{display:'inline-block'}}>Followers:</p>{this.state.info.following}
              </Card.Text>
              <a style={{background:'rgba(0,0,0,0.65)', color:'white', textDecoration:'none', padding: '10px 12px'}}
                href={this.state.info.html_url}  target="_blank">Link To Github</a>
            </Card.Body>
          </Card>
        </div>    
    )
  }
}
