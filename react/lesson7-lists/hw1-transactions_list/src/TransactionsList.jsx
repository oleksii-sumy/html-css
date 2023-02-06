import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    let transactionItem = this.props.transactions;
    return (
      <ul className="transactions">
        {transactionItem.slice().map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  }
}


export default TransactionsList;
