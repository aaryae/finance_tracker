import Example from "../Income/Example";
import IncomeTable from "../Income/IncomeTable";
import AddExpense from "./AddExpense";

const Expense = () => {
  return (
    <div className=" container mx-auto max-w-5xl ">
      <AddExpense/>
      {/* line chart */}
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2  text-3xl py-4 tracking-wide uppercase text-white text-center bg-[#262626] px-10  rounded-3xl">
          Chart showing Expenditure{" "}
        </h1>
        <br />
        <Example />
      </div>
      <br />
      <IncomeTable />
    </div>
  );
};

export default Expense;
