import "./App.css";
import React from "react";
import userService from "./utils/userService";
import requestService from './utils/requestService'
import { Link } from "react-router-dom";
import UserType from "./pages/UserType/UserType";
import { Route } from "react-router-dom";
import { Layout, Alert } from "antd";
import Nav from "./pages/Nav/Nav";
import SignUp from './components/auth/SignUp/SignUp'
import Login from './components/auth/Login/Login'
import banner from './media/home-banner.png'
import ConfirmPickup from './pages/UserType/Consumer/ConfirmPickup/ConfirmPickup'

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      message: null,
      pickupDetail: ""
    };
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({user:null})
  }

  updateMessage = (msg) => {
    this.setState({message: msg})
  }

  removeMessage = () => {
    this.setState({message: ""})
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <Link id="logo-link" to="/"><code>cargo.io</code></Link>
            </div>
            <Nav user={this.state.user} handleLogout={this.handleLogout} removeMessage={this.removeMessage}/>
          </Header>
          <Content style={{margin: '0 auto', padding: '50px' }}>
            {this.state.message ? <Alert type="success" message={this.state.message} banner /> : null}
          <Route
              exact
              path="/"
              render={({ history }) => (
                <div className="main">
                  <img src={banner} />
                  <br />
                  <br />
                  <h1>The cargo.io Solution</h1>
                  <p>This app is designed to connect freight vehicle owners to everyday users for delivery of common items. Let's say you're browsing Kijiji and find a great deal on an antique table but have no way to transport it to your location. Cargo.io provides you with a seamless process of finding an appropriate vehicle to pickup and deliver the product to your desired location at your specified time. Cargo.io eliminates the extra cost of delivery fees and tentative delivery times given by retail stores.</p>
                  </div>
              )}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignUp
                  history={history}
                  updateMessage={this.updateMessage}
                  handleSignup={this.handleSignup}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <Login
                  history={history}
                  updateMessage={this.updateMessage}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route exact path="/request-pickup" render={({ history }) => 
              <UserType user={this.state.user} history={history} />
          }/>
            <Route exact path="/request-pickup/confirm" render={({ history }) => 
              <ConfirmPickup history={history}/>
          }/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>cargo.io ©2021 Created by Hadi</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
