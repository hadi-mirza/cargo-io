import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Nav(props) {
    let nav = props.user ?
    <div>
        <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1"><Link to='/request-pickup' onClick={props.removeMessage}>Request Pickup</Link></Menu.Item>
        <Menu.Item key="2"><Link to='#' onClick={props.removeMessage}>{props.user.name}'s Profile</Link></Menu.Item>
        <Menu.Item key="3" id="profile" onClick={props.removeMessage}><Link to="" onClick={props.handleLogout}>Logout</Link></Menu.Item>
        </Menu>
    </div>
    :
    <div>
    <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to='/login'>Log In</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/signup'>Sign Up</Link></Menu.Item>
        </Menu>
    </div>;

  return (
    <React.Fragment>
      {nav}
      </React.Fragment>
  );
};

export default Nav
