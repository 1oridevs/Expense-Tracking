import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 && <p>No expenses yet!</p>}
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div>
            <p>{expense.description}</p>
            <p className="category-label">{expense.category}</p>
          </div>
          <div>
            <p>${expense.amount.toFixed(2)}</p>
            <p>{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
