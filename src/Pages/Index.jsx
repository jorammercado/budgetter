import Transactions from "../Components/Transactions"
import "./Index.css"

function Index(){
    return (
        <div className="Index">
            <h2 style={{textAlign:'center'}} >Index Page </h2>
            <Transactions />
        </div>
    )
}

export default Index