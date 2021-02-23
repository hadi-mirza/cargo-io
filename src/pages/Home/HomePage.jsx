import React from 'react'
import { Link } from 'react-router-dom';
import UserType from '../UserType/UserType'
import { Route } from 'react-router-dom';

function HomePage(props) {
    let home = props.user ?
    <div>
        <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        <br />
        <Link to='/request-pickup' className='NavBar-link'>Request a Pick Up</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signout' className='NavBar-link'>Sign Out</Link>

        {/* <Route exact path='/profile' render={({history}) => 
            <UserType userType={props.user.userType}/>
            }/> */}

        <Route exact path='/request-pickup' render={({history}) => 
            <UserType userType={props.user.userType}/>
            }/>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {home}
    </div>
  );
};

export default HomePage
