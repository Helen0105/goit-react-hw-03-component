function TransactionHistory ({transaction = []}) {
console.log(transaction);
return (
    <table className="transaction-history">
  <thead>
    <tr>
       
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
 {transaction.map (({id, type, amount, currency}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

 )

        )}



    {/* <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */}
  </tbody>
</table>
)
}


export default TransactionHistory