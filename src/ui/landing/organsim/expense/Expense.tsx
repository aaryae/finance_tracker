import axios from "axios";
import { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseGraph from "./ExpenseGraph";
import ExpenseTable from "./ExpenseTable";

interface ExpenseEntry {
  id: number;
  remark: string;
  amount: number;
  receiverId: number;
}

const Expense = () => {
  const [expenseData, setExpenseData] = useState<ExpenseEntry[]>([]);
  const receiverId = localStorage.getItem('userId');
  const token = localStorage.getItem("accessToken");

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/expenses/getAllExpenses/${receiverId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setExpenseData(res.data);
    } catch (err) {
      console.error("Failed to fetch expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [receiverId]);

  const handleEdit = (entry: ExpenseEntry) => {
    console.log("Edit clicked:", entry);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.get(`http://localhost:8080/api/expenses/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchExpenses(); // ✅ refresh on delete
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4">
      <AddExpense onExpenseAdded={fetchExpenses} /> {/* ✅ pass callback */}
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2 text-3xl py-4 tracking-wide uppercase text-white text-center">
          Chart showing Expenditure
        </h1>
        <ExpenseGraph data={expenseData} />
      </div>
      <br />
      <ExpenseTable data={expenseData} onDelete={handleDelete} />
    </div>
  );
};

export default Expense;
