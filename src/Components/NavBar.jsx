import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div style={{textAlign:'center'}}> 
      <nav>
        <h1>
          <Link to="/transactions">Transactions </Link>
        </h1>
        <button>
          <Link to="/transactions/new">New Transactions</Link>
        </button>
      </nav>
    </div>
  )
}
