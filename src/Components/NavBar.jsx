import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./NavBar.css"
// const API = import.meta.env.VITE_BASE_URL
const API = process.env.VITE_BASE_URL

export default function NavBar() {
  const [transactions, setTransactions] = useState([]);
  const total = transactions.reduce((tot,curr) => {return tot+curr.amount},0 )
  useEffect(()=> {
    fetch(`${API}/transactions`)
    .then((response) => response.json())
    .then( transactions => setTransactions(transactions))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="navbar" > 
    
        {/* <div className="container"> */}
            <nav className="main">
                <h1>
                <Link to="/">Home </Link>
                </h1>
                <h1>
                <Link to="/transactions">Transactions </Link>
                </h1>
                <h1>
                {/* <button> */}
                <Link to="/transactions/new">New Transactions</Link>
                {/* </button> */}
                </h1>
            </nav>
        {/* </div> */}
        
        <div className="name">
        <p>Budget App</p>
        <div>
          <p className="bal" style={{color:`${total>100?"green":total>0?"yellow":"red"}`}} >
           {transactions.reduce((tot,curr) => {return tot+curr.amount},0 )} 
        </p>
        </div>
        </div>
          
        
    </div>
  )
}
