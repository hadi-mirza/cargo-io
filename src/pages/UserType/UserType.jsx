import React from 'react'

function UserType(props) {
    let userType = props.userType === 'consumer' ?
    <div>
        <h2>consumer</h2>
    </div>
    :
    <div>
        <h2>driver</h2>
    </div>;

    return (
        <div>
            {userType}
        </div>
    )
}

export default UserType
