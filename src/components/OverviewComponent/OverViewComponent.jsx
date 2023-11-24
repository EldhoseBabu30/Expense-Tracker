

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Container className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="font-weight-500">
        Balance <span className="font-weight-bold">₹{bal}</span>
      </h2>
      <Button
      
      className={`text-uppercase ${toggle ? "bg-danger" : "bg-success"}`}
      onClick={() => setToggle(!toggle)}
      style={{ color: "white" }}
      >
        {toggle ? "Cancel" : "Add"}
      </Button>
    </Container>
  );
};

export default OverviewComponent;
