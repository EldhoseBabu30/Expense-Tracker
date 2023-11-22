// FileName: TransactionsContainer.js

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filteredData = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    let filtered = [...filteredTransactions];
    filtered = filtered.filter(
      (item) =>
        item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filteredData(searchInput);
  }, [transactions, searchInput]);

  return (
    <Container>
      <h2 style={{ fontSize: "25px", fontWeight: "600" }}>Transactions</h2>

      <Form.Control
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          width: "100%",
          padding: "15px 20px",
          borderRadius: "5px",
          margin: "5px 0",
          border: "1px solid #e6e8e9",
          backgroundColor: "#e6e8e9",
          marginBottom: "25px",
        }}
      />

      <div>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </div>
    </Container>
  );
};

export default TransactionsContainer;
