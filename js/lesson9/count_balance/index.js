const getTotalRevenue = transactions => {
let res = transactions.map( element => Object.entries(transactions[0]));
console.log(res);
console.log(res[0].flat());

 

  return;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
