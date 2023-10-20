import { useEffect, useState } from "react"
import Transaction from "./Transaction";
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
    <div className="Transactions"style={{textAlign:'center'}} >
        <>Total: {transactions.reduce((tot,curr) => {return tot+curr.amount},0 ) }</>
      <section >
        <table >
          <thead >
            <tr >
              <th></th>
              <th >Choose Transaction:</th>
            </tr>
          </thead>
          <tbody >
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
