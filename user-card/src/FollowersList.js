import React from 'react'
import Follower from './Follower';
import {Route} from 'react-router-dom';

function FollowersList(props) {
  return (
    <div>
      {props.followers.map( (follower,index) => {          
          return <Route key={index} component={Follower} />
      })}
    </div>
  )
}

export default FollowersList
