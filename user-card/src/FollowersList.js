import React from 'react'
import Follower from './Follower';
import {Route} from 'react-router-dom';

function FollowersList(props) {
  console.log(props);
  return (
    <div>
      {props.followers.map( (follower,index) => {          
          return <Follower follower={follower} />
      })}
    </div>
  )
}

export default FollowersList
