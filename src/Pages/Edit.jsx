import TransactionEditForm from "../Components/TransactionEditForm"
import "./Edit.css"

function Edit(){
    return (
        <div className="Edit" >
            <h2> Edit Transaction </h2>
            <br></br>
            <h3> <TransactionEditForm /></h3>
        </div>
    )
}

export default Edit