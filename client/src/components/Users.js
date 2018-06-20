import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../reducers/users_custom'
  
//axios call to get users 
//dispatch action to get users and put it in redux store 
//map state to props to get users from redux 
//map over props to list out users 
//link_to their posts 
//put a route for this in app.js 

class Users extends React.Component {

componentDidMount() {
    this.props.dispatch(getUsers)
}

users = () => {
    return this.props.users.map( user => 
    <ul>
        <li><Link to="api/users(id)/posts" >user.name user.nickname</Link></li>

    </ul>
    )
}   

render () {
    return(
        <div></div>
    )
}


}
    const mapStateToProps = (state) => {
        return { users: state.users }
    }

export default connect(mapStateToProps)(Users) 

