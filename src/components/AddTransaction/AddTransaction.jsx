

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddTransaction = ({ setToggle, AddTransactions }) => {
 const [formData, setFormData] = useState({})
  

 const handleChange = (e) => {
  setFormData({
    ...FormData,
    [e.target.id]: e.target.value,
  });
  console.log(formData)

  if (e.target.type === "radio") {
    
    setFormData({
      ...formData,
      transType: e.target.value,
    });
  } else {
    
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  console.log(FormData);
};


const AddTransactionData = () => {
  AddTransactions({
    amount: Number(formData.amount),
    details: formData.details,
    transType: formData.transType,
    category: formData.category,
    id: Date.now(),
  });
  setToggle();
};
  return (
    <Container>
      <Form onSubmit={AddTransactionData}>
      <Form.Group as={Row} controlId="formAmount">
  <Form.Label column sm="2">
    Enter Amount
  </Form.Label>
  <Col sm="10">
    <Form.Control
      id="amount"
      type="number"
      placeholder="Enter Amount"
      value={formData.amount}
      onChange={handleChange}
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formCategory">
  <Form.Label column sm="2">
    Select Category
  </Form.Label>
  <Col sm="10">
    <div className="input-group">
      <Form.Control
        id="category"
        as="select"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select...</option>
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
       
      </Form.Control>
    </div>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formDetails">
  <Form.Label column sm="2">
    Enter Details
  </Form.Label>
  <Col sm="10">
    <Form.Control
      id="details"
      type="text"
      placeholder="Name"
      value={formData.details}
      onChange={handleChange}
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
      checked={formData.transType === "expense"}
      onChange={handleChange}
    />
    <Form.Check
      type="radio"
      id="income"
      label="Budget"
      value="income"
      checked={formData.transType === "income"}
      onChange={handleChange}
    />
  </Col>
</Form.Group>


        <Button
          variant="success"
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
