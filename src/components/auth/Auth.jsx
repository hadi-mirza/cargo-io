import React from 'react'
import SignUp from './SignUp/SignUp'
import { Route } from 'react-router-dom';

class Auth extends React.Component {
    constructor() {
        super()
        this.state = {
            message: null
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
      }

    render() {
        return (
            <div>
            <p>This is auth comp</p>
            <Route exact path='/signup' render={({history}) => 
            <SignUp updateMessage={this.updateMessage} handleSignup={this.props.handleSignup} />
            }/>
            </div>
        )
    }
}

export default Auth