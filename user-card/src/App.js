import React, { Component } from 'react'
import axios from 'axios';
import {Card, Button, Form, Row, Col} from 'react-bootstrap';

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

  componentDidUpdate(prevProps, prevState) {
     if(prevState.gitId != this.state.gitId) {
        this.setState({
           info:{}
        });
        this.getMyInfo();
     }

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
  handleInputChange = (event) => {
     this.setState({
       gitId: event.target.value
     })
  }
  render() {
    return (
      <>
      <div>
        <h3 style={{textAlign:'center', color:'red'}}>User-Card-Project</h3>
        <div className='form-input' style={{textAlign:'center', margin:'30px auto'}}>
          <Form style={{textAlign:'center', margin:'30px auto', padding: '0px 220px'}}>
            <Row>
              <Col>
                <Form.Control placeholder="Enter Github User Name" />
              </Col>              
                <Button style={{width: '300px'}}>Search</Button>              
            </Row>
          </Form>
        </div>
        <div style={{margin: '0px auto', display:'flex', justifyContent:'center'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" width={220} height={220} src={this.state.info.avatar_url} />
            <Card.Body>
              <Card.Title>{this.state.info.name}</Card.Title>
              <Card.Text>
                <p style={{display:'inline-block'}}>Followers:</p><span>{this.state.info.followers}</span>{" "}
                <p style={{display:'inline-block'}}>Followers:</p><span>{this.state.info.following}</span>
              </Card.Text>
              <a style={{background:'rgba(0,0,0,0.65)', color:'white', textDecoration:'none', padding: '10px 12px'}}
                href={this.state.info.html_url}  target="_blank">Link To Github</a>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <select value={this.state.gitId} onChange={this.handleInputChange} >
          <option value='vy3191'>vy3191</option>
          <option value='venky'>venky</option>
          <option value='fireInjun'>fireInjun</option>
          <option value='john'>john</option>
          <option value='julie'>julie</option>
          <option value='myke'>myke</option>
        </select>
      </div>
      </>
    )
  }
}
