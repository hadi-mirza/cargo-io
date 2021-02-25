import React from 'react'
import Consumer from './Consumer/Consumer'
// import Driver from './Driver/Driver'

function UserType(props) {
    let userType = props.user.userType === 'consumer' ?
    <div>
        <Consumer history={props.history}/>
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
