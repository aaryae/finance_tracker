import axios from "axios";
import React, { useState } from "react";

interface AddIncomeProps {
  onIncomeAdded: () => void;
}

const AddIncome = ({ onIncomeAdded }:AddIncomeProps) => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setMessage("User ID not found.");
      return;
    }

    const incomeData = {
      amount: parseFloat(amount),
      source: source.trim(),
      remark: remark.trim(),
    };

    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      const res = await axios.post(
        `http://localhost:9090/api/user/addIncome/${userId}`,
        incomeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);
      setMessage("Income added successfully!");
      setAmount("");
      setSource("");
      setRemark("");
      setShowForm(false);

      onIncomeAdded(); // ✅ Notify parent to refresh data
    } catch (error: any) {
      console.error(error);
      setMessage("Failed to add income. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">Manage Income</h2>
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-200"
        >
          {showForm ? "Cancel" : "Add Income"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-white block mb-1">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
              required
            />
          </div>

        

          <div>
            <label className="text-white block mb-1">Remark</label>
            <input
              type="text"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none"
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

export default AddIncome;
