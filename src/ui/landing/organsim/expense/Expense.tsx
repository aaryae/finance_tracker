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
  const receiverId = "2"; // Replace with dynamic user/receiver ID

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await axios.get(`http://localhost:55538/api/expenses/getAllExpenses/${receiverId}`);
        setExpenseData(res.data);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
      }
    };

    fetchExpenses();
  }, [receiverId]);

  const handleEdit = (entry: ExpenseEntry) => {
    console.log("Edit clicked:", entry);
    // Show edit form/modal
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/expenses/delete/${receiverId}/${id}`);
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
      <ExpenseTable data={expenseData}  onDelete={handleDelete} />
      {/* onEdit={handleEdit} */}
    </div>
  );
};

export default Expense;
