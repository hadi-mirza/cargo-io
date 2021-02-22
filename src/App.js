import './App.css';
import React from 'react'
import HomePage from './pages/Home/HomePage.jsx'
import userService from './utils/userService';
import Auth from './components/auth/Auth'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
    }

  handleLogin = () => {
      this.setState({user: userService.getUser()})
    }

  render() {
    return (
          <div className="App">
      <header className="App-header">
        <p>
          <code>cargo.io</code>
        </p>
      </header>
      <HomePage user={this.state.user}/>
      <Auth handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
    </div>
    )
  }
}

export default App;
