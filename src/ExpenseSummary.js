import React from 'react';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="expense-summary">
      <h2>Total Spent: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default ExpenseSummary;
