import axios from "axios";
import { useEffect, useState } from "react";
import AddIncome from "./AddIncome";
import Example from "./IncomeGraph";
import IncomeTable from "./IncomeTable";
import { IncomeEntry } from "@type/income.type";

const Income = () => {
  const [incomeData, setIncomeData] = useState<IncomeEntry[]>([]);
  const [editing, setEditing] = useState<IncomeEntry | null>(null);
  const [editRemark, setEditRemark] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const userId = "2"; // Replace with dynamic user if needed
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/income/getAllIncome/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIncomeData(res.data);
      } catch (err) {
        console.error("Failed to fetch income data:", err);
      }
    };

    fetchIncome();
  }, [userId, token]);

  const handleEdit = (entry: IncomeEntry) => {
    setEditing(entry);
    setEditRemark(entry.remark);
    setEditAmount(entry.amount.toString());
  };

  const handleUpdate = async () => {
    if (!editing) return;

    try {
      await axios.post(
        `http://localhost:8080/api/income/update/${editing.id}`, 
        {
          remark: editRemark,
          amount: parseFloat(editAmount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update UI state
      setIncomeData((prev) =>
        prev.map((e) =>
          e.id === editing.id
            ? { ...e, remark: editRemark, amount: parseFloat(editAmount) }
            : e
        )
      );

      setEditing(null);
      setEditRemark("");
      setEditAmount("");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.get(`http://localhost:8080/api/income/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIncomeData((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      <AddIncome />
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2 text-3xl py-4 tracking-wide uppercase text-white text-center">
          Chart showing Income
        </h1>
<Example data={incomeData} />
      </div>
      <br />
      <IncomeTable
        data={incomeData}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* Edit Modal */}
      {editing && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#000000a2] bg-opacity-60 z-50">
          <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-xl w-96 text-white">
            <h2 className="text-xl font-semibold mb-4">Edit Income</h2>
            <label className="block mb-2">Remark</label>
            <input
              className="w-full px-3 py-2 mb-4 rounded bg-[#2e2e2e] border border-gray-600"
              value={editRemark}
              onChange={(e) => setEditRemark(e.target.value)}
            />
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              className="w-full px-3 py-2 mb-4 rounded bg-[#2e2e2e] border border-gray-600"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Income;
