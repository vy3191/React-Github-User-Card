import React, { Component } from 'react'
import axios from 'axios';
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import Follower from './Follower';

export default class App extends Component {
  constructor() {
    super()
    this.state={
      gitId: 'vy3191',
      isSubmitted: false,
      info: {},
      followers: []
    }
  }

  componentDidMount() {
    this.getMyInfo();
    
  }

  componentDidUpdate(prevProps, prevState) {
     if(prevState.isSubmitted != this.state.isSubmitted) {        
        this.getMyInfo();
        this.setState({
           isSubmitted:false,
           gitId:''
           
        })
     }

  }
  getMyInfo = () => {       
       axios.get(`https://api.github.com/users/${this.state.gitId}`)
            .then( response => {
               console.log(response.data);
               this.setState({
                  info:response.data,
                  gitId: ''
               })
            })
            .catch(error => {
               console.log(error)
            })
  }

  getFollowers = () => {
     axios.get(`  https://api.github.com/users/${this.state.gitId}/followers`)
          .then( response => {
             console.log(response.data);
             this.state({
                followers: response.data
             })
          })
          .catch(error => {
             console.log(error);
          })
  }
  handleInputChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
  }
  handleSubmit = (event) => {
    event.preventDefault();
     this.setState({
        isSubmitted:true,        
     })

  }
  render() {
    return (
      <>
      <div>
        <h3 style={{textAlign:'center', color:'red'}}>User-Card-Project</h3>
        <div className='form-input' style={{textAlign:'center', margin:'30px auto'}}>
          <Form onSubmit={this.handleSubmit} style={{textAlign:'center', margin:'30px auto', padding: '0px 220px'}}>
            <Row>
              <Col>
                <Form.Control placeholder="Enter Github User Name" 
                              name='gitId'
                              value={this.state.gitId} onChange={this.handleInputChange} />
              </Col>              
                <Button type='submit' style={{width: '300px'}}>Search</Button>              
            </Row>
          </Form>
        </div>
        <div style={{margin: '0px auto', display:'flex', justifyContent:'center'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" width={220} height={220} src={this.state.info.avatar_url} />
            <Card.Body>
              <Card.Title>{this.state.info.name}</Card.Title>
              <Card.Text>
                <div style={{display:'inline-block'}}>Followers:</div>{this.state.info.followers}{" "}
                <div style={{display:'inline-block'}}>Followers:</div>{this.state.info.following}
              </Card.Text>
              <a style={{background:'rgba(0,0,0,0.65)', color:'white', textDecoration:'none', padding: '10px 12px'}}
                href={this.state.info.html_url}  target="_blank">Link To Github</a>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        {this.state.followers.map( (follower,index) => <Follower />)}
      </div>
      </>
    )
  }
}
