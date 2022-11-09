export const withdraw = (clients, balances, client, amount) => {
  return balances[clients.indexOf(client)] < amount
    ? -1
    : balances[clients.indexOf(client)] - amount;
};

// example 1

// input
withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

