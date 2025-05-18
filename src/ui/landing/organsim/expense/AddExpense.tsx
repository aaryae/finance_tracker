import React, { useState } from "react";
import axios from "axios";

interface AddExpenseProps {
  onExpenseAdded: () => void;
}

const AddExpense = ({ onExpenseAdded }:AddExpenseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const receiverId = localStorage.getItem("userId");
    const token = localStorage.getItem("accessToken");

    if (!receiverId || !token) {
      setMessage("Missing token or receiver ID.");
      return;
    }

    const expenseData = {
      amount: parseFloat(amount),
      remark: remark.trim(),
    };

    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:8080/api/user/addExpenses/${receiverId}`,
        expenseData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Expense added:", res.data);
      setMessage("Expense added successfully!");
      setAmount("");
      setRemark("");
      setShowForm(false);

      onExpenseAdded(); // ✅ Refresh parent table
    } catch (err) {
      console.error("Error adding expense:", err);
      setMessage("Failed to add expense.");
    } finally {
      setLoading(false);
    }
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
            <label className="text-white block mb-1">Remark</label>
            <input
              type="text"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

      {message && (
        <p className="text-sm text-center mt-3 text-white">{message}</p>
      )}
    </div>
  );
};

export default AddExpense;
