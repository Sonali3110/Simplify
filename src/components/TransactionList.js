import React from "react";
import Transaction from "./Transaction";

const containerStyle = {
  width: '50%',
  height: 400,
  overflow: 'auto',
  boxShadow: '0 0 0 1px #40a9ff',
  margin:"10px",
  padding:"10px"
};
const style = {
  width: '100%',
  height: 1000,
};

export default function TransactionList({ transactions }) {

  return (
    <>
     <div style={containerStyle}>
      <div style={style}>
  
      <h2 style={{ marginBottom:"10px", color:"black", textAlign:"center", backgroundColor:"white"}}>All Expenses</h2>
      <ul className="new-transaction-list">
     <Transaction transaction={transactions} />
    
          

          
{/* get items array here.iterate through it and sum it and display. no need to create action. */}
        
      </ul>
      </div>
    </div>

    </>

  );
}
