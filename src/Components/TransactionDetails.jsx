import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
const API = "http://localhost:8080"

function TransactionDetails() {
  const [transaction, setTransaction] = useState([])
  let navigate = useNavigate()
  let { index } = useParams()

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then(response => response.json())
    .then(log => {
      //console.log(log)
      setTransaction(transaction)
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
    <article>
      <h3>
         {transaction.item_name}
         {transaction.inOrOut ? (
          <span>❎</span>
        ) : (
          <span>✅</span>
        )}
      </h3>

      <h6>
        amount:  {transaction.amount} - By {transaction.date}
      </h6>
      <p style={{fontStyle:'italic'}}>
        category
        {transaction.category}
      </p>
      <div>
        <p>from:{transaction.inOrOut ? (
          <span>Money comming in!!</span>
        ) : (
          <span>Too many losses.</span>
        )}</p>
        
      </div>


      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails
