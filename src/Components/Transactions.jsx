import { useEffect, useState } from "react"
import Transaction from "./Transaction";
import "./Transactions.css"
const API = import.meta.env.VITE_BASE_URL

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(()=> {
    fetch(`${API}/transactions`)
    .then((response) => response.json())
    .then( transactions => setTransactions(transactions))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="Transactions" >
        <h2 className="balance">
         {transactions.reduce((tot,curr) => {return tot+curr.amount},0 ) }
        </h2>
      {/* <section > */}
        <table className="table" >
          
            <tr >
              <th >Date</th>
              <th >Description</th>
              <th >Amount</th>
            </tr>
          
          <tbody >
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      {/* </section> */}
    </div>
  );
}

export default Transactions;
