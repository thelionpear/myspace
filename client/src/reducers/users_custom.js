import React from 'react';
import axios from 'axios';
//mine. Delete if problems. 
export const getUsers = () => {
    debugger
    return dispatch => {
        axios.get('/api/users')
          .then( res => {
              debugger
              dispatch({ type: 'USERS', users: res.data }) 
        })
        .catch( err => {
            debugger
            console.log(err)
        })

  }
  }
  

export default (state = {}, action) => {
    switch (action.type) {
        case 'USERS':
      return action.users;
      default:
      return state;
    }
  };