import React from 'react'

function Profile(props) {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Username: {props.user.name}</p>
            <p>Email: {props.user.email}</p>
            <p>Registered as a {props.user.userType}</p>
        </div>
    )
}

export default Profile
