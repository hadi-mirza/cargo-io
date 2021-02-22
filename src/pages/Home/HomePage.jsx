import React from 'react'
import { Link } from 'react-router-dom';
import UserType from '../UserType/UserType'

function HomePage(props) {
    let nav = props.user ?
    <div>
        <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        <br />
        <UserType userType={props.user.userType}/>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default HomePage
