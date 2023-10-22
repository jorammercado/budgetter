import { useState } from "react"
//import { Link, useParams, useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./TransactionNewForm.css"
const API = import.meta.env.VITE_BASE_URL

function TransactionNewForm() {
  const navigate = useNavigate()
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    inOrOut: true
  })

  const handleTextChange = (event) => {
    if(event.target.id !== "amount"){
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    }
    else{
        setTransaction({ ...transaction, [event.target.id]: Number(event.target.value) })
    }
  }

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, inOrOut: !transaction.inOrOut })
  }

  const addTransaction = () => {
    const httpOptions = {
      "method" : "POST",
      "body" : JSON.stringify(transaction),
      "headers" : {
        "Content-type" : "application/json"
      }
    }
    fetch(`${API}/transactions`, httpOptions)
      .then((res) => {
        const index = res.url.split("/")[res.url.split("/").length-1]
        //console.log(index)
        //alert(`${transaction.item_name} was added to the database!`);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (event) => {
    // this prevents the PAGE from RELOADING;
    event.preventDefault();
    addTransaction();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label className="name" htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="name of transaction"
          required
        />
        <br></br>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          placeholder="date"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          placeholder="category"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          placeholder="source of transaction"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          placeholder="#"
          onChange={handleTextChange}
        />
        <br></br>
        <label id="check" htmlFor="inOrOut">Deposit/Widthdraw:</label>
        <input
          id="inOrOut"
          type="checkbox"
          checked={transaction.inOrOut}
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
          <Link to={`/transactions`}>
            <button>Cancel</button>
          </Link>
      </div>
    </div>
  )
}

export default TransactionNewForm
