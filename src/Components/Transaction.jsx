import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    
    <tr  >
      <td>
        <Link to={`/transactions/${index}`}> {transaction.item_name} </Link>
      </td>
      <td>
        <h6>In or Out:</h6>
        {transaction.inOrOut ? (
          <span>❎</span>
        ) : (
          <span>✅</span>
          //<span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      
    </tr>

    
  );
}

export default Transaction;
