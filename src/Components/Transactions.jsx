import { useEffect, useState } from "react"
import React from 'react'
import Transaction from "./Transaction";
import "./Transactions.css"
const API = import.meta.env.VITE_BASE_URL

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const total = transactions.reduce((tot,curr) => {return tot+curr.amount},0 )
  useEffect(()=> {
    fetch(`${API}/transactions`)
    .then((response) => response.json())
    .then( transactions => setTransactions(transactions))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="Transactions" >
        <h2 className="balance" id="balance" style={{color:`${total>100?"green":total>0?"yellow":"red"}`}}>
         {transactions.reduce((tot,curr) => {return tot+curr.amount},0 )}
        </h2>
      {/* <section > */}
        <table className="table" >
          <tbody >
            <tr >
              <th >Date</th>
              <th >Description</th>
              <th >Amount</th>
            </tr>
          </tbody>
          <tbody >
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      {/* </section> */}
      <script>
document.getElementById("balance").style.color = "blue";
document.getElementById("balance").style.fontFamily = "Arial";
document.getElementById("balance").style.fontSize = "larger";
</script>
    </div>
  );
}

export default Transactions;
