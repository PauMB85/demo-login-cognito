import React from 'react';
import { Link } from "react-router-dom";
import  { Navbar, Nav }  from "react-bootstrap";
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar className="position-nav">
        <Nav>
            <Link to="/">Home</Link>
        </Nav>
        <Nav>
            <Link className="login-singup" to="/signup">Signup</Link>
            <Link className="login-singup" to="/login">Login</Link>
        </Nav>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
