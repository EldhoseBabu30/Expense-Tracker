import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import UserDetails from '../UserDetails/UserDetails';

function Header() {
  const location = useLocation();

 
  const isSignInOrSignUpOrLogin = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/';

  return (
   
    !isSignInOrSignUpOrLogin && (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/landing-page">Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <UserDetails />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default Header;
