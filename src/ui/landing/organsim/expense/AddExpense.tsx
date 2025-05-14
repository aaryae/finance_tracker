import React, { useState } from "react";

const AddExpense= () => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Expense added:", { amount, source });
    // Reset
    setAmount("");
    setSource("");
    setShowForm(false);
  };

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">Manage Expenditure</h2>
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-200"
        >
          {showForm ? "Cancel" : "Add Expense"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
               <div>
            <label className="text-white block mb-1">Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
              required
            />
          </div>
       
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl w-full"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddExpense;
