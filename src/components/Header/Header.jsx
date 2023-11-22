import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Check if the current route is '/sign-in', '/sign-up', or '/'
  const isSignInOrSignUpOrLogin = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/';

  return (
    // Render the navbar only if the route is not '/sign-in', '/sign-up', or '/'
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
              <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default Header;
