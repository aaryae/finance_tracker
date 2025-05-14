import AddIncome from "./AddIncome";
import Example from "./Example";
import IncomeTable from "./IncomeTable";

const Income = () => {
  return (
    <div className=" container mx-auto max-w-5xl  ">
      <AddIncome/>
      {/* line chart */}
      <div className="bg-[#262626] px-10 py-4 rounded-3xl">
        <h1 className="my-2  text-3xl py-4 tracking-wide uppercase text-white text-center bg-[#262626] px-10 rounded-3xl">
          Chart showing Income{" "}
        </h1>
        <br />
        <Example />
      </div>
      <br />
      <IncomeTable />
    </div>
  );
};

export default Income;
