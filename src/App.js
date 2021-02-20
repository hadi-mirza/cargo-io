import './App.css';
import React from 'react'
import Login from './components/auth/Login/Login'
import SignUp from './components/auth/SignUp/SignUp'
import { Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx'

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
      {/* <Login />
      <SignUp /> */}
      <HomePage />
      <Route exact path='/signup' render={({ history }) => 
            <SignUp
              history={history}
              handleSignup={this.handleSignup}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <Login
              history={history}
              handleLogin={this.handleLogin}
            />
          }/>
    </div>
    )
  }
}

export default App;
