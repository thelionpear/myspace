import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { getUsers } from '../reducers/users_custom'
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import SpecificUserPosts from './SpecificUserPosts' 
  
//axios call to get users 
//dispatch action to get users and put it in redux store 
//map state to props to get users from redux 
//map over props to list out users 
//link_to their posts 
//put a route for this in app.js 

class Users extends React.Component {
 state = { users: [] }

 
componentDidMount() {
    // this.props.dispatch(getUsers())
    //put this in a user reducer and build an axios call there so it will in redux
    
    axios.get('/api/users')
      .then( res => this.setState({ users: res.data }) )
}
//down in my Link to, I want to load a new component on a separate page. 
//so I don't need to pass posts to it. I can set that state when I get there.
//but I need the appropriate route which is to the index of all posts.
//In my controller I need this url to go to the index funciton and grab
//all of the posts for that specific user
//if it's a specific user, I need to give it a specific ID 
//when I went to look at the routes just now, there wasn't one for 
//a user's specific posts. That means I haven't given the user the posts in my router?
//no, it turns out it means I need to make a custom route 
//what I really want to route them to is a page that
  render() {
      let { users } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Users</Header>
          <Card.Group itemsPerRow={4}>
          { this.state.users.map( user =>
            <Card key={user.id}>
            {/* <Image src={user.image} /> */}
            <Card.Content>
             <Card.Header>
                {user.name}
            </Card.Header>
            <Card.Description>
                {user.email}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                 <Link to={`./SpecificUserPosts`}>
                View User
                </Link>
            </Card.Content>
            </Card>
          )}
            </Card.Group>
        }
            </Container>
        )
    }
} 

export default connect()(Users); 


