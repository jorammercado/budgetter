import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navbar" > 
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
