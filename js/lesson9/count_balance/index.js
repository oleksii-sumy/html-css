const getTotalRevenue = transactions => {
let amountArr = transactions.map( element => element.amount);
// console.log(amountArr);
let summaryBalance = amountArr.reduce((sum, amountBalance) =>{ 
  return sum + amountBalance;
});
// console.log(summaryBalance);
   return summaryBalance;
};

// examples
const dayTransactions = [
  { 
    userId: 22, 
    amount: 60, 
    operation: 'sell' 
  },
  { 
    userId: 22, 
    amount: 160, 
    operation: 'buy' 
  },
  { 
    userId: 44, 
    amount: 90, 
    operation: 'sell' 
  },
];
const result = getTotalRevenue(dayTransactions); // ==> 310
