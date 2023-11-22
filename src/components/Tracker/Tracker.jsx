import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import OverviewComponent from "../OverviewComponent/OverViewCOmponent";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionsContainer from "../TransactionContainer/TransactionContainer";

const THeading = {
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
  color: "#44E610",
};

const ExpenseBox = {
  flex: 1,
  border: "1px solid #000",
  borderRadius: "5px",
  padding: "10px 20px",
  backgroundColor: "#fff",
};

const IncomeBox = {
  ...ExpenseBox,
};

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [trackerVisible, setTrackerVisible] = useState(true);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((item) => {
      item.transType === "expense"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <Container
      style={{
        display: trackerVisible ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        width: "600px",
        maxWidth: "100%",
        backgroundColor: "#fff",
        padding: "40px 20px",
        border: "1px solid #000",
        borderRadius: "5px",
        margin: "100px auto 40px", // Center horizontally
      }}
    >
      <h1 style={THeading}>Expense Tracker</h1>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />
      {toggle && (
        <AddTransaction setToggle={setToggle} AddTransactions={AddTransactions} />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginBottom: "25px",
          width: "100%", // Full width
        }}
      >
        <div style={ExpenseBox}>
          <span style={{ fontWeight: "bold", fontSize: "25px", color: "red" }}>
            Expense ₹{expense}
          </span>
        </div>
        <div style={{ ...IncomeBox, marginLeft: "20px" }}>
          <span style={{ fontWeight: "bold", fontSize: "25px", color: "green" }}>
            Budget ₹{income}
          </span>
        </div>
      </div>
      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
      <button onClick={() => setTrackerVisible(false)}>Hide Tracker</button>
    </Container>
  );
};

export default Tracker;
