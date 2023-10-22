import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import "./TransactionDetails.css"
// const API = import.meta.env.VITE_BASE_URL
// const API = process.env.VITE_BASE_URL
const API = "https://budget-server-9diy.onrender.com/"

function TransactionDetails() {
  const [transaction, setTransaction] = useState([])
  let navigate = useNavigate()
  let { index } = useParams()

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then(response => response.json())
    .then(transaction => {
      //console.log(transaction)
      setTransaction(transaction)
      //test
      //navigate(`/transactions/${index}`)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = {"method" : "DELETE"}
    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((res) => {
        //console.log(res)
        //alert("hey - transaction was deleted!  Way to GO!");
        navigate('/transactions');
      })
      .catch((err) => console.error(err))
  }

  return (
    <article className="top">

        <table className="table">
            <tbody>
            <tr>
            <td> Description: {transaction.item_name}</td>
            </tr>
            <tr>
            <td>Amount: {transaction.amount}  </td>
            </tr>
            <tr>
            <td>Date: {transaction.date}</td>
            </tr>
            <tr>
            <td>From: {transaction.from}</td>
            </tr>
            <tr>
            <td>Category: {transaction.category}</td>
            </tr>
            <tr>
            <td>Deposit/Widthdraw: {transaction.inOrOut?"Deposit":"Widthdraw"}</td>
            </tr>
            </tbody>
        </table>


      <div className="showNavigation">
        <div>
          
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          
          <Link to={`/transactions`}>
          <button onClick={handleDelete}>Delete</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails
