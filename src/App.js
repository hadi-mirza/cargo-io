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

  render() {
    return (
          <div className="App">
      <header className="App-header">
        <p>
          <code>cargo.io</code>
        </p>
      </header>
      <HomePage />
      <Auth handleSignup={this.handleSignup} />
    </div>
    )
  }
}

export default App;
