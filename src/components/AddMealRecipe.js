import React from "react";

function AddMealRecipe({ handleChange, handleSubmit}) {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <input
              onChange={handleChange}
              type="date"
              name="date"
              value={transactionForm.date}
            />
            <input
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Description"
              value={transactionForm.description}
            />
            <input
              onChange={handleChange}
              type="text"
              name="category"
              placeholder="Category"
              value={transactionForm.category}
            />
            <input
              onChange={handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={transactionForm.amount}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
  
  export default AddMealRecipe;