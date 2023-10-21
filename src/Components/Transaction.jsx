import { Link } from "react-router-dom";
import "./Transaction.css"

function Transaction({ transaction, index }) {
  return (
    
    <tr  >
        <td>
        {transaction.date} 
        </td>
        <td className="link">
            <Link to={`/transactions/${index}`}> {transaction.item_name} </Link>
      </td>
      <td>
      {transaction.amount} 
      </td>
      
    </tr>

    
  );
}

export default Transaction;
