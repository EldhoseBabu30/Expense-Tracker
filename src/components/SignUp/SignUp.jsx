
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux"; 
import { setUser } from "../Redux/User/UserSlice";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        const token = result.token;
        localStorage.setItem("token", token);
        dispatch(setUser({ username: formData.username, token }));
        window.alert("Signed up successfully!");
        navigate("/");
      } else {
        setError("Sign Up failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 rounded-lg shadow-lg" style={{ background: "linear-gradient(to right, #F5F7F8, #F5F7F8)" }}>
            <h1 className="text-center mb-4">Sign Up!</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="User Name" id="username" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Email" id="email" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} />
              </Form.Group>
              {error && <p className="text-danger text-center mb-3">{error}</p>}
              <Button variant="success" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p className="text-gray-600">Already have an account?</p>
              <Link to="/" className="text-black-500 hover:text-blue-500 hover:underline">
                Login here
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
