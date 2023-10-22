import TransactionNewForm from "../Components/TransactionNewForm"
import "./New.css"

function New(){
    return (
        <div className="New" >
            <h2> New Transaction </h2>
            <br></br>
            <h3><TransactionNewForm /> </h3>
        </div>
    )
}

export default New