import React from 'react'
import SignUp from './SignUp/SignUp'
import { Route } from 'react-router-dom';
import userService from '../../utils/userService'

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

    handleSignup = () => {
    this.setState({user: userService.getUser()});
    }

    render() {
        return (
            <div>
            <p>This is auth component</p>
            <Route exact path='/signup' render={({history}) => 
            <SignUp updateMessage={this.updateMessage} handleSignup={this.handleSignup} />
            }/>
            </div>
        )
    }
}

export default Auth