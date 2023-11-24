

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #e6e8e9",
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "10px 20px",
        borderRight: `5px solid ${
          transaction?.transType === "expense" ? "red" : "green"
        }`,
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <span>{transaction.details}</span>
      <span>Category: {transaction.category}</span>
      <span>₹{transaction.amount}</span>
      <Button
        variant="success"
        onClick={() => removeTransaction(transaction.id)}
        style={{
          backgroundColor: "#44E610",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Remove
      </Button>
    </Card>
  );
};

export default TransactionItem;
