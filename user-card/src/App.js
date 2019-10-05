import React, { Component } from 'react'
import axios from 'axios';

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

      </div>
    )
  }
}
