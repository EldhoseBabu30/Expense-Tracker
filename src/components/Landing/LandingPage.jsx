import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="mt-5">
      <div className="bg-light p-5 rounded">
        <h1>Welcome to Expense Tracker</h1>
        <p>
          Keep track of your expenses and manage your budget effortlessly.
        </p>
        <p>
          <Link to="/sign-up">
            <Button variant="primary" className="mr-2">
              Sign Up
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="outline-primary">Sign In</Button>
          </Link>
        </p>
      </div>

      <section className="py-5">
        <h2>Key Features</h2>
        <ul>
          <li>Track your expenses in one place</li>
          <li>Set budgets and financial goals</li>
          <li>Visualize your spending patterns</li>
          <li>Secure and user-friendly</li>
        </ul>
      </section>

      <section className="py-5">
        <h2>How It Works</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
    </Container>
  );
};

export default LandingPage;
