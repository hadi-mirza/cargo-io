import React from 'react'
import SignUp from './SignUp/SignUp'
import { Route } from 'react-router-dom';
import Login from './Login/Login'

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: {message: ''}
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
      }

    // handleSignup = () => {
    // this.setState({user: userService.getUser()});
    // }

    // handleLogin = () => {
    //     this.setState({user: userService.getUser()})
    //   }

    render() {
        return (
            <div>
            <Route exact path='/signup' render={({history}) => 
            <SignUp history={history} updateMessage={this.updateMessage} handleSignup={this.props.handleSignup} />
            }/>
            <Route exact path='/login' render={({history}) => 
            <Login history={history} updateMessage={this.updateMessage} handleLogin={this.props.handleLogin} />
            }/>
            </div>
        )
    }
}

export default Auth