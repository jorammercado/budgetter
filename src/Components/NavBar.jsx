import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navbar" > 
        {/* <div className="container"> */}
            <nav className="main">
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
    </div>
  )
}
