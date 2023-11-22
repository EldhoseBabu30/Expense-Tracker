import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";


export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
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
        window.alert("Signed in successfully!");
        navigate("/home");
      } else {
        const errorData = await response.json(); 
        console.error(errorData);  
        setError("Login failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center h-full mt-24">
      <div
        className="p-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto rounded-lg shadow-lg"
        style={{
          background: "linear-gradient(to right, #F5F7F8, #F5F7F8)",
        }}
      >
      <h1 className="text-3xl text-black text-center font-semibold my-7">
        Please Login!
      </h1>
      <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Form.Control
          type="text"
          placeholder="Email"
          id="username"
          onChange={handleChange}
          className="p-3 rounded-md"
        />
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="p-3 rounded-md"
        />
        {error && (
            <p className="text-red-500 text-center my-2">{error}</p>
          )}
        <Button
          variant="success"
          className="w-full p-3 rounded-full uppercase bg-green-500 hover:bg-green-600 transition-all duration-300"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <div className="text-center mt-4">
        <p className="text-gray-600">Don't have an account?</p>
        <Link to="/sign-up" className="text-black-500 hover:text-blue-500 hover:underline">
          Register here
        </Link>
      </div>
      </div>
    </div>
  );
}