import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <p>Home Page</p>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>
    )
}

export default HomePage
