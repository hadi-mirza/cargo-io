import React from 'react'
import Consumer from './Consumer/Consumer'
// import Driver from './Driver/Driver'
import { Link } from 'react-router-dom';

function UserType(props) {
    let userType = props.userType === 'consumer' ?
    <div>
        <Consumer />
    </div>
    :
    <div>
        {/* <Driver /> */}
    </div>;

    return (
        <div>
            {userType}
        </div>
    )
}

export default UserType
