import logo from './logo.svg';
import './App.css';
import React from 'react'
import Login from './components/auth/Login/Login'
import SignUp from './components/auth/SignUp/SignUp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }
  render() {
    return (
          <div className="App">
      <header className="App-header">
        <p>
          <code>cargo.io</code>
        </p>
      </header>
      <Login />
      <SignUp />
    </div>
    )
  }
}

export default App;
