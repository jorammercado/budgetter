import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import "./TransactionEditForm.css"
const API = import.meta.env.VITE_BASE_URL
//// const API = process.env.VITE_BASE_URL


function TransactionEditForm() {
  let { index } = useParams()
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

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then(response => response.json())
      .then(transaction => {
        //console.log(transaction)
        setTransaction(transaction)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const updateTransaction = () => {
    const httpOptions = {
      "method" : "PUT",
      "body" : JSON.stringify(transaction),
      "headers" : {
        "Content-type" : "application/json"
      }
    }

      fetch(`${API}/transactions/${index}`, httpOptions)
        .then(() => { 
          alert(`${transaction.item_name} has been updated!`);
          navigate(`/transactions/${index}`)
        })
        .catch((err) => console.error(err))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  }
  return (
    <div className="Edit">
      
      <form onSubmit={handleSubmit}>
        <label className="name" htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder={transaction.item_name}
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

      <br></br>
      <Link to={`/transactions/${index}`}>
        <button>Cancel</button>
      </Link>
      <Link to={`/transactions`}>
        <button>View All</button>
      </Link>
      
    </div>
  )
}

export default TransactionEditForm
