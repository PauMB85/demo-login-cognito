import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import  { Navbar, Nav }  from "react-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import Routes from "./Routes";
import './App.css';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    history.push("/login");
  }

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar className="position-nav">
        <Nav>
            <Link to="/">Home</Link>
        </Nav>
        {
          isAuthenticated ?
          <Nav>
            <Link to="#" onClick={handleLogout}>Logout</Link>
          </Nav>
          :
          <Nav>
            <Link className="login-singup" to="/signup">Signup</Link>
            <Link className="login-singup" to="/login">Login</Link>
          </Nav>
        }
        
      </Navbar>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
