import Transactions from "../Components/Transactions"
import "./Index.css"

function Index(){
    return (
        <div className="Index">
            <h1>Current Balance: </h1>
            <Transactions />
        </div>
    )
}

export default Index