import { useEffect, useState } from "react";
import axios from "axios";
import Example from "../Income/Example";
import ExpenseTable from "./ExpenseTable";
import AddExpense from "./AddExpense";

interface ExpenseEntry {
  id: number;
  remark: string;
  amount: number;
  receiverId: number;
}

const Expense = () => {
  const [expenseData, setExpenseData] = useState<ExpenseEntry[]>([]);
  const receiverId = "2"; // Replace with dynamic ID
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
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

    fetchExpenses();
  }, [receiverId]);

  const handleEdit = (entry: ExpenseEntry) => {
    console.log("Edit clicked:", entry);
    // Add edit modal logic if needed
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.get(`http://localhost:8080/api/expenses/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setExpenseData((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      <AddExpense />
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2 text-3xl py-4 tracking-wide uppercase text-white text-center">
          Chart showing Expenditure
        </h1>
        <Example />
      </div>
      <br />
      <ExpenseTable data={expenseData} onDelete={handleDelete} />
    </div>
  );
};

export default Expense;
