import { useEffect, useState } from "react";
import axios from "axios";
import AddIncome from "./AddIncome";
import Example from "./Example";
import IncomeTable from "./IncomeTable";

interface IncomeEntry {
  id: number;
  remark: string;
  amount: number;
  userId: number;
}

const Income = () => {
  const [incomeData, setIncomeData] = useState<IncomeEntry[]>([]);
  const userId = "2"; // Replace with dynamic ID if needed

  useEffect(() => {
    const fetchIncome = async () => {
        const token = localStorage.getItem('accessToken');

      try {
        const res = await axios.get(
          `http://localhost:8080/api/income/getById/${userId}`,
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
  }, [userId]);

  const handleEdit = (entry: IncomeEntry) => {
    console.log("Edit clicked:", entry);
    // You can open a modal or pre-fill a form
  };

  // const handleDelete = async (id: number) => {
  //   try {
  //     await axios.delete(`http://localhost:55598/api/income/delete/${userId}/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setIncomeData((prev) => prev.filter((e) => e.id !== id));
  //   } catch (err) {
  //     console.error("Failed to delete:", err);
  //   }
  // };

  return (
    <div className="container mx-auto max-w-5xl">
      <AddIncome />
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2 text-3xl py-4 tracking-wide uppercase text-white text-center">
          Chart showing Income
        </h1>
        <Example />
      </div>
      <br />
      <IncomeTable data={incomeData} />
      {/* onDelete={handleDelete} */}
      {/* onEdit={handleEdit} */}
    </div>
  );
};

export default Income;
