
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function SignIn() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.id]: e.target.value,
    });
    console.log(FormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        const result = await response.json();
        const token = result.access;
        localStorage.setItem("token", token);
        window.alert("Signed in successfully!");
        navigate("/home");
      } else {
        const errorData = await response.json();
        console.error("Error Data:", errorData);
        setError("Login failed");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 rounded-lg shadow-lg" style={{ background: "linear-gradient(to right, #F5F7F8, #F5F7F8)" }}>
            <h1 className="text-center mb-4">Please Login!</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Email" id="email" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} />
              </Form.Group>
              {error && <p className="text-danger text-center mb-3">{error}</p>}
              <Button variant="success" type="submit" className="w-100">
                Sign In
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p className="text-gray-600">Don't have an account?</p>
              <Link to="/sign-up" className="text-black-500 hover:text-blue-500 hover:underline">
                Register here
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
