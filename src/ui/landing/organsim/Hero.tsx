import { useEffect, useState } from "react";
import axios from "axios";
import AnalyticsHighExpense from "./section/heroAnalytics/AnalyticsHighExpense";
import AnalyticsLineChart from "./section/heroAnalytics/AnalyticsLineChart";
import ProfitCard from "./section/heroAnalytics/ProfitCard";
import IncomeTable from "./section/incomeTable/IncomeHeroTable";
import ExpenseTable from "./section/expenseTable/ExpenseHeroTable";

interface IncomeEntry {
  id: number;
  remark: string;
  amount: number;
  userId: number;
}

interface ExpenseEntry {
  id: number;
  remark: string;
  amount: number;
  receiverId: number;
}

const Hero = () => {
  const [incomeData, setIncomeData] = useState<IncomeEntry[]>([]);
  const [expenseData, setExpenseData] = useState<ExpenseEntry[]>([]);

  const userId = "2";
  const receiverId = "2"; // if same as userId
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
        console.error("Error fetching income:", err);
      }
    };

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
        console.error("Error fetching expenses:", err);
      }
    };

    fetchIncome();
    fetchExpenses();
  }, [userId, receiverId, token]);

  const firstThreeIncome = incomeData.slice(0, 3);
  const firstThreeExpenses = expenseData.slice(0, 3);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-1 justify-center">
        <div className="flex flex-col gap-3 w-fit justify-center items-center mx-6">
          <AnalyticsLineChart />
          <div className="flex flex-wrap gap-3 md:mx-4 mx-3 justify-center w-full items-center">
            <IncomeTable data={firstThreeIncome} />
            <ExpenseTable data={firstThreeExpenses} />
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col justify-center gap-4 bg-[#262626] rounded-3xl max-h-fit sticky top-12 my-3 mx-7">
          <ProfitCard />
          <AnalyticsHighExpense />
        </div>
      </div>
    </div>
  );
};

export default Hero;
