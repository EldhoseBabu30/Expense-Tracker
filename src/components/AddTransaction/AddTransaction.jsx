// FileName: AddTransaction.js

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const AddTransactionData = () => {
    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });
    setToggle();
  };

  return (
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formAmount">
          <Form.Label column sm="2">
            Enter Amount
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group    oup as={Row} controlId="formDetails">
          <Form.Label column sm="2">
            Enter Details
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formTransType">
          <Form.Label as="legend" column sm="2">
            Transaction Type
          </Form.Label>
          <Col sm="10">
            <Form.Check
              type="radio"
              id="expense"
              label="Expense"
              value="expense"
              checked={transType === "expense"}
              onChange={(e) => setTransType(e.target.value)}
            />
            <Form.Check
              type="radio"
              id="income"
              label="Budget"
              value="income"
              checked={transType === "income"}
              onChange={(e) => setTransType(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button
          variant="success"
          onClick={AddTransactionData}
          className="text-uppercase my-2"
          style={{
            backgroundColor: "#28a745", // Green color
            borderColor: "#28a745", // Border color
            color: "white", // Text color
          }}
        >
          Add Transaction
        </Button>
      </Form>
    </Container>
  );
};

export default AddTransaction;
