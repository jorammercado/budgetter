import { useState } from "react"
//import { Link, useParams, useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
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
        setLog({ ...transaction, [event.target.id]: event.target.value })
    }
    else{
        setLog({ ...transaction, [event.target.id]: Number(event.target.value) })
    }
  }

  const handleCheckboxChange = () => {
    setLog({ ...transaction, inOrOut: !transaction.inOrOut })
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
        //console.log(res)
        //alert(`${transaction.item_name} was added to the database!`);
        navigate('/transactions');
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
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder={transaction.item_name}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          placeholder="date"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          placeholder="category"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from"
          value={transaction.from}
          type="text"
          placeholder="favorite quote"
          onChange={handleTextChange}
        />
        <label htmlFor="inOrOut">Money In or Money Out:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          checked={transaction.inOrOut}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="amount">Money Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          placeholder="#"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Delete</button>
          </Link>
      </div>
    </div>
  )
}

export default TransactionNewForm
